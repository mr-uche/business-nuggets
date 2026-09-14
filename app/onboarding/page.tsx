import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const interests = [
  "Leadership & Governance",
  "Money & Stewardship",
  "Strategy & Planning",
  "Entrepreneurship & Innovation",
  "Integrity & Character",
  "People & Teams",
  "Negotiation & Covenant",
  "Global Expansion & Reserves",
];

const wisdomTopics = [
  "Strategic Principles",
  "Managing Public Funds",
  "Strategic Risk-Free Scaling",
  "Everything Executive Burnout",
];

export default function InterestsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">
      <Navbar />

      <main className="mx-auto flex max-w-[1200px] flex-col items-center px-10 py-14">

        {/* ================= STEP INDICATOR ================= */}
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#C9A227] px-2.5 py-1 text-[9px] font-medium text-black">
            STEP 2 OF 3
          </span>

          <span className="text-[11px] text-white/35">
            Customizing your wisdom stream
          </span>
        </div>


        {/* ================= PAGE HEADING ================= */}
        <div className="mt-8 text-center">
          <h1 className="font-serif text-[28px] font-semibold text-white">
            What interests you?
          </h1>

          <p className="mt-3 text-[12px] text-white/45">
            Select the biblical-business topics that align with your professional challenges.
          </p>
        </div>


        {/* ================= INTEREST BUTTONS ================= */}
        <div className="mt-7 grid w-[800px] grid-cols-4 gap-3">

          {interests.map((interest, index) => (
            <button
              key={interest}
              className={`rounded-full whitespace-nowrap border px-3 py-1.5 p-8 text-[12px] transition ${
                index === 0 || index === 1
                  ? "border-[#C9A227]/70 bg-[#C9A227] text-black"
                  : "border-white/10 bg-[#151515] text-white/65 hover:border-[#C9A227]/50 hover:text-white"
              }`}
            >
              {interest}
            </button>
          ))}

        </div>


        {/* ================= WISDOM QUESTION BOX ================= */}
        <section className="mt-7 w-[750px] rounded-md border border-white/10 bg-[#0d0d0d] px-5 py-5 p-8">

          <h2 className="font-serif text-[16px] text-white">
            What do you need wisdom about today?
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-2 ">

            {wisdomTopics.map((topic) => (
              <button
                key={topic}
                className="rounded-full border border-white/5 bg-[#181818] px-3 py-1.5 p-8 text-[12px] text-white/55 transition hover:border-[#C9A227]/40 hover:text-white"
              >
                {topic}
              </button>
            ))}

          </div>

        </section>


        {/* ================= CONTINUE ================= */}
       {/* <Link
          href="/library"
          className="mt-8 rounded-md bg-[#C9A227] px-6 py-2.5 text-[10px] font-medium text-black transition hover:bg-[#DDB93A]"
        >
          Continue
        </Link>*/}

      </main>

      <Footer />
    </div>
  );
}