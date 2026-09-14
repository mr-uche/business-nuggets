import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Bookmark,
  ListPlus,
  PenSquare,
  FileText,
} from "lucide-react";
 
const wisdomQueue = [
  {
    number: 1,
    title: "Joseph's Storage Planning Strategy",
    reference: "Genesis 41",
    duration: "12:45",
  },
  {
    number: 2,
    title: "Building Nehemiah's Architectural Walls",
    reference: "Nehemiah 3",
    duration: "10:15",
  },
  {
    number: 3,
    title: "Generational Transfer & Sovereign Legacy",
    reference: "Proverbs 13:22",
    duration: "07:20",
  },
];
 
export default function NuggetPlayerPage() {
  return (
    <div className="min-h-screen bg-black text-[#EDEAE3]">
      <Navbar />
 
      <main className="mx-auto max-w-6xl px-8 py-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* Player column */}
          <div>
            <div className="h-72 w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#3a2f1c] to-[#141110]" />
 
            <div className="mt-8 text-center">
              <p className="text-xs font-medium tracking-wide text-[#C9A227]">
                Proverbs 11:1 · Core Principle
              </p>
              <h1 className="mt-3 font-serif text-2xl leading-snug text-white sm:text-3xl">
                The Law of Just Balances in Corporate Negotiation
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm italic leading-relaxed text-white/40">
                &ldquo;A false balance is an abomination to the Lord, but a just weight is his
                delight.&rdquo;
              </p>
            </div>
 
            {/* Progress bar */}
            <div className="mt-10">
              <div className="h-1 w-full rounded-full bg-white/10">
                <div className="h-1 w-[28%] rounded-full bg-[#C9A227]" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>02:15</span>
                <span>08:00</span>
              </div>
            </div>
 
            {/* Playback controls */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <button className="text-white/50 hover:text-white" aria-label="Shuffle">
                <Shuffle size={18} />
              </button>
              <button className="text-white/70 hover:text-white" aria-label="Previous">
                <SkipBack size={20} />
              </button>
              <button
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-[#0B0B0A] hover:bg-[#DDB93A]"
                aria-label="Play"
              >
                <Play size={22} fill="currentColor" />
              </button>
              <button className="text-white/70 hover:text-white" aria-label="Next">
                <SkipForward size={20} />
              </button>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#C9A227]/60">
                1.5x
              </span>
            </div>
 
            {/* Action row */}
            <div className="mt-10 flex items-center justify-center gap-10 border-t border-white/10 pt-6">
              <button className="flex flex-col items-center gap-1.5 text-xs text-white/50 hover:text-white">
                <Bookmark size={18} />
                Save
              </button>
              <button className="flex flex-col items-center gap-1.5 text-xs text-white/50 hover:text-white">
                <ListPlus size={18} />
                Playlist
              </button>
              <button className="flex flex-col items-center gap-1.5 text-xs text-white/50 hover:text-white">
                <PenSquare size={18} />
                Write Notes
              </button>
              <button className="flex flex-col items-center gap-1.5 text-xs text-white/50 hover:text-white">
                <FileText size={18} />
                Transcript
              </button>
            </div>
          </div>
 
          {/* Wisdom Queue sidebar */}
          <aside>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">Wisdom Queue</h2>
              <Link href="/library/reader" className="text-xs font-medium text-[#C9A227] hover:underline">
                Open Full Reader View
              </Link>
            </div>
 
            <div className="mt-5 divide-y divide-white/10 rounded-lg border border-white/10">
              {wisdomQueue.map((item) => (
                <div key={item.number} className="flex items-center gap-3 px-4 py-3">
                  <span className="text-xs font-medium text-white/30">{item.number}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="text-xs text-white/40">{item.reference}</p>
                  </div>
                  <span className="text-xs text-white/40">{item.duration}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
 
      <Footer />
    </div>
  );
}