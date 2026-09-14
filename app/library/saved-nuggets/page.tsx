import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Search,
  Bookmark,
  LockKeyhole,
} from "lucide-react";

const savedNuggets = [
  {
    image: "/images/saved-hazard.png",
    category: "LEADERSHIP",
    reference: "Isaiah 41:10",
    title: "The Hazard of Swift Ascent in...",
    description: "Principles of patient and...",
  },
  {
    image: "/images/saved-delegation.png",
    category: "STRATEGY",
    reference: "Exodus 18:21",
    title: "Delegation Infrastructure & J...",
    description: "Building systems that scale...",
  },
  {
    image: "/images/saved-strategy.png",
    category: "STRATEGY",
    reference: "Habakkuk 2:2",
    title: "Strategic Hedging & Global T...",
    description: "Wisdom for navigating...",
  },
  {
    image: "/images/saved-integrity.png",
    category: "CHARACTER",
    reference: "Proverbs 11:1",
    title: "The Integrity Premium: Uniqu...",
    description: "Why integrity compounds...",
  },
];

const filters = [
  "All Saved",
  "Stewardship",
  "Leadership",
  "Covenant Strategy",
];

export default function SavedNuggetsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-10 py-14">

        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between">

          <div>
            <h1 className="font-serif text-[25px] text-white">
              Saved Nuggets
            </h1>

            <p className="mt-2 text-[14px] text-white/40">
              Your personal library of timeless business frameworks.
            </p>
          </div>

          {/* Search */}
          <div className="flex h-9 w-[280px] items-center gap-2 rounded-md border border-white/10 bg-[#111111] px-3">
            <Search
              size={18}
              className="text-white/35"
            />

            <input
              type="text"
              placeholder="Search saved nuggets..."
              className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/30"
            />
          </div>

        </div>


        {/* ================= FILTERS ================= */}
        <div className="mt-7 flex items-center gap-2">

          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full border px-4 py-1.5 text-[14px] transition ${
                index === 0
                  ? "border-[#C9A227] bg-[#C9A227] text-black"
                  : "border-white/10 bg-[#151515] text-white/60 hover:border-[#C9A227]/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>


        {/* ================= SAVED CARDS ================= */}
        <section className="mt-5 grid grid-cols-4 gap-4">

          {savedNuggets.map((nugget) => (
            <Link
              href="/library/reader"
              key={nugget.title}
              className="group overflow-hidden rounded-md border border-white/10 bg-[#0d0d0d] transition hover:border-[#C9A227]/40"
            >

              {/* Image */}
              <div className="h-[120px] w-full overflow-hidden bg-[#17130d]">
                <img
                  
                />
              </div>


              {/* Card content */}
              <div className="px-3.5 py-3">

                <div className="flex items-center justify-between">

                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#C9A227]">
                    {nugget.category}
                  </p>

                  <span className="text-[11px] text-white/35">
                    {nugget.reference}
                  </span>

                </div>


                <h2 className="mt-2 font-serif text-[14px] leading-snug text-white">
                  {nugget.title}
                </h2>


                <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                  {nugget.description}
                </p>


                <div className="mt-3 flex items-center justify-between">

                  <span className="text-[12px] text-[#C9A227]">
                    Listen & Read
                  </span>

                  <Bookmark
                    size={15}
                    className="text-[#C9A227]"
                  />

                </div>

              </div>

            </Link>
          ))}

        </section>


        {/* ================= EMPTY FOLDER ================= */}
        <section className="flex min-h-[300px] flex-col items-center justify-center">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0d0d0d]">
            <Bookmark
              size={18}
              className="text-[#C9A227]"
            />
          </div>

          <h2 className="mt-6 font-serif text-[15px] text-white">
            No custom folders created yet
          </h2>

          <p className="mt-2 max-w-[330px] text-center text-[12px] leading-relaxed text-white/40">
            Organize your bookmarked scriptures and teachings into specific
            business playlists.
          </p>

          <button className="mt-5 rounded-md bg-[#C9A227] px-7 py-2 text-[12px] font-medium text-black transition hover:bg-[#DDB93A]">
            Create Folder
          </button>

        </section>

      </main>

      <Footer />
    </div>
  );
}