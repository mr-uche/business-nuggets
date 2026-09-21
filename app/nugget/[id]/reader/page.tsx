"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";
import Link from "next/link";
import {
  SkipBack,
  SkipForward,
  Play,
  Volume2,
  Maximize2,
  Shuffle,
} from "lucide-react";

export default function ReaderViewPage() {
  const [note, setNote] = useState(
    "Apply this to our Q4 reserve planning. We must have cash reserves before buying the new property next month."
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10">
        {/* Main article */}
        <div>
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-4">
            <Link href="/library" className="hover:text-amber-600">Wisdom Archive</Link>
            {" / "}
            <Link href="/library?topic=stewardship" className="hover:text-amber-600">
              Stewardship &amp; Planning
            </Link>
            {" / "}
            <span className="text-gray-700">The Joseph Storage Blueprint</span>
          </p>

          <p className="text-amber-600 text-xs font-semibold tracking-wide uppercase mb-2">
            Nugget #7 &middot; Strategy &amp; Planning
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6">
            The Joseph Storage Blueprint: Seven Years of Strategic Reserves
          </h1>

          {/* Quote */}
          <blockquote className="border-l-4 border-amber-400 bg-amber-50 px-5 py-4 mb-8">
            <p className="italic text-gray-800 text-sm leading-relaxed">
              &ldquo;And let them gather all the food of those good years that are coming, and store up
              grain under the authority of Pharaoh&hellip; And that food shall be as a reserve for the
              land against the seven years of famine.&rdquo;
            </p>
            <p className="text-amber-600 text-xs font-semibold mt-2">GENESIS 41:35&ndash;36</p>
          </blockquote>

          {/* Scripture Context */}
          <section className="mb-8">
            <h2 className="font-serif text-lg font-bold mb-2">Scripture Context</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Faced with a macroeconomic projection of absolute volatility&mdash;seven years of extreme harvest
              followed by seven years of total collapse&mdash;Joseph does not panic. He proposes a rigorous
              national capital preservation program. He mandates a 20% flat tax on the harvest surplus
              during the bounty years to build a strategic physical reserve.
            </p>
          </section>

          {/* Marketplace Application */}
          <section className="mb-8">
            <h2 className="font-serif text-lg font-bold mb-2">Marketplace Application</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              When your enterprise is swimming in heavy liquidity, do not raise your burn rate
              proportionally. The temptation during &ldquo;market abundance&rdquo; is to hire aggressively and acquire
              unnecessary space. True stewards build a dedicated liquidity vault. Keep your capital
              reserves in high-grade assets to absorb dry cycles without defaulting on vendor trust or resorting to
              panic debt.
            </p>
          </section>

          {/* Practical Action Plan */}
          <section>
            <h2 className="font-serif text-lg font-bold mb-2">Practical Action Plan</h2>
            <ol className="text-gray-600 text-sm leading-relaxed list-decimal list-inside space-y-1">
              <li>
                Establish an &ldquo;Abundance Vault&rdquo;&mdash;a separate account holding 6 months of absolute
                basic operational overhead.
              </li>
              <li>
                During profitable quarters, automatically route 15% of EBITDA directly into this reserve.
              </li>
              <li>
                Avoid scaling fixed costs until the reserve targets are fully actualized.
              </li>
            </ol>
          </section>
        </div>

        {/* Sidebar: My Study Notes */}
        <aside className="border border-gray-200 rounded-lg p-5 h-fit bg-white">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">My Study Notes</h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={5}
            className="w-full text-sm text-gray-700 border border-gray-200 rounded-md p-3 resize-none focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <button className="mt-3 w-full bg-amber-400 text-black text-sm font-medium py-2 rounded-md hover:bg-amber-500 transition">
            Save Note
          </button>
        </aside>
      </div>

      {/* Audio player bar (light) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <img
            src="/images/joseph-storage.jpg"
            alt="The Joseph Storage Blueprint"
            className="w-10 h-10 rounded object-cover"
          />
          <div className="min-w-[180px]">
            <p className="text-sm font-medium leading-none text-gray-900">
              The Joseph Storage Blueprint
            </p>
            <p className="text-gray-500 text-xs mt-1">Genesis 41 &middot; Strategic Planning</p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-700">
                <Shuffle className="w-4 h-4" />
              </button>
              <button className="text-gray-600 hover:text-black">
                <SkipBack className="w-4 h-4" />
              </button>
              <button className="bg-amber-400 text-black rounded-full p-2 hover:bg-amber-500 transition">
                <Play className="w-4 h-4" fill="black" />
              </button>
              <button className="text-gray-600 hover:text-black">
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full max-w-md flex items-center gap-2">
              <span className="text-xs text-gray-400">1:12</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-amber-400" />
              </div>
              <span className="text-xs text-gray-400">4:24</span>
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