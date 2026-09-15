import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
 
const playlists = [
  {
    title: "Capital Stewardship & Debt",
    count: "7 Nuggets linked",
    duration: "42 mins",
    description:
      "Critical lessons on managing cash flow buffers and staying leverage-free.",
    image: "/images/capital-stewardship.png",
  },
  {
    title: "Conflict Resolution & Scale",             
    count: "12 Nuggets linked",
    duration: "1h 15m",
    description:
      "Biblical infrastructure rules for establishing delegation standards in scaling startups.",
    image: "/images/conflict-resolution.png",
  },
  {
    title: "Integrity As A Premium Brand",
    count: "5 Nuggets linked",
    duration: "28 mins",
    description:
      "Understanding how radical transparency commands supreme brand value in B2B.",
    image: "/images/integrity-brand.png",
  },
];
 
export default function PlaylistsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">
      <Navbar />
 
      <main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
 
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
 
          <div>
            <h1 className="font-serif text-[28px] text-white">
              My Playlists
            </h1>
 
            <p className="mt-2 text-[12px] text-white/40">
              Premium audio modules structured for specific executive
              development paths.
            </p>
          </div>
 
          <button className="flex items-center gap-2 self-start rounded-md bg-[#C9A227] px-5 py-2.5 text-[12px] font-medium text-black transition hover:bg-[#DDB93A] sm:self-auto">
            <Plus size={14} />
            Create New Playlist
          </button>
 
        </div>
 
 
        {/* ================= PLAYLIST CARDS ================= */}
        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
 
          {playlists.map((playlist) => (
            <div
              key={playlist.title}
              className="overflow-hidden rounded-md border p-5 border-white/10 bg-[#0d0d0d] transition hover:border-[#C9A227]/40"
            >
 
              {/* Image + heading */}
              <div className="flex gap-3 p-3">
 
                <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-sm bg-[#17130d]">
                  <img
                 
                  />
                </div>
 
                <div className="min-w-0 pt-1">
 
                  <h2 className="font-serif text-[14px] leading-tight text-white">
                    {playlist.title}
                  </h2>
 
                  <p className="mt-2 text-[10px] text-white/35">
                    {playlist.count} · {playlist.duration}
                  </p>
 
                </div>
 
              </div>
 
 
              {/* Description */}
              <div className="px-3 pb-3">
 
                <p className="min-h-[35px] text-[10px] leading-relaxed text-white/45">
                  {playlist.description}
                </p>
 
 
                {/* Bottom action */}
                <Link
                  href="/library/player"
                  className="mt-4 flex items-center justify-between text-[10px] text-[#C9A227] hover:text-[#DDB93A]"
                >
                  <span>Open Playlist</span>
 
                  <ArrowRight size={15} />
 
                </Link>
 
              </div>
 
            </div>
          ))}
 
        </section>
 
      </main>
 
      <Footer />
    </div>
  );
}