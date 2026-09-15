import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  GripVertical,
  Headphones,
  MessageSquarePlus,
  CirclePlay,
  MoreHorizontal,
  Play,
  Pencil,
  Trash2,
} from "lucide-react";
 
const playlistItems = [
  {
    number: "1",
    category: "STEWARDSHIP",
    title: "Joseph's Seven-Year Reserve Blueprint",
    reference: "Genesis 41:1–36",
    duration: "12:45",
    image: "/images/joseph-storehouse.png",
  },
  {
    number: "2",
    category: "LEADERSHIP",
    title: "Delegation Infrastructure & Jethro's Governance",
    reference: "Exodus 18:13–26",
    duration: "08:15",
    image: "/images/conflict-resolution.png",
  },
  {
    number: "3",
    category: "STRATEGY",
    title: "The Construction Wisdom: Building with Nehemiah",
    reference: "Nehemiah 2",
    duration: "15:10",
    image: "/images/nehemiah-wall.png",
  },
  {
    number: "4",
    category: "STEWARDSHIP",
    title: "The Hazard of Swift Ascent in Partnerships",
    reference: "Proverbs 11:1",
    duration: "05:00",
    image: "/images/saved-hazard.png",
  },
];
 
export default function PlaylistDetailPage() {
  return (
    <div className="min-h-screen bg-black text-[#EDEAE3]">
      <Navbar />
 
      <main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
 
        {/* ================= PLAYLIST HEADER ================= */}
        <section className="rounded-lg border border-white/10 bg-[#101010] p-4 sm:p-6">
 
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
 
            {/* Playlist image */}
            <div className="h-[160px] w-full shrink-0 overflow-hidden rounded-md bg-[#17130d] sm:h-[120px] sm:w-[150px]">
              <img
                
              />
            </div>
 
            {/* Playlist information */}
            <div className="flex-1">
 
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#C9A227]">
                Curated Wisdom Playlist
              </p>
 
              <h1 className="mt-2 font-serif text-[27px] leading-tight text-white">
                Blueprint for Financial Preservation
              </h1>
 
              <p className="mt-2 max-w-[750px] text-[12px] leading-relaxed text-white/40">
                Timeless methods for capital reserves, risk diversification,
                and long-term kingdom governance. Created by you on Feb 12, 2026.
              </p>
 
              <div className="mt-4 flex flex-col gap-4 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex items-center gap-3 p-2">
                  <span>
                    <strong className="text-white">4</strong> Items
                  </span>
 
                  <span>
                   <strong className="text-white">41 min</strong> Total Duration
                  </span>
                </div>    
               {/* Playlist actions */}
                <div className="flex shrink-0 flex-wrap items-center gap-2">
 
               <button className="flex items-center gap-2 rounded-md bg-[#C9A227] px-4 py-2 text-[12px] font-medium text-black hover:bg-[#DDB93A]">
                <Play size={15} fill="currentColor" />
                Play All
               </button>
 
               <button className="flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-[12px] text-white/70 hover:border-white/20 hover:text-white">
                <Pencil size={15} />
                Edit Playlist
               </button>
 
               <button className="flex items-center gap-2 rounded-md border border-red-500/20 px-4 py-2 text-[12px] text-red-400 hover:bg-red-500/5">
                <Trash2 size={15} />
                Delete
               </button>
             </div>
              </div>
            
             
            </div>
 
            
 
          </div>
 
        </section>
 
 
        {/* ================= PLAYLIST ITEMS ================= */}
        <section className="mt-5 space-y-2 overflow-x-auto">
 
          {playlistItems.map((item) => (
            <div
              key={item.number}
              className="group flex h-[66px] min-w-[560px] items-center rounded-md border border-white/10 bg-[#0d0d0d] px-3 transition hover:border-white/20"
            >
 
              {/* Drag handle */}
              <div className="flex w-[28px] items-center justify-center">
                <GripVertical
                  size={13}
                  className="text-white/20"
                />
              </div>
 
 
              {/* Number */}
              <div className="w-[25px] text-center">
                <span className="text-[10px] text-white/35">
                  {item.number}
                </span>
              </div>
 
 
              {/* Thumbnail */}
              <div className="ml-2 h-[43px] w-[48px] shrink-0 overflow-hidden rounded-sm bg-[#17130d]">
                <img
                 
                />
              </div>
 
 
              {/* Item information */}
              <div className="ml-4 min-w-0 flex-1">
 
                <p className="text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
                  {item.category}
                </p>
 
                <h2 className="mt-1 truncate font-serif text-[12px] text-white">
                  {item.title}
                </h2>
 
                <p className="mt-1 text-[10px] text-white/35">
                  {item.reference}
                </p>
 
              </div>
 
 
              {/* Item controls */}
              <div className="flex items-center gap-5">
 
                <button
                  className="text-[#C9A227] opacity-70 transition hover:opacity-100"
                  aria-label="Listen"
                >
                  <Headphones size={15} />
                </button>
 
                <button
                  className="text-white/40 transition hover:text-white"
                  aria-label="Read"
                >
                  <MessageSquarePlus size={15} />
                </button>
 
                <span className="w-[40px] text-right text-[12px] text-white/40">
                  {item.duration}
                </span>
 
                <button
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C9A227]/30 text-[#C9A227] transition hover:bg-[#C9A227]/10"
                  aria-label="Play item"
                >
                  <CirclePlay size={15} />
                </button>
 
                <button
                  className="text-white/30 transition hover:text-white"
                  aria-label="More options"
                >
                  <MoreHorizontal size={15} />
                </button>
 
              </div>
 
            </div>
          ))}
 
        </section>
 
      </main>
 
      <Footer />
    </div>
  );
}