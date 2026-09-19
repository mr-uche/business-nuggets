import Link from "next/link";

// TODO: replace with real data from lib (e.g. getCollectionBySlug(slug))
const collection = {
  title: "Starting Your Business God's Way",
  description:
    "An ordered, executive roadmap designed to guide prospective founders from ideation to sovereign launch. Sync your operations with historical, unshakable blueprints.",
  completed: 4,
  total: 10,
  image: "/images/collection-starting-business.jpg",
};

const units = [
  {
    number: "01",
    title: "The Joseph Storage Blueprint",
    reference: "Genesis 41",
    duration: "12:45",
    image: "/images/unit-joseph.jpg",
    slug: "joseph-storage-blueprint",
  },
  {
    number: "02",
    title: "The Delegation Infrastructure Architecture",
    reference: "Exodus 18",
    duration: "10:15",
    image: "/images/unit-delegation.jpg",
    slug: "delegation-infrastructure-architecture",
  },
  {
    number: "03",
    title: "Just Weights and Integrity Premium Pricing",
    reference: "Proverbs 11:1",
    duration: "08:30",
    image: "/images/unit-just-weights.jpg",
    slug: "just-weights-integrity-premium-pricing",
  },
  {
    number: "04",
    title: "Building Under Adversity and Siege Controls",
    reference: "Nehemiah 4",
    duration: "11:20",
    image: "/images/unit-nehemiah.jpg",
    slug: "building-under-adversity-siege-controls",
  },
];

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  // TODO: look up the real collection by params.slug and notFound() if missing

  const percentComplete = Math.round((collection.completed / collection.total) * 100);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        <div
          className="w-full sm:w-40 h-40 rounded-lg bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url('${collection.image}')` }}
        />

        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
            Curated Learning Pathway
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-zinc-100">
            {collection.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500 max-w-xl leading-relaxed">
            {collection.description}
          </p>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
              <span>
                {collection.completed} / {collection.total} Completed
              </span>
              <span>{percentComplete}% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button className="bg-amber-500 text-black text-sm font-medium px-5 py-2.5 rounded-md hover:bg-amber-400 transition">
              Play Entire Series
            </button>
            <button className="border border-zinc-700 text-zinc-300 text-sm px-5 py-2.5 rounded-md hover:border-zinc-500 transition">
              Bookmark Path
            </button>
          </div>
        </div>
      </div>

      {/* Chronological Blueprint Units */}
      <section className="mt-8 sm:mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Chronological Blueprint Units
        </h2>

        <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
          {units.map((unit) => (
            <Link
              key={unit.slug}
              href={`/nuggets/${unit.slug}`}
              className="flex items-center gap-3 sm:gap-4 p-4 hover:bg-white/5 transition"
            >
              <span className="text-zinc-500 text-sm font-medium w-6 shrink-0">
                {unit.number}
              </span>
              <div
                className="w-12 h-12 rounded bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${unit.image}')` }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-zinc-100 text-sm font-medium truncate">{unit.title}</p>
                <p className="text-zinc-500 text-xs truncate">{unit.reference}</p>
              </div>
              <span className="text-zinc-500 text-xs shrink-0 hidden sm:inline">
                {unit.duration}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}