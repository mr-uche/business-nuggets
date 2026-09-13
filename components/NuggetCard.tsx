import Link from "next/link";
import Image from "next/image";
import { Nugget } from "@/types/nugget";

export default function NuggetCard({ nugget }: { nugget: Nugget }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-amber-300/50 transition group">
      <div className="relative h-40 w-full bg-gray-800">
        <Image
          src={nugget.image}
          alt={nugget.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-2 left-2 text-[10px] font-semibold tracking-wide px-2 py-1 rounded bg-amber-300 text-black">
          {nugget.category}
        </span>
        {nugget.isGold && (
          <span className="absolute top-2 right-2 text-[10px] font-semibold tracking-wide px-2 py-1 rounded bg-black/70 text-amber-300 border border-amber-300">
            GOLD
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-white font-serif font-semibold leading-snug mb-2 group-hover:text-amber-300 transition">
          {nugget.title}
        </h3>
        <p className="text-gray-500 text-xs mb-3">{nugget.scripture}</p>

        <div className="flex items-center justify-between">
          <Link
            href={`/nugget/${nugget.slug}`}
            className="flex items-center gap-1.5 text-amber-300 text-sm font-medium hover:text-amber-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Listen &amp; Read
          </Link>
        </div>
      </div>
    </div>
  );
}