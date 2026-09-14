import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Plus,
  Link as LinkIcon,
} from "lucide-react";

const journalNotes = [
  {
    category: "MARKET NOTE",
    title: "Negotiation Integrity Principle",
    time: "2 hours ago",
    preview: "Important application for my Q3 vendor negotiations...",
  },
  {
    category: "EXODUS",
    title: "Jethro's Safe Infrastructure",
    time: "2 days ago",
    preview: "How to scale this with our VP of Engineering...",
  },
];

export default function JournalNotesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-10 py-12">

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-[280px_1fr] gap-8">

          {/* ================= LEFT JOURNAL PANEL ================= */}
          <aside className="rounded-md border border-white/10 bg-[#0d0d0d] p-5">

            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="font-serif text-[24px] text-white">
                My Journal & Notes
              </h1>

              <button
                className="text-[#C9A227] transition hover:text-[#DDB93A]"
                aria-label="Add note"
              >
                <Plus size={16} />
              </button>
            </div>


            {/* Search */}
            <div className="mt-5 flex h-9 items-center gap-2 rounded-md border border-white/10 bg-[#151515] px-3">
              <Search
                size={13}
                className="text-white/35"
              />

              <input
                type="text"
                placeholder="Search notes..."
                className="w-full bg-transparent text-[12px] text-white outline-none placeholder:text-white/30"
              />
            </div>


            {/* Notes */}
            <div className="mt-4 space-y-2">

              {journalNotes.map((note, index) => (
                <button
                  key={note.title}
                  className={`w-full rounded-md border p-3 text-left transition ${
                    index === 0
                      ? "border-[#C9A227]/40 bg-[#17140d]"
                      : "border-white/5 bg-[#111111] hover:border-white/15"
                  }`}
                >

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
                      {note.category}
                    </span>

                    <span className="text-[10px] text-white/30">
                      {note.time}
                    </span>
                  </div>

                  <p className="mt-2 font-serif text-[14px] text-white">
                    {note.title}
                  </p>

                  <p className="mt-1 truncate text-[12px] text-white/35">
                    {note.preview}
                  </p>

                </button>
              ))}

            </div>

          </aside>


          {/* ================= NOTE CONTENT ================= */}
          <section className="rounded-md border border-white/10 bg-[#0d0d0d]">

            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C9A227]">
                  Linked Nugget: The Law of Just Balances in Corporate Negotiation
                </p>

                <h2 className="mt-2 font-serif text-[24px] leading-tight text-white">
                  Negotiation Integrity Principle
                </h2>
              </div>


              {/* Actions */}
              <div className="flex items-center gap-2">

                <button
                  className="flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-2 text-[12px] text-white/50 transition hover:border-white/20 hover:text-white"
                >
                  Delete
                </button>

                <button
                  className="flex items-center gap-1.5 rounded-md bg-[#C9A227] px-3 py-2 text-[12px] font-medium text-black transition hover:bg-[#DDB93A]"
                >
                  Save Changes
                </button>

              </div>

            </div>


            {/* Note body */}
            <div className="px-6 py-7">

              {/* Scripture */}
              <p className="font-serif text-[13px] italic leading-relaxed text-white/85">
                “A false balance is an abomination to the Lord, but a just weight is
                his delight.” — Proverbs 11:1
              </p>


              {/* Note text */}
              <div className="mt-6 max-w-[850px] space-y-4 text-[11px] leading-[1.9] text-white/55">

                <p>
                  This verse speaks directly to our standard service agreements.
                  I must audit our vendor party clauses before renewal.
                </p>

                <p>
                  The principle applies beyond pricing. We need to make sure our
                  terms are transparent, fair, and consistent across every
                  negotiation.
                </p>

                <p>
                  According to the commentary, true business wisdom is exercised
                  by absolute transparency, which commands premium respect from
                  key enterprise clients. This isn&apos;t just moral safety—it&apos;s
                  a massive strategic differentiator for our B2B software sales force.
                </p>

              </div>


              {/* Linked source */}
              <button
                className="mt-8 flex items-center gap-2 text-[9px] text-[#C9A227] hover:underline"
              >
                <LinkIcon size={11} />
                Go to original commentary section
              </button>

            </div>

          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}