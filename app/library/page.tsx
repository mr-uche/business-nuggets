"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import NuggetCard from "@/components/NuggetCard";
import { nuggets } from "@/types/nugget";

const businessTopics = [
  { label: "Leadership & Team", count: 12 },
  { label: "Money & Stewardship", count: 18 },
  { label: "Strategy & Planning", count: 9 },
  { label: "Stewardship & Legacy", count: 14 },
];

const bibleSections = [
  "The Pentateuch",
  "Wisdom Literature (Proverbs/Eccl)",
  "The Prophets",
  "New Testament Parables",
];

const tabs = ["All Nuggets", "Topics Index", "Challenges", "Scripture Matrix", "Collections"];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("All Nuggets");
  const [activeTopic, setActiveTopic] = useState("Money & Stewardship");
  const [activeBibleSection, setActiveBibleSection] = useState(
    "Wisdom Literature (Proverbs/Eccl)"
  );
  const [sortBy, setSortBy] = useState("Most Recent");

  // Swap this filtering logic once real data/category fields line up with topics
  const filteredNuggets = useMemo(() => nuggets.slice(0, 6), [activeTopic, activeBibleSection]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <h1 className="text-white font-serif text-3xl font-semibold mb-2">
          The Wisdom Archive
        </h1>
        <p className="text-gray-400 mb-6 max-w-2xl">
          Discover premium biblical business strategies. Filter by topic, challenge, or
          scripture index.
        </p>

        <div className="flex gap-6 border-b border-gray-800 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm whitespace-nowrap border-b-2 transition ${
                activeTab === tab
                  ? "text-amber-300 border-amber-300"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-8">
            <div>
              <h4 className="text-gray-400 text-xs font-semibold tracking-wide mb-3">
                BUSINESS TOPICS
              </h4>
              <ul className="space-y-2">
                {businessTopics.map((topic) => (
                  <li key={topic.label}>
                    <label className="flex items-center justify-between text-sm cursor-pointer group">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={activeTopic === topic.label}
                          onChange={() => setActiveTopic(topic.label)}
                          className="accent-amber-300"
                        />
                        <span
                          className={
                            activeTopic === topic.label
                              ? "text-amber-300"
                              : "text-gray-300 group-hover:text-white"
                          }
                        >
                          {topic.label}
                        </span>
                      </span>
                      <span className="text-gray-500 text-xs">({topic.count})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 text-xs font-semibold tracking-wide mb-3">
                BIBLE SECTION
              </h4>
              <ul className="space-y-2">
                {bibleSections.map((section) => (
                  <li key={section}>
                    <label className="flex items-center gap-2 text-sm cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={activeBibleSection === section}
                        onChange={() => setActiveBibleSection(section)}
                        className="accent-amber-300"
                      />
                      <span
                        className={
                          activeBibleSection === section
                            ? "text-amber-300"
                            : "text-gray-300 group-hover:text-white"
                        }
                      >
                        {section}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Nugget grid */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 text-sm">
                Showing {filteredNuggets.length} Nuggets inside{" "}
                <span className="text-white">{activeTopic}</span>
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-900 border border-gray-800 text-white rounded-md px-3 py-1.5 focus:outline-none focus:border-amber-300"
                >
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>A–Z</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNuggets.map((nugget) => (
                <NuggetCard key={nugget.slug} nugget={nugget} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}