"use client";

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
    <div className="min-h-screen overflow-x-hidden bg-black text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* =====================================================
              PLAYER COLUMN
          ===================================================== */}

          <div className="min-w-0">

            {/* Player / Artwork */}
            <div className="h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#3a2f1c] to-[#141110] sm:h-60 lg:h-72" >
              <img
              src="/images/audio-player.png"
              alt="audio-player"
              className="h-full w-full object-cover"/>
              
            </div>   

            {/* Title */}
            <div className="mt-7 text-center sm:mt-8">

              <p className="text-[10px] font-medium tracking-wide text-[#C9A227] sm:text-[12px]">
                Proverbs 11:1 · Core Principle
              </p>

              <h1 className="mx-auto mt-3 max-w-3xl font-serif text-xl leading-snug text-white sm:text-2xl lg:text-3xl">
                The Law of Just Balances in Corporate Negotiation
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-xs italic leading-relaxed text-white/40 sm:text-sm">
                &ldquo;A false balance is an abomination to the Lord, but a
                just weight is his delight.&rdquo;
              </p>

            </div>


            {/* =================================================
                PROGRESS BAR
            ================================================= */}

            <div className="mt-8 sm:mt-10">

              <div className="h-1 w-full rounded-full bg-white/10">
                <div className="h-1 w-[28%] rounded-full bg-[#C9A227]" />
              </div>

              <div className="mt-2 flex justify-between text-[10px] text-white/40 sm:text-xs">
                <span>02:15</span>
                <span>08:00</span>
              </div>

            </div>


            {/* =================================================
                PLAYBACK CONTROLS
            ================================================= */}

            <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">

              {/* Shuffle */}
              <button
                type="button"
                className="text-white/50 transition hover:text-white"
                aria-label="Shuffle"
              >
                <Shuffle size={18} />
              </button>


              {/* Previous */}
              <button
                type="button"
                className="text-white/70 transition hover:text-white"
                aria-label="Previous"
              >
                <SkipBack size={20} />
              </button>


              {/* Play */}
              <button
                type="button"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C9A227] text-[#0B0B0A] transition hover:bg-[#DDB93A] sm:h-16 sm:w-16"
                aria-label="Play"
              >
                <Play
                  size={22}
                  fill="currentColor"
                  className="sm:h-6 sm:w-6"
                />
              </button>


              {/* Next */}
              <button
                type="button"
                className="text-white/70 transition hover:text-white"
                aria-label="Next"
              >
                <SkipForward size={20} />
              </button>


              {/* Speed */}
              <button
                type="button"
                className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-[#C9A227]/70 sm:px-3 sm:text-xs"
              >
                1.5x
              </button>

            </div>


            {/* =================================================
                ACTION ROW
            ================================================= */}

            <div className="mt-8 grid grid-cols-4 border-t border-white/10 pt-5 sm:mt-10 sm:flex sm:items-center sm:justify-center sm:gap-10">

              {/* Save */}
              <button
                type="button"
                className="flex flex-col items-center gap-1.5 text-[10px] text-white/50 transition hover:text-white sm:text-xs"
              >
                <Bookmark size={17} />
                <span>Save</span>
              </button>


              {/* Playlist */}
              <button
                type="button"
                className="flex flex-col items-center gap-1.5 text-[10px] text-white/50 transition hover:text-white sm:text-xs"
              >
                <ListPlus size={17} />
                <span>Playlist</span>
              </button>


              {/* Notes */}
              <button
                type="button"
                className="flex flex-col items-center gap-1.5 text-[10px] text-white/50 transition hover:text-white sm:text-xs"
              >
                <PenSquare size={17} />
                <span>Write Notes</span>
              </button>


              {/* Transcript */}
              <button
                type="button"
                className="flex flex-col items-center gap-1.5 text-[10px] text-white/50 transition hover:text-white sm:text-xs"
              >
                <FileText size={17} />
                <span>Transcript</span>
              </button>

            </div>

          </div>


          {/* =====================================================
              WISDOM QUEUE
          ===================================================== */}

          <aside className="min-w-0 ">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between lg:items-start">

              <h2 className="text-base font-semibold text-white">
                Wisdom Queue
              </h2>

              <Link
                href="/library/reader"
                className="w-fit text-[10px] font-medium text-[#C9A227] hover:underline sm:text-xs"
              >
                Open Full Reader View
              </Link>

            </div>


            {/* Queue */}
            <div className="mt-4 divide-y divide-white/10 rounded-lg border border-white/10">

              {wisdomQueue.map((item) => (

                <div
                  key={item.number}
                  className="flex items-start gap-3 px-3 py-3 sm:px-4 sm:py-3"
                >

                  {/* Number */}
                  <span className="pt-0.5 text-[10px] font-medium text-white/30 sm:text-xs">
                    {item.number}
                  </span>


                  {/* Text */}
                  <div className="min-w-0 flex-1">

                    <p className="text-xs font-medium leading-snug text-white sm:text-sm">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                      {item.reference}
                    </p>

                  </div>


                  {/* Duration */}
                  <span className="shrink-0 pt-0.5 text-[10px] text-white/40 sm:text-xs">
                    {item.duration}
                  </span>

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