import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

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

const relatedBooks = [
  "Ecclesiastes",
  "Psalms",
  "Exodus",
  "Genesis",
  "Deuteronomy",
];

export default function BookOfProverbsPage() {
  return (
    <div className="min-h-screen bg-black text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">

        {/* =====================================================
            TITLE BLOCK
        ===================================================== */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

          <div className="max-w-2xl">

            <p className="mb-3 text-[10px] font-medium tracking-wide text-[#C9A227] sm:text-xs">
              Scripture Index / Detailed
            </p>

            <h1 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              The Book of Proverbs
            </h1>

            <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm lg:text-base">
              Solomonic core wisdom dedicated to character cultivation,
              market ethics, and tactical operational intelligence.
            </p>

          </div>


          {/* Associated Nuggets */}
          <div className="w-full shrink-0 rounded-lg border border-[#C9A227]/40 px-5 py-4 text-center sm:w-auto sm:min-w-[150px] sm:px-6">

            <p className="text-2xl font-semibold text-[#C9A227]">
              128
            </p>

            <p className="text-[9px] tracking-wide text-white/50 sm:text-[10px]">
              Associated Nuggets
            </p>

          </div>

        </div>


        {/* =====================================================
            FEATURED SOLOMON WISDOM
        ===================================================== */}

        <section className="mt-10 sm:mt-12">

          <h2 className="mb-5 text-base font-semibold text-white sm:text-lg">
            Featured Solomon Wisdom
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

            {featured.map((item) => (
              <article
                key={item.reference}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 sm:gap-4"
              >

                {/* Image */}
                <div className="h-20 w-20 shrink-0 rounded-md bg-gradient-to-br from-[#3a2f1c] to-[#1c1712] sm:h-20 sm:w-24" />

                {/* Content */}
                <div className="min-w-0">

                  <p className="text-[10px] font-medium text-[#C9A227] sm:text-xs">
                    {item.reference} · {item.category}
                  </p>

                  <h3 className="mt-1 text-xs font-medium leading-snug text-white sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-white/40 sm:text-xs">
                    {item.meta}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* =====================================================
            FULL SCRIPTURE LISTING
        ===================================================== */}

        <section className="mt-11 sm:mt-14">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <h2 className="text-base font-semibold text-white sm:text-lg">
              Full Scripture Listing
            </h2>

            <button className="flex w-fit items-center gap-1.5 text-[10px] text-white/50 hover:text-white sm:text-xs">

              <span>
                Sort by:
              </span>

              <span className="font-medium text-[#C9A227]">
                Verse Order
              </span>

              <span className="text-[#C9A227]">
                ▾
              </span>

            </button>

          </div>


          {/* Listing */}
          <div className="mt-5 divide-y divide-white/10 border-t border-white/10">

            {listing.map((row) => (
              <div
                key={row.reference}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >

                {/* Reference + title */}
                <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">

                  <span className="text-xs font-medium text-[#C9A227] sm:w-28 sm:shrink-0 sm:text-sm">
                    {row.reference}
                  </span>

                  <span className="text-xs leading-relaxed text-white/80 sm:text-sm">
                    {row.title}
                  </span>

                </div>


                {/* Duration + Access */}
                <div className="flex items-center justify-between gap-4 sm:justify-end">

                  <span className="text-[10px] text-white/40 sm:text-xs">
                    {row.duration}
                  </span>

                  <button
                    type="button"
                    className="rounded-md border border-[#C9A227] px-3 py-1.5 text-[10px] font-medium text-[#C9A227] transition hover:bg-[#C9A227] hover:text-[#0B0B0A] sm:text-xs"
                  >
                    Access
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            RELATED WISDOM BOOKS
        ===================================================== */}

        <section className="mt-11 sm:mt-14">

          <h2 className="mb-4 text-base font-semibold text-white sm:text-lg">
            Related Wisdom Books
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3">

            {relatedBooks.map((book) => (
              <span
                key={book}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] text-white/70 sm:px-4 sm:py-2 sm:text-xs"
              >
                {book}
              </span>
            ))}

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}