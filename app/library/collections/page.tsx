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
    <div className="min-h-screen bg-black text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">

        {/* ================= HERO ================= */}

        <div className="flex flex-col gap-7 lg:flex-row lg:gap-8">

          {/* Hero Image */}

          <div className="h-48 w-full shrink-0 rounded-lg bg-gradient-to-br from-[#3a2f1c] to-[#141110] sm:h-56 lg:h-56 lg:w-64" />

          {/* Hero Content */}

          <div className="min-w-0 flex-1">

            <p className="text-xs font-medium tracking-wide text-[#C9A227]">
              Curated Learning Pathway
            </p>

            <h1 className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
              Starting Your Business God&apos;s Way
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              An ordered, executive roadmap designed to guide prospective founders
              from ideation to sovereign launch. Sync your operations with
              historical, unshakeable blueprints.
            </p>

            {/* Progress */}

            <div className="mt-6 w-full max-w-md">

              <div className="flex items-center justify-between text-xs">
                <span className="text-white/40">
                  4/10 Completed
                </span>

                <span className="font-medium text-[#C9A227]">
                  40% Complete
                </span>
              </div>

              <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                <div className="h-1.5 w-[40%] rounded-full bg-[#C9A227]" />
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <button
                type="button"
                className="w-full rounded-md bg-[#C9A227] px-5 py-2.5 text-sm font-medium text-[#0B0B0A] hover:bg-[#DDB93A] sm:w-auto"
              >
                Play Entire Series
              </button>

              <button
                type="button"
                className="w-full rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 sm:w-auto"
              >
                Bookmark Path
              </button>

            </div>

          </div>

        </div>


        {/* ================= CHRONOLOGICAL BLUEPRINT UNITS ================= */}

        <section className="mt-12 sm:mt-14">

          <h2 className="mb-5 text-lg font-semibold text-white">
            Chronological Blueprint Units
          </h2>

          <div className="divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10">

            {units.map((unit) => (

              <div
                key={unit.number}
                className="flex flex-col gap-4 px-4 py-4 sm:px-5 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
              >

                {/* Unit information */}

                <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                  <span className="shrink-0 text-sm font-medium text-white/30">
                    {unit.number}
                  </span>

                  <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-[#3a2f1c] to-[#141110]" />

                  <div className="min-w-0">

                    <p className="text-sm font-medium leading-snug text-white">
                      {unit.title}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      {unit.reference}
                    </p>

                  </div>

                </div>


                {/* Unit controls */}

                <div className="flex items-center gap-5 pl-[68px] lg:pl-0">

                  <span className="text-xs text-white/40">
                    {unit.duration}
                  </span>

                  <button
                    type="button"
                    className="text-white/40 hover:text-white"
                    aria-label={`Replay ${unit.title}`}
                  >
                    <RotateCcw size={16} />
                  </button>

                  <button
                    type="button"
                    className="text-white/40 hover:text-white"
                    aria-label={`Bookmark ${unit.title}`}
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