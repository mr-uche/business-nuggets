"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { nuggets } from "@/types/nugget";

export default function SearchPage() {
  const [query, setQuery] = useState("integrity in negotiations");

  // Swap for a real search/match-score endpoint later
  const results = nuggets.filter((n) => typeof n.matchScore === "number");

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row gap-3 mb-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search nuggets, scriptures, or business challenges..."
            className="flex-1 bg-slate-700 border border-gray-800 text-white rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-300"
          />
          <button className="bg-amber-300 text-black font-medium px-5 py-3 rounded-md hover:bg-amber-400 transition whitespace-nowrap w-full sm:w-auto">
            Search Platform
          </button>
        </div>

        <p className="text-gray-500 text-sm mb-8">
          Found {results.length} Nuggets matching your search query
        </p>

        <h2 className="text-white font-serif text-lg font-semibold mb-4">Nuggets Results</h2>

        <div className="space-y-4">
          {results.map((nugget) => (
            <div
              key={nugget.slug}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <h3 className="text-white font-serif font-semibold mb-1">{nugget.title}</h3>
                <p className="text-amber-300 text-xs mb-2">
                  {nugget.scripture} • {nugget.category === "CHARACTER" ? "Character & Ethics" : nugget.category}
                </p>
                {nugget.excerpt && (
                  <p className="text-gray-400 text-sm max-w-xl">{nugget.excerpt}</p>
                )}
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                <Link
                  href={`/nugget/${nugget.slug}`}
                  className="bg-amber-300 text-black text-sm font-medium px-4 py-1.5 rounded-md hover:bg-amber-400 transition"
                >
                  Open
                </Link>
                <span className="text-gray-500 text-xs">{nugget.matchScore}% Match</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}