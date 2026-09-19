import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NuggetCard from "@/components/NuggetCard";
import { getNuggetsByTopic, topics } from "@/lib/nuggets";

// TODO: replace with real subtopic data once available (e.g. per-topic segments from lib/nuggets)
const placeholderSubtopics = [
  "Operational Delegation",
  "Sovereign Statecraft",
  "Executive Stewardship",
  "Conflict Resolution",
  "Interpersonal Ethics",
  "Visionary Architecture",
];

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = topics.find(
    (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );
  if (!topic) notFound();

  const topicNuggets = getNuggetsByTopic(topic);
  const featured = topicNuggets[0];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
            Core Wisdom Pathway
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-zinc-100">{topic}</h1>
          <p className="mt-1 text-sm text-zinc-500 max-w-xl">
            Timeless blueprint frameworks for building scalable delegation systems to Solomon&apos;s sovereign statecraft.
          </p>
        </div>

        <button className="w-full sm:w-auto bg-amber-500 text-black text-sm font-medium px-5 py-2.5 rounded-md hover:bg-amber-400 transition whitespace-nowrap">
          Follow Topic
        </button>
      </div>

      {/* Main + sidebar layout */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-10">
          {featured && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Featured {topic.split(" ")[0]} Wisdom
              </h2>
              <Link
                href={`/nuggets/${featured.slug}`}
                className="group block overflow-hidden rounded-xl border border-zinc-800"
              >
                <div className="relative h-52 sm:h-64 w-full">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
                      {featured.tag}
                    </p>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-white">
                      {featured.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </section>
          )}

          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              All {topic.split(" ")[0]} Nuggets
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {topicNuggets.map((n) => (
                <NuggetCard key={n.slug} nugget={n} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-zinc-800 p-5 sm:p-6 lg:sticky lg:top-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-4">
              Subtopics &amp; Segments
            </h2>
            <ul className="space-y-1">
              {placeholderSubtopics.map((label, i) => (
                <li key={label}>
                  <button
                    className={`w-full text-left text-sm px-3 py-2 rounded-md transition ${
                      i === 0
                        ? "bg-amber-500/10 text-amber-400"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}