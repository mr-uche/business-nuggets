import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NuggetCard from "@/components/NuggetCard";
import { getNuggetsByTopic, topics } from "@/lib/nuggets";

export default function TopicDetailPage({ params }: { params: { slug: string } }) {
  const topic = topics.find(
    (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.slug
  );
  if (!topic) notFound();

  const topicNuggets = getNuggetsByTopic(topic);
  const featured = topicNuggets[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
        Core Wisdom Pathway
      </p>
      <h1 className="mt-1 text-2xl font-bold text-zinc-100">{topic}</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Timeless blueprint frameworks for building scalable delegation systems to Solomon&apos;s sovereign statecraft.
      </p>

      {featured && (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Featured {topic.split(" ")[0]} Wisdom
          </h2>
          <Link
            href={`/nuggets/${featured.slug}`}
            className="group block overflow-hidden rounded-xl border border-zinc-800"
          >
            <div className="relative h-64 w-full">
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
                <h3 className="mt-1 text-lg font-bold text-white">{featured.title}</h3>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="mt-10">
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
  );
}