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

      

<main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
  {/* Continue Listening */}
  <section className="pt-8 sm:pt-16">
    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
      Continue Listening
    </h2>

    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 sm:mt-8 sm:gap-5">
      {continueListening.map((item) => (
        <div
          key={item.title}
          className="flex min-w-0 flex-col gap-4 rounded-2xl border border-white/10 bg-[#111] p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
        >
          <div className="flex min-w-0 items-center gap-3 sm:contents">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 64px, 56px"
                className="object-cover"
              />
            </div>

            <p className="min-w-0 flex-1 text-xs font-semibold tracking-wide text-[#C9A55C] sm:hidden">
              {item.reference}
            </p>
          </div>

          <div className="min-w-0 flex-1">
            <p className="hidden text-sm font-semibold tracking-wide text-[#C9A55C] sm:block">
              {item.reference}
            </p>

            <h3 className="break-words font-serif text-lg text-white sm:mt-1 sm:text-xl">
              {item.title}
            </h3>

            <div className="mt-3 flex min-w-0 items-center gap-2">
              <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#C9A55C]"
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              <span className="shrink-0 text-xs text-gray-500 sm:text-sm">
                {item.timeLeft}
              </span>
            </div>
          </div>

          <Link
            href={item.href}
            aria-label={`Continue ${item.title}`}
            className="flex h-10 w-full shrink-0 items-center justify-center rounded-lg bg-[#C9A55C] text-[#0a0a0a] transition-colors hover:bg-[#d8b56c] sm:h-11 sm:w-11 sm:rounded-full"
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
  <section className="pt-12 pb-10 sm:pt-24 sm:pb-16">
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="w-full min-w-0">
        <h2 className="break-words font-serif text-2xl sm:text-3xl md:text-4xl">
          Recommended for Your Business Profile
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
          Tailored teachings based on your interest in Strategy and Leadership.
        </p>
      </div>

      <Link
        href="/recommendations"
        className="shrink-0 text-sm font-semibold text-[#C9A55C] hover:underline sm:text-base"
      >
        View Recommendation Guide
      </Link>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {recommended.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group relative block h-[220px] w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 sm:h-[235px]"
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