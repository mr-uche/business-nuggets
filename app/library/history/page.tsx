import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import {
  RotateCcw,
  Trash2,
} from "lucide-react";

const listeningHistory = [
  {
    category: "STEWARDSHIP",
    date: "Today at 2:30 PM",
    title: "Strategic Hedging & Global Trade Diversification",
    reference: "Ecclesiastes 11:1",
    progress: 100,
    status: "Completed",
  },
  {
    category: "INTEGRITY & CHARACTER",
    date: "Yesterday at 11:15 AM",
    title: "The Law of Just Balances in Corporate Negotiation",
    reference: "Proverbs 11:1",
    progress: 65,
    status: "In Progress",
  },
  {
    category: "LEADERSHIP",
    date: "Feb 10, 2025",
    title: "Delegation Infrastructure & Jethro's Governance",
    reference: "Exodus 18:13-26",
    progress: 100,
    status: "Completed",
  },
];

const recentlyViewed = [
  {
    category: "COMMENTARY PAGE",
    date: "Today at 10:45 AM",
    title: "The Joseph Storage Blueprint: Reserve Management",
    reference: "Genesis 41:1-36",
  },
  {
    category: "TOPIC HUB",
    date: "Yesterday at 4:10 PM",
    title: "Money & Stewardship Core Archive",
    reference: "36 Wisdom Nuggets",
  },
];

export default function ListeningActivityPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">

        {/* ================= PAGE HEADER ================= */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div className="min-w-0">

            <h1 className="font-serif text-[25px] text-white sm:text-[27px]">
              Listening Activity & Logs
            </h1>

            <p className="mt-2 max-w-xl text-[12px] leading-relaxed text-white/40">
              Track your deep study history and review recently discovered
              scripts.
            </p>

          </div>


          <button
            type="button"
            className="flex w-fit shrink-0 items-center gap-2 rounded-md border border-red-500/20 px-3 py-2 text-[9px] text-red-400 transition hover:bg-red-500/5"
          >
            <Trash2 size={11} />
            Clear History
          </button>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-7">

          {/* ================= LISTENING HISTORY ================= */}

          <section className="min-w-0">

            <div className="flex flex-wrap items-center gap-2">

              <h2 className="text-[13px] font-medium uppercase tracking-wide text-[#C9A227] sm:text-[15px]">
                Listening History
              </h2>

              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-white/35">
                3 Sessions
              </span>

            </div>


            <div className="mt-4 space-y-3">

              {listeningHistory.map((item) => (

                <div
                  key={item.title}
                  className="min-w-0 rounded-md border border-white/10 bg-[#0d0d0d] px-4 py-4"
                >

                  {/* Top row */}

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex min-w-0 flex-wrap items-center gap-2">

                      <span className="text-[9px] font-medium uppercase tracking-wide text-[#C9A227]">
                        {item.category}
                      </span>

                      <span className="text-[9px] text-white/30">
                        • {item.date}
                      </span>

                    </div>


                    <span
                      className={`shrink-0 text-[10px] ${
                        item.status === "Completed"
                          ? "text-emerald-400"
                          : "text-[#C9A227]"
                      }`}
                    >
                      {item.status === "Completed" ? "● " : ""}
                      {item.status}
                    </span>

                  </div>


                  {/* Title */}

                  <h3 className="mt-3 font-serif text-[16px] leading-snug text-white sm:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] italic text-white/35">
                    {item.reference}
                  </p>


                  {/* Progress */}

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">

                    <div className="flex min-w-0 flex-1 items-center gap-3">

                      <div className="h-[3px] flex-1 rounded-full bg-white/10">

                        <div
                          className="h-[3px] rounded-full bg-[#C9A227]"
                          style={{
                            width: `${item.progress}%`,
                          }}
                        />

                      </div>

                      <span className="shrink-0 text-[10px] text-white/40">
                        {item.progress}%
                      </span>

                    </div>


                    {/* Action */}

                    <button
                      type="button"
                      className="flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-[10px] text-white/60 transition hover:border-white/20 hover:text-white"
                    >
                      <RotateCcw size={10} />

                      {item.status === "Completed"
                        ? "Replay"
                        : "Resume"}
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </section>


          {/* ================= RECENTLY VIEWED ================= */}

          <aside className="min-w-0">

            <h2 className="text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
              Recently Viewed Pages
            </h2>


            <div className="mt-4 space-y-3">

              {recentlyViewed.map((item) => (

                <button
                  type="button"
                  key={item.title}
                  className="w-full rounded-md border border-white/10 bg-[#0d0d0d] p-4 text-left transition hover:border-white/20"
                >

                  <div className="flex flex-wrap items-center justify-between gap-2">

                    <span className="rounded-sm bg-[#181818] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
                      {item.category}
                    </span>

                    <span className="text-[9px] text-white/25">
                      {item.date}
                    </span>

                  </div>


                  <h3 className="mt-3 font-serif text-[12px] leading-snug text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[8px] italic text-white/35">
                    {item.reference}
                  </p>

                </button>

              ))}

            </div>

          </aside>

        </div>

      </main>

      <Footer />

    </div>
  );
}