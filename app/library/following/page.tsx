import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Plus, X } from "lucide-react";

const topics = [
  {
    title: "Leadership & Governance",
    count: "42 Nuggets",
    newCount: "+3 New",
  },
  {
    title: "Money & Stewardship",
    count: "28 Nuggets",
    newCount: "",
  },
  {
    title: "Integrity & Character",
    count: "50 Nuggets",
    newCount: "+5 New",
  },
];

const challenges = [
  {
    title: "Starting a Business",
    count: "12 Nuggets",
    newCount: "+1 New",
  },
  {
    title: "Managing Difficult People",
    count: "11 Nuggets",
    newCount: "",
  },
];

const collections = [
  {
    title: "Genesis Strategy Archive",
    count: "20 Nuggets",
    newCount: "+2 New",
  },
  {
    title: "Proverbs for Negotiators",
    count: "15 Nuggets",
    newCount: "",
  },
];

function FollowCard({
  title,
  count,
  newCount,
  buttonText,
}: {
  title: string;
  count: string;
  newCount: string;
  buttonText: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-[#0d0d0d] p-3.5">

      {/* Title row */}
      <div className="flex items-center justify-between gap-3">

        <div className="min-w-0">
          <h3 className="font-serif text-[12px] text-white">
            {title}
          </h3>

          <p className="mt-1 text-[10px] text-white/40">
            {count}
          </p>
        </div>

        {newCount && (
          <span className="shrink-0 rounded-sm bg-red-500/10 px-2 py-1 text-[10px] text-red-400">
            {newCount}
          </span>
        )}

      </div>


      {/* Unfollow button */}
      <button
        type="button"
        className="mt-3 flex h-7 w-full items-center justify-center rounded border border-white/10 text-[11px] text-white/45 transition hover:border-white/20 hover:text-white"
      >
        {buttonText}
      </button>

    </div>
  );
}

export default function FollowingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">

        {/* ================= HEADER ================= */}

        <div>
          <h1 className="font-serif text-[26px] text-white sm:text-[28px]">
            Following
          </h1>

          <p className="mt-2 max-w-2xl text-[12px] leading-relaxed text-white/40 sm:text-[13px]">
            Manage wisdom channels, curated collections, and business topic
            logs you&apos;re actively monitoring.
          </p>
        </div>


        {/* ================= THREE COLUMNS ================= */}

        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

          {/* ================= TOPICS ================= */}

          <section>

            <h2 className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
              Topics You Follow
            </h2>

            <div className="space-y-3">

              {topics.map((topic) => (
                <FollowCard
                  key={topic.title}
                  title={topic.title}
                  count={topic.count}
                  newCount={topic.newCount}
                  buttonText="Unfollow Topic"
                />
              ))}

            </div>

          </section>


          {/* ================= CHALLENGES ================= */}

          <section>

            <h2 className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
              Challenges You Follow
            </h2>

            <div className="space-y-3">

              {challenges.map((challenge) => (
                <FollowCard
                  key={challenge.title}
                  title={challenge.title}
                  count={challenge.count}
                  newCount={challenge.newCount}
                  buttonText="Unfollow Challenge"
                />
              ))}

            </div>

          </section>


          {/* ================= COLLECTIONS ================= */}

          <section>

            <h2 className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
              Collections You Follow
            </h2>

            <div className="space-y-3">

              {collections.map((collection) => (
                <FollowCard
                  key={collection.title}
                  title={collection.title}
                  count={collection.count}
                  newCount={collection.newCount}
                  buttonText="Unfollow Collection"
                />
              ))}

            </div>

          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
}