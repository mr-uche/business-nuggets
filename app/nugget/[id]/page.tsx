import Navbar from "@/components/navbar";
import { Bookmark, ListPlus, Share2, SkipBack, SkipForward, Play, Volume2, Maximize2 } from "lucide-react";

export default function NuggetDetailPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[340px] w-full overflow-hidden">
        <img
          src="/images/scales-hero.jpg"
          alt="The Law of Just Balances in Corporate Negotiation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-8">
          <p className="text-amber-300 text-xs font-semibold tracking-wide uppercase mb-2">
            Nugget #14 &middot; Integrity &amp; Character
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold max-w-2xl leading-tight">
            The Law of Just Balances in Corporate Negotiation
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
        {/* Main column */}
        <div>
          {/* Quote */}
          <blockquote className="border border-gray-800 rounded-lg p-6 bg-neutral-950">
            <p className="font-serif text-lg italic text-gray-100">
              &ldquo;A false balance is an abomination to the Lord, but a just weight is his delight.&rdquo;
            </p>
            <p className="text-amber-300 text-xs font-semibold tracking-wide mt-3">
              PROVERBS 11:1
            </p>
          </blockquote>

          {/* Action links */}
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-300">
            <button className="hover:text-amber-300 transition">Read Wisdom</button>
            <span className="text-gray-700">|</span>
            <button className="hover:text-amber-300 transition">Listen Musical</button>
            <span className="text-gray-700">|</span>
            <button className="hover:text-amber-300 transition">Listen Commentary</button>
          </div>

          {/* Key Principle */}
          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold mb-3">Key Principle</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              In classical Near Eastern commerce, merchants used weights on physical balances
              to determine price. A dishonest merchant used double standards—heavier weights
              for buying, lighter weights for selling. Today, this manifests as asymmetric
              information disclosure, hidden corporate traps, and misleading contract phrasing.
              The Principle of Just Balances asserts that absolute pricing and negotiation
              transparency is not a moral concession; it is a foundational framework for
              sustainable marketplace dominion.
            </p>
          </section>

          {/* Marketplace Application */}
          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold mb-3">Marketplace Application</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Establish negotiations where both parties can audit the metrics of exchange.
              When you draft standard vendor agreements, ensure indemnity and penalty clauses
              operate reciprocally. Over-disclosing hidden risks upfront establishes a premium
              brand of character that commands long-term respect and client loyalty.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="border border-gray-800 rounded-lg p-5 bg-neutral-950 h-fit">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Nugget Actions</h3>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <button className="flex items-center gap-2 hover:text-amber-300 transition">
              <Bookmark className="w-4 h-4" />
              Save to Library
            </button>
            <button className="flex items-center gap-2 hover:text-amber-300 transition">
              <ListPlus className="w-4 h-4" />
              Add to Playlist
            </button>
            <button className="flex items-center gap-2 hover:text-amber-300 transition">
              <Share2 className="w-4 h-4" />
              Share Commentary
            </button>
          </div>
        </aside>
      </div>

      {/* Audio player bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-gray-800 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <img
            src="/images/joseph-storage.jpg"
            alt="The Joseph Storage Blueprint"
            className="w-10 h-10 rounded object-cover"
          />
          <div className="min-w-[180px]">
            <p className="text-sm font-medium leading-none">The Joseph Storage Blueprint</p>
            <p className="text-gray-500 text-xs mt-1">Genesis 41 &middot; Strategic Planning</p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white">
                <SkipBack className="w-4 h-4" />
              </button>
              <button className="bg-amber-300 text-black rounded-full p-2 hover:bg-amber-400 transition">
                <Play className="w-4 h-4" fill="black" />
              </button>
              <button className="text-gray-300 hover:text-white">
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full max-w-md h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-amber-300" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <Volume2 className="w-4 h-4" />
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}