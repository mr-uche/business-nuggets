import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Search,
  Bookmark,
  Clock,
} from "lucide-react";

const savedNuggets = [
  {
    image: "/images/saved-nugget1.png",
    category: "LEADERSHIP",
    duration: "5 Mins",
    title: "The Hazard of Swift Ascent in...",
    description: "Isaiah 41:10",
  },
  {
    image: "/images/saved-nugget2.png",
    category: "STRATEGY",
    duration: "8 Mins",
    title: "Delegation Infrastructure & J...",
    description: "Exodus 18:21",
  },
  {
    image: "/images/saved-nugget3.png",
    category: "STRATEGY",
    duration: "7 Mins",
    title: "Strategic Hedging & Global T...",
    description: "Habakkuk 2:2",
  },
  {
    image: "/images/saved-nugget4.png",
    category: "CHARACTER",
    duration: "6 Mins",
    title: "The Integrity Premium: Uniqu...",
    description: "Proverbs 11:1",
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
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto max-w-[1200px] px-5 py-9 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          <div className="min-w-0">

            <h1 className="font-serif text-[40px] text-white sm:text-[25px]">
              Saved Nuggets
            </h1>

            <p className="mt-2 text-[16px] leading-relaxed text-white/40 sm:text-[14px]">
              Your personal library of timeless business frameworks.
            </p>

          </div>


          {/* Search */}

          <div className="flex h-9 w-full items-center gap-2 rounded-md border border-white/10 bg-[#111111] px-3 sm:h-10 lg:w-[280px]">

            <Search
              size={16}
              className="shrink-0 text-white/35"
            />

            <input
              type="text"
              placeholder="Search saved nuggets..."
              className="min-w-0 w-full bg-transparent text-[14px] text-white outline-none placeholder:text-white/30 sm:text-[14px]"
            />

          </div>

        </div>


        {/* ================= FILTERS ================= */}

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1 sm:mt-7">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[14px] transition sm:px-4 sm:text-[13px] ${
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

        <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {savedNuggets.map((nugget) => (
            <Link
              href="/library/reader"
              key={nugget.title}
              className="group min-w-0 overflow-hidden rounded-md border border-white/10 bg-[#0d0d0d] transition hover:border-[#C9A227]/40"
            >

              {/* Image */}

              <div className="h-[150px] w-full overflow-hidden bg-[#17130d] sm:h-[135px] lg:h-[120px]">

                <img
                  src={nugget.image}
                  alt={nugget.title}
                  className="h-full w-full object-cover"
                />

              </div>


              {/* Card content */}

              <div className="px-3.5 py-3">

                <div className="flex items-center justify-between gap-2">

                  <p className="min-w-0 text-[12px] font-bold uppercase tracking-wide text-[#C9A227] sm:text-[11px]">
                    {nugget.category}
                  </p>

                  <span className=" shrink-0 text-[10px] flex items-center justify-center gap-2 text-white/35 sm:text-[11px]">
                   <Clock size={15}
                    className=" mt-0 text-white/35"/>
                    {nugget.duration}
                  </span>

                </div>


                <h2 className="mt-2 font-serif text-[20px] leading-snug text-white sm:text-[14px]">
                  {nugget.title}
                </h2>


                <p className="mt-2 text-[12px] leading-relaxed  italic text-white/40 sm:text-[11px]">
                  {nugget.description}
                </p>


                <div className="mt-3 flex items-center justify-between">

                  <span className="text-[13px] text-[#C9A227] sm:text-[12px]">
                    Listen & Read
                  </span>

                  <Bookmark
                    size={15}
                    className="shrink-0 text-[#C9A227]"
                  />

                </div>

              </div>

            </Link>
          ))}

        </section>


        {/* ================= EMPTY FOLDER ================= */}

        <section className="flex min-h-[260px] flex-col items-center justify-center px-4 py-10 sm:min-h-[300px]">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0d0d0d]">

            <Bookmark
              size={18}
              className="text-[#C9A227]"
            />

          </div>


          <h2 className="mt-5 text-center font-serif text-[14px] text-white sm:mt-6 sm:text-[15px]">
            No custom folders created yet
          </h2>


          <p className="mt-2 max-w-[330px] text-center text-[11px] leading-relaxed text-white/40 sm:text-[12px]">
            Organize your bookmarked scriptures and teachings into specific
            business playlists.
          </p>


          <button
            type="button"
            className="mt-5 rounded-md bg-[#C9A227] px-6 py-2 text-[11px] font-medium text-black transition hover:bg-[#DDB93A] sm:px-7 sm:text-[12px]"
          >
            Create Folder
          </button>

        </section>

      </main>

      <Footer />

    </div>
  );
}