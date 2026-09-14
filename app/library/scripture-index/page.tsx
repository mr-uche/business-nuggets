import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

 
const featured = [
  {
    reference: "Proverbs 11:1",
    category: "Negotiation",
    title: "The Law of Just Balances in Corporate Negotiation",
    meta: "8 Min Listen • Integrity",
  },
  {
    reference: "Proverbs 22:7",
    category: "Finance",
    title: "Sovereign Capital & Lender Bondage Control",
    meta: "9 Min Listen • Finance",
  },
];
 
const listing = [
  {
    reference: "Proverbs 11:1",
    title: "The Law of Just Balances in Corporate Negotiation",
    duration: "8 Min",
  },
  {
    reference: "Proverbs 6:1–5",
    title: "The Hazard of Swift Assent in Partnerships",
    duration: "5 Min",
  },
  {
    reference: "Proverbs 22:7",
    title: "Sovereign Capital: The Borrower is Slave to the Lender",
    duration: "9 Min",
  },
  {
    reference: "Proverbs 13:22",
    title: "Generational Wealth Transfers and Enterprise Legacy",
    duration: "7 Min",
  },
];
 
const relatedBooks = ["Ecclesiastes", "Psalms", "Exodus", "Genesis", "Deuteronomy"];
 
export default function BookOfProverbsPage() {
  return (
    <div className="min-h-screen bg-black text-[#EDEAE3]">

       <Navbar />
 
      <main className="mx-auto max-w-6xl px-8 py-12 lg:px-16">
        {/* Title block */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium tracking-wide text-[#C9A227]">
              Scripture Index / Detailed
            </p>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              The Book of Proverbs
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
              Solomonic core wisdom dedicated to character cultivation, market ethics, and
              tactical operational intelligence.
            </p>
          </div>
 
          <div className="shrink-0 rounded-lg border border-[#C9A227]/40 px-6 py-4 text-center">
            <p className="text-2xl font-semibold text-[#C9A227]">128</p>
            <p className="text-[10px] tracking-wide text-white/50">Associated Nuggets</p>
          </div>
        </div>
 
        {/* Featured Solomon Wisdom */}
        <section className="mt-12">
          <h2 className="mb-5 text-lg font-semibold text-white">Featured Solomon Wisdom</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {featured.map((item) => (
              <article
                key={item.reference}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="h-20 w-24 shrink-0 rounded-md bg-gradient-to-br from-[#3a2f1c] to-[#1c1712]" />
                <div>
                  <p className="text-xs font-medium text-[#C9A227]">
                    {item.reference} · {item.category}
                  </p>
                  <h3 className="mt-1 text-sm font-medium leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/40">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
 
        {/* Full Scripture Listing */}
        <section className="mt-14">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Full Scripture Listing</h2>
            <button className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white">
              Sort by:
              <span className="font-medium text-[#C9A227]">Verse Order</span>
              <span className="text-[#C9A227]">▾</span>
            </button>
          </div>
 
          <div className="mt-5 divide-y divide-white/10 border-t border-white/10">
            {listing.map((row) => (
              <div
                key={row.reference}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-sm font-medium text-[#C9A227] sm:w-28 sm:shrink-0">
                    {row.reference}
                  </span>
                  <span className="text-sm text-white/80">{row.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/40">{row.duration}</span>
                  <button className="rounded-md border border-[#C9A227] px-3 py-1.5 text-xs font-medium text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B0B0A]">
                    Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
 
        {/* Related Wisdom Books */}
        <section className="mt-14">
          <h2 className="mb-4 text-lg font-semibold text-white">Related Wisdom Books</h2>
          <div className="flex flex-wrap gap-3">
            {relatedBooks.map((book) => (
              <span
                key={book}
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/70"
              >
                {book}
              </span>
            ))}
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
  );
}