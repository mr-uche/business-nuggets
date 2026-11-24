import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import {
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';
import { detectMediaMime } from '../media/media-types';

export type R2AudioKind = 'song' | 'nuggets';

const MAX_AUDIO_SIZE = 50 * 1024 * 1024;
const R2_REFERENCE = /^r2:\/\/(song|nuggets)\/(.+\.mp3)$/i;

@Injectable()
export class R2AudioService {
  private clientInstance?: S3Client;

  private client(): S3Client {
    const accountId = process.env.R2_ACCOUNT_ID;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

    if (!accountId || !accessKeyId || !secretAccessKey) {
      throw new ServiceUnavailableException(
        'R2 storage is not configured',
      );
    }

    this.clientInstance ??= new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    return this.clientInstance;
  }

  private bucket(kind: R2AudioKind): string {
    const name =
      kind === 'song'
        ? process.env.R2_SONG_BUCKET
        : process.env.R2_NUGGETS_BUCKET;

    if (!name) {
      throw new ServiceUnavailableException(
        `R2 ${kind} bucket is not configured`,
      );
    }

    return name;
  }

  // Keep the existing R2 key's original case, including folder paths.
  private validAudioKey(key: string): boolean {
    return (
      Buffer.byteLength(key, 'utf8') <= 1024 &&
      key.length > 0 &&
      !key.startsWith('/') &&
      !/[\x00-\x1f\x7f\\]/.test(key) &&
      !key.split('/').some(
        (part) => !part || part === '.' || part === '..',
      ) &&
      /\.mp3$/i.test(key)
    );
  }

  private parseReference(reference: string) {
    const match = R2_REFERENCE.exec(reference);

    if (!match || !this.validAudioKey(match[2])) {
      throw new BadRequestException('Invalid R2 audio reference');
    }

    const kind = match[1].toLowerCase() as R2AudioKind;

    return {
      kind,
      bucket: this.bucket(kind),
      key: match[2],
    };
  }

  // Search by the numbering convention used for Business Nuggets songs.
  // This is intentionally a root-level, case-sensitive R2 prefix lookup.
  async matchSongByNumber(number: number) {
    if (!Number.isSafeInteger(number) || number < 1) {
      throw new BadRequestException('Invalid Nugget number');
    }

    const prefix = `BN ${String(number).padStart(4, '0')}`;

    try {
      const result = await this.client().send(
        new ListObjectsV2Command({
          Bucket: this.bucket('song'),
          Prefix: prefix,
          MaxKeys: 1000,
        }),
      );

      const matches = (result.Contents ?? [])
        .filter((object) => {
          const key = object.Key;

          if (!key || !this.validAudioKey(key) || (object.Size ?? 0) <= 0) {
            return false;
          }

          const filename = key.split('/').pop() ?? '';
          const match = /^BN\s+0*(\d+)(?=[\s._-]|$)/i.exec(filename);

          return match !== null && Number(match[1]) === number;
        })
        .map((object) => ({
          name: object.Key as string,
          reference: `r2://song/${object.Key as string}`,
        }));

      // Never auto-assign if there are multiple matches or the result is
      // incomplete. The admin can then select the file manually.
      if (result.IsTruncated || matches.length > 1) {
        return { status: 'multiple', matches };
      }

      if (matches.length === 0) {
        return { status: 'not_found', matches: [] };
      }

      return {
        status: 'matched',
        reference: matches[0].reference,
        matches,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof ServiceUnavailableException
      ) {
        throw error;
      }

      // Keep underlying provider details out of HTTP responses.
      console.error('R2 song auto-match failed:', error);
      throw new BadGatewayException('Could not match a song in R2');
    }
  }

  // List existing MP3 objects without uploading or copying them.
  async listFiles(kind: R2AudioKind, continuationToken?: string) {
    if (kind !== 'song' && kind !== 'nuggets') {
      throw new BadRequestException('Invalid R2 audio bucket');
    }

    if (continuationToken && continuationToken.length > 4096) {
      throw new BadRequestException('Invalid pagination token');
    }

    try {
      const result = await this.client().send(
        new ListObjectsV2Command({
          Bucket: this.bucket(kind),
          MaxKeys: 100,
          ...(continuationToken
            ? { ContinuationToken: continuationToken }
            : {}),
        }),
      );

      const files = (result.Contents ?? [])
        .filter(
          (item) =>
            typeof item.Key === 'string' &&
            this.validAudioKey(item.Key) &&
            (item.Size ?? 0) > 0,
        )
        .map((item) => {
          const key = item.Key as string;

          return {
            key,
            name: key.split('/').pop() ?? key,
            size: item.Size ?? 0,
            reference: `r2://${kind}/${key}`,
          };
        });

      return {
        files,
        nextContinuationToken: result.IsTruncated
          ? result.NextContinuationToken ?? null
          : null,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadGatewayException('Could not list audio files in R2');
    }
  }

  async signUpload(kind: R2AudioKind, filename: string, size: number) {
    if (
      (kind !== 'song' && kind !== 'nuggets') ||
      !/\.mp3$/i.test(filename) ||
      !Number.isInteger(size) ||
      size < 1 ||
      size > MAX_AUDIO_SIZE
    ) {
      throw new BadRequestException(
        'Upload an MP3 file no larger than 50 MB',
      );
    }

    const key = `${randomUUID()}.mp3`;

    const uploadUrl = await getSignedUrl(
      this.client(),
      new PutObjectCommand({
        Bucket: this.bucket(kind),
        Key: key,
        ContentType: 'audio/mpeg',
      }),
      { expiresIn: 600 },
    );

    return {
      uploadUrl,
      method: 'PUT',
      contentType: 'audio/mpeg',
      reference: `r2://${kind}/${key}`,
    };
  }

  async completeUpload(reference: string) {
    const { bucket, key } = this.parseReference(reference);

    try {
      const result = await this.client().send(
        new HeadObjectCommand({ Bucket: bucket, Key: key }),
      );

      const size = Number(result.ContentLength ?? 0);
      const contentType = result.ContentType?.split(';')[0].trim();

      if (size < 1 || size > MAX_AUDIO_SIZE || contentType !== 'audio/mpeg') {
        throw new BadRequestException(
          'Uploaded file must be an MP3 no larger than 50 MB',
        );
      }

      const sample = await this.client().send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: key,
          Range: 'bytes=0-8191',
        }),
      );

      const bytes = sample.Body
        ? Buffer.from(await sample.Body.transformToByteArray())
        : Buffer.alloc(0);

      if (detectMediaMime(bytes) !== 'audio/mpeg') {
        throw new BadRequestException(
          'Uploaded file does not contain valid MP3 audio',
        );
      }

      return { reference, size };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadGatewayException(
        'Could not verify the uploaded file in R2',
      );
    }
  }

  async resolvePlaybackUrl(reference: string | null | undefined) {
    if (!reference || !reference.startsWith('r2://')) {
      return reference ?? null;
    }

    const { bucket, key } = this.parseReference(reference);

    return getSignedUrl(
      this.client(),
      new GetObjectCommand({ Bucket: bucket, Key: key }),
      { expiresIn: 3600 },
    );
  }
}
