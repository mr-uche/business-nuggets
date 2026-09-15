import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNuggetBySlug } from "@/lib/nuggets";
import AudioBar from "@/components/AudioBar";

export default async function NuggetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const nugget = getNuggetBySlug(slug);
  if (!nugget) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="relative mb-6 h-56 w-full overflow-hidden rounded-lg sm:h-72">
        <Image src={nugget.image} alt={nugget.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
            Nugget #{nugget.number} • {nugget.tag}
          </p>
          <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">{nugget.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <blockquote className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <p className="italic text-zinc-300">&ldquo;{nugget.scriptureText}&rdquo;</p>
            <cite className="mt-2 block text-xs font-semibold uppercase tracking-wide text-amber-500 not-italic">
              {nugget.scriptureRef}
            </cite>
          </blockquote>

          <div className="flex gap-6 border-b border-zinc-800 pb-3 text-sm">
            <Link href={`/nuggets/${nugget.slug}/read`} className="font-semibold text-amber-400">
              Read Wisdom
            </Link>
            <button className="text-zinc-500 hover:text-zinc-300">Listen Musical</button>
            <button className="text-zinc-500 hover:text-zinc-300">Listen Commentary</button>
          </div>

          <section>
            <h2 className="mb-2 text-base font-semibold text-zinc-100">Key Principle</h2>
            <p className="text-sm leading-relaxed text-zinc-400">{nugget.keyPrinciple}</p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-zinc-100">Marketplace Application</h2>
            <p className="text-sm leading-relaxed text-zinc-400">{nugget.marketplaceApplication}</p>
          </section>
        </div>

        <aside className="h-fit rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Nugget Actions
          </h3>
          <div className="space-y-2 text-sm">
            <button className="w-full rounded-md border border-zinc-700 py-2 text-left px-3 text-zinc-300 hover:border-amber-500 hover:text-amber-400">
              Save to Library
            </button>
            <button className="w-full rounded-md border border-zinc-700 py-2 text-left px-3 text-zinc-300 hover:border-amber-500 hover:text-amber-400">
              Add to Playlist
            </button>
            <button className="w-full rounded-md border border-zinc-700 py-2 text-left px-3 text-zinc-300 hover:border-amber-500 hover:text-amber-400">
              Share Commentary
            </button>
          </div>
        </aside>
      </div>

      <div className="mt-8 -mx-4 sm:mx-0">
        <AudioBar title={nugget.title} subtitle={nugget.topic} duration={nugget.duration} />
      </div>
    </div>
  );
}