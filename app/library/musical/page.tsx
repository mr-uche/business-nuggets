import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  SkipBack,
  Play,
  SkipForward,
} from "lucide-react";
 
const relatedMusicals = [
  {
    title: "Joseph's Storehouse Strategy",
    reference: "Genesis 41",
    image: "/images/joseph-storehouse.png",
  },
  {
    title: "Nehemiah's Wall Construction",
    reference: "Nehemiah 3",
    image: "/images/nehemiah-wall.png",
  },
  {
    title: "Sovereign Capital & Stewardship",
    reference: "Proverbs 13:22",
    image: "/images/sovereign-capital.png",
  },
];
 
export default function NuggetPlayerPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">
      <Navbar />
 
      <main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
 
        {/* ================= TOP SECTION ================= */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[350px_1fr] lg:gap-14">
 
          {/* ================= COVER SECTION ================= */}
          <div className="flex flex-col items-center">
 
            {/* Cover */}
            <div className="h-[220px] w-[220px] overflow-hidden rounded-lg border border-white/10 bg-[#17130d]">
              <img
              />
            </div>
 
            {/* Category */}
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#C9A227]">
              Wisdom Cinematic Musical
            </p>
 
            {/* Title */}
            <h2 className="mt-2 font-serif text-[18px] leading-tight text-white">
              The Balance of Negotiation Suite
            </h2>
 
            {/* Producer */}
            <p className="mt-2 text-[10px] text-white/40">
              Produced by Arima Vance & London Symphony
            </p>
 
            {/* ================= PLAY CONTROLS ================= */}
            <div className="mt-7 flex items-center gap-7">
 
              <button
                className="text-white/55 transition hover:text-white"
                aria-label="Previous"
              >
                <SkipBack size={22} />
              </button>
 
              <button
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#C9A227] text-black transition hover:bg-[#DDB93A]"
                aria-label="Play"
              >
                <Play
                  size={21}
                  fill="currentColor"
                />
              </button>
 
              <button
                className="text-white/55 transition hover:text-white"
                aria-label="Next"
              >
                <SkipForward size={22} />
              </button>
 
            </div>
          </div>
 
 
          {/* ================= LYRICS SECTION ================= */}
          <div className="min-w-0 pt-1">
 
            {/* Scripture reference box */}
            <div className="flex min-h-[68px] flex-col gap-3 rounded-md border border-[#C9A227]/60 bg-[#0c0c0b] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
 
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#C9A227]">
                  Present Scripture Study
                </p>
 
                <p className="mt-1.5 font-serif text-[15px] text-white">
                  Proverbs 11:1 · The Law of Just Balances
                </p>
              </div>
 
              <Link
                href="/library/reader"
                className="shrink-0 rounded-md border border-[#C9A227]/60 px-4 py-2 text-[10px] text-[#C9A227] transition hover:bg-[#C9A227]/10"
              >
                Read Exposition
              </Link>
 
            </div>
 
 
            {/* Cinematic Lyrics */}
            <div className="mt-12">
 
              <h1 className="font-serif text-[24px] text-white">
                Cinematic Lyrics
              </h1>
 
              <div className="mt-6 space-y-3">
 
                <p className="font-serif text-[16px] leading-relaxed text-[#C9A227]">
                  In the market place of weights and balances,
                </p>
 
                <p className="font-serif text-[16px] leading-relaxed text-white/80">
                  A single scale determines kingdoms&apos; legacies.
                </p>
 
                <p className="font-serif text-[16px] leading-relaxed text-[#C9A227]">
                  Just weights are His pure delight,
                </p>
 
                <p className="font-serif text-[16px] leading-relaxed text-white/80">
                  Let negotiation shine in crystal light.
                </p>
 
              </div>
 
            </div>
 
          </div>
 
        </section>
 
 
        {/* ================= RELATED SECTION ================= */}
        <section className="mt-16">
 
          <h2 className="font-serif text-[16px] text-white">
            Related Cinematic Musicals
          </h2>
 
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
 
            {relatedMusicals.map((item) => (
              <Link
                href="/library"
                key={item.title}
                className="group flex min-h-[76px] items-center gap-4 rounded-md border border-white/10 bg-[#0d0d0d] px-4 transition hover:border-[#C9A227]/40"
              >
 
                {/* Thumbnail */}
                <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-sm bg-[#19140d]">
                  <img
                    
                  />
                </div>
 
                {/* Card text */}
                <div className="min-w-0">
 
                  <p className="truncate font-serif text-[12px] text-white">
                    {item.title}
                  </p>
 
                  <p className="mt-1.5 text-[9px] text-white/40">
                    Reference: {item.reference}
                  </p>
 
                </div>
 
              </Link>
            ))}
 
          </div>
 
        </section>
 
      </main>
 
      <Footer />
    </div>
  );
}