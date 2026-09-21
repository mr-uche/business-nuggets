import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const continueListening = [
  {
    reference: "EXODUS 18",
    title: "The Jethro Leadership Protocol",
    image: "/images/topic.png",
    progress: 30,
    timeLeft: "4:20 left",
    href: "/library/cinematic-musical1.png",
  },
  {
    reference: "PROVERBS 6",
    title: "The Hazard of Early Suretyship",
    image: "/images/cinematic-musical2.png",
    progress: 16,
    timeLeft: "6:15 left",
    href: "/library/hazard-of-early-suretyship",
  },
];

const recommended = [
  { title: "Rebuilding the Wall", image: "/images/nugget-card4.png", href: "/library/rebuilding-the-wall" },
  { title: "The Treasure Chest", image: "/images/nugget-card2.png", href: "/library/treasure-chest" },
  { title: "The Ancient Boundary", image: "/images/nuggetCard.png", href: "/library/ancient-boundary" },
  { title: "The Palace Hall", image: "/images/collection-main.png", href: "/library/palace-hall" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6">
        {/* Continue Listening */}
        <section className="pt-16">
          <h2 className="font-serif text-4xl">Continue Listening</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {continueListening.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#111] p-5"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold tracking-wide text-[#C9A55C]">
                    {item.reference}
                  </p>
                  <h3 className="mt-1 truncate font-serif text-xl text-white">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#C9A55C]"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-sm text-gray-500">
                      {item.timeLeft}
                    </span>
                  </div>
                </div>

                <Link
                  href={item.href}
                  aria-label={`Continue ${item.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A55C] text-[#0a0a0a] transition-colors hover:bg-[#d8b56c]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="pt-24 pb-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl">
                Recommended for Your Business Profile
              </h2>
              <p className="mt-2 text-base text-gray-400">
                Tailored teachings based on your interest in Strategy and
                Leadership.
              </p>
            </div>
            <Link
              href="/recommendations"
              className="hidden shrink-0 text-base font-semibold text-[#C9A55C] hover:underline sm:block"
            >
              View Recommendation Guide
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative block h-[235px] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}