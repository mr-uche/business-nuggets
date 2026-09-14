import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { RotateCcw, Bookmark } from "lucide-react";
 
const units = [
  {
    number: "01",
    title: "The Joseph Storage Blueprint",
    reference: "Genesis 41",
    duration: "12:45",
  },
  {
    number: "02",
    title: "The Delegation Infrastructure Architecture",
    reference: "Exodus 18",
    duration: "10:15",
  },
  {
    number: "03",
    title: "Just Weights and Integrity Premium Pricing",
    reference: "Proverbs 11:1",
    duration: "08:30",
  },
  {
    number: "04",
    title: "Building Under Adversity and Siege Controls",
    reference: "Nehemiah 4",
    duration: "11:20",
  },
];
 
export default function StartingYourBusinessPage() {
 return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

     <main className="mx-auto max-w-6xl px-8 py-12 lg:px-16">
        {/* Hero */}
        <div className="flex flex-col gap-8 lg:flex-row">
        <div className="h-56 w-full shrink-0 rounded-lg bg-gradient-to-br from-[#3a2f1c] to-[#141110] lg:h-56 lg:w-64" />
 
        <div className="flex-1">
          <p className="text-xs font-medium tracking-wide text-[#C9A227]">
            Curated Learning Pathway
          </p>
          <h1 className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
            Starting Your Business God&apos;s Way
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
            An ordered, executive roadmap designed to guide prospective founders from ideation
            to sovereign launch. Sync your operations with historical, unshakeable blueprints.
          </p>
 
          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/40">4/10 Completed</span>
              <span className="font-medium text-[#C9A227]">40% Complete</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 w-[40%] rounded-full bg-[#C9A227]" />
            </div>
          </div>
 
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md bg-[#C9A227] px-5 py-2.5 text-sm font-medium text-[#0B0B0A] hover:bg-[#DDB93A]">
              Play Entire Series
            </button>
            <button className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5">
              Bookmark Path
            </button>
          </div>
        </div>
      </div>
 
      {/* Chronological Blueprint Units */}
      <section className="mt-14">
        <h2 className="mb-5 text-lg font-semibold text-white">Chronological Blueprint Units</h2>
 
        <div className="divide-y divide-white/10 rounded-lg border border-white/10">
          {units.map((unit) => (
            <div
              key={unit.number}
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-white/30">{unit.number}</span>
                <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-[#3a2f1c] to-[#141110]" />
                <div>
                  <p className="text-sm font-medium text-white">{unit.title}</p>
                  <p className="text-xs text-white/40">{unit.reference}</p>
                </div>
              </div>
 
              <div className="flex items-center gap-4 pl-14 sm:pl-0">
                <span className="text-xs text-white/40">{unit.duration}</span>
                <button
                  className="text-white/40 hover:text-white"
                  aria-label="Replay unit"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  className="text-white/40 hover:text-white"
                  aria-label="Bookmark unit"
                >
                  <Bookmark size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  <Footer />
    </div>
  );
}