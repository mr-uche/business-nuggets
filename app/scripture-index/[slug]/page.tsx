import Link from "next/link";

// TODO: replace with real data from lib (e.g. getScriptureBook(slug), getVersesByBook(slug))
const book = {
  title: "The Book of Proverbs",
  description:
    "Solomonic core wisdom dedicated to character cultivation, market ethics, and tactical operational intelligence.",
  nuggetCount: 128,
};

const featured = [
  {
    reference: "Proverbs 11:1",
    title: "The Law of Just Balances in Corporate Negotiation",
    tag: "Integrity",
    duration: "6 Min Listen",
    slug: "law-of-just-balances-corporate-negotiation",
    image: "/images/proverbs-11-1.jpg",
  },
  {
    reference: "Proverbs 22:7",
    title: "Sovereign Capital & Lender Bondage Control",
    tag: "Finance",
    duration: "9 Min Listen",
    slug: "sovereign-capital-lender-bondage-control",
    image: "/images/proverbs-22-7.jpg",
  },
];

const verses = [
  {
    reference: "Proverbs 11:1",
    title: "The Law of Just Balances in Corporate Negotiation",
    duration: "6 Min",
    slug: "law-of-just-balances-corporate-negotiation",
  },
  {
    reference: "Proverbs 6:1-5",
    title: "The Hazard of Swift Assent in Partnerships",
    duration: "5 Min",
    slug: "hazard-of-swift-assent-partnerships",
  },
  {
    reference: "Proverbs 22:7",
    title: "Sovereign Capital: The Borrower as Slave to the Lender",
    duration: "9 Min",
    slug: "sovereign-capital-borrower-slave-lender",
  },
  {
    reference: "Proverbs 13:22",
    title: "Generational Wealth Transfer and Enterprise Legacy",
    duration: "7 Min",
    slug: "generational-wealth-transfer-enterprise-legacy",
  },
];

const relatedBooks = ["Ecclesiastes", "Psalms", "Exodus", "Genesis", "Deuteronomy"];

export default function ScriptureIndexDetailPage({ params }: { params: { slug: string } }) {
  // TODO: look up the real book by params.slug and notFound() if missing

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
            Scripture Index Detailed
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-zinc-100">{book.title}</h1>
          <p className="mt-2 text-sm text-zinc-500 max-w-xl leading-relaxed">
            {book.description}
          </p>
        </div>

        <div className="border border-zinc-800 rounded-md px-4 py-3 text-center w-full sm:w-auto shrink-0">
          <p className="text-xl font-bold text-zinc-100">{book.nuggetCount}</p>
          <p className="text-[10px] uppercase tracking-wide text-zinc-500">Associated Nuggets</p>
        </div>
      </div>

      {/* Featured Solomon Wisdom */}
      <section className="mt-8 sm:mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Featured Solomon Wisdom
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/nuggets/${item.slug}`}
              className="flex gap-3 bg-neutral-950 border border-zinc-800 rounded-lg p-3 hover:border-zinc-600 transition"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="min-w-0">
                <p className="text-amber-400 text-[10px] uppercase tracking-wide mb-1">
                  {item.reference} &middot; {item.tag}
                </p>
                <h3 className="text-zinc-100 text-sm font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs mt-1">{item.duration}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Full Scripture Listing */}
      <section className="mt-8 sm:mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Full Scripture Listing
          </h2>
          <span className="text-xs text-zinc-500 hidden sm:inline">Sort by: Verse Order</span>
        </div>

        <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
          {verses.map((verse) => (
            <div
              key={verse.slug}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4"
            >
              <span className="text-amber-400 text-xs font-medium w-28 shrink-0">
                {verse.reference}
              </span>
              <p className="text-zinc-200 text-sm flex-1 min-w-0">{verse.title}</p>
              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                <span className="text-zinc-500 text-xs">{verse.duration}</span>
                <Link
                  href={`/nuggets/${verse.slug}`}
                  className="text-amber-400 text-xs font-medium hover:underline"
                >
                  Access
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Wisdom Books */}
      <section className="mt-8 sm:mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Related Wisdom Books
        </h2>
        <div className="flex flex-wrap gap-2">
          {relatedBooks.map((name) => (
            <span
              key={name}
              className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 hover:border-zinc-600 transition cursor-pointer"
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}