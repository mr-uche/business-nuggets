import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto flex max-w-[1200px] flex-col items-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

        {/* ================= STEP INDICATOR ================= */}

        <div className="flex flex-wrap items-center justify-center gap-2 text-center">

          <span className="rounded-full bg-[#C9A227] px-2.5 py-1 text-[9px] font-medium text-black">
            STEP 2 OF 3
          </span>

          <span className="text-[10px] text-white/35 sm:text-[11px]">
            Customizing your wisdom stream
          </span>

        </div>


        {/* ================= PAGE HEADING ================= */}

        <div className="mt-7 text-center sm:mt-8">

          <h1 className="font-serif text-2xl font-semibold text-white sm:text-[28px]">
            What interests you?
          </h1>

          <p className="mx-auto mt-3 max-w-[520px] text-[11px] leading-relaxed text-white/45 sm:text-[12px]">
            Select the biblical-business topics that align with your
            professional challenges.
          </p>

        </div>


        {/* ================= INTEREST BUTTONS ================= */}

        <div className="mt-7 grid w-full max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {interests.map((interest, index) => (

            <button
              key={interest}
              type="button"
              className={`whitespace-nowrap rounded-full border px-3 py-2 text-[10px] transition sm:text-[11px] lg:text-[12px] ${
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

        <section className="mt-7 w-full max-w-[750px] rounded-md border border-white/10 bg-[#0d0d0d] px-4 py-5 sm:px-5 sm:py-5">

          <h2 className="font-serif text-[14px] text-white sm:text-[16px]">
            What do you need wisdom about today?
          </h2>


          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">

            {wisdomTopics.map((topic) => (

              <button
                key={topic}
                type="button"
                className="whitespace-nowrap rounded-full border border-white/5 bg-[#181818] px-3 py-2 text-[10px] text-white/55 transition hover:border-[#C9A227]/40 hover:text-white sm:text-[11px] lg:text-[12px]"
              >
                {topic}
              </button>

            ))}

          </div>

        </section>


        {/* ================= CONTINUE ================= */}

        {/* 
        <Link
          href="/library"
          className="mt-8 rounded-md bg-[#C9A227] px-6 py-2.5 text-[10px] font-medium text-black transition hover:bg-[#DDB93A]"
        >
          Continue
        </Link>
        */}

      </main>

      <Footer />

    </div>
  );
}