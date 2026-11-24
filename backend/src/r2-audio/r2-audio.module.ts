import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AppSettingsModule } from '../app-settings/app-settings.module';
import { R2AudioController } from './r2-audio.controller';
import { R2AudioService } from './r2-audio.service';
import { R2BulkSongMatchService } from './r2-bulk-song-match.service';

@Module({
  imports: [AuthModule, AppSettingsModule],
  controllers: [R2AudioController],
  providers: [R2AudioService, R2BulkSongMatchService],
  exports: [R2AudioService],
})
export class R2AudioModule {}
