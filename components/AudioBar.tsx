"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";

export default function AudioBar({
  title,
  subtitle,
  duration,
}: {
  title: string;
  subtitle: string;
  duration: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex items-center gap-4 border-t border-zinc-800 bg-zinc-950 px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-zinc-100">{title}</p>
        <p className="truncate text-xs text-zinc-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3 text-zinc-400">
        <Shuffle size={16} className="cursor-pointer hover:text-amber-400" />
        <SkipBack size={18} className="cursor-pointer hover:text-amber-400" />
        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-zinc-950 hover:bg-amber-400"
        >
          {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>
        <SkipForward size={18} className="cursor-pointer hover:text-amber-400" />
        <Repeat size={16} className="cursor-pointer hover:text-amber-400" />
      </div>

      <span className="hidden text-xs text-zinc-500 sm:block">{duration}</span>
    </div>
  );
}