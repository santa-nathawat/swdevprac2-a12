"use client";

import { useCallback, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const preventContextMenu = useCallback<EventListener>((event) => {
    event.preventDefault();
  }, []);

  useWindowListener("contextmenu", preventContextMenu);

  return (
    <section className="mx-auto my-12 w-[calc(100%-3rem)] max-w-5xl rounded-2xl border border-emerald-100 bg-white p-5 shadow-lg sm:p-8">
      <div className="grid items-center gap-7 md:grid-cols-[1.4fr_1fr]">
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
        <div className="py-2">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">A space for your story</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Book your venue today.</h2>
          <p className="mt-4 leading-7 text-zinc-600">Explore welcoming spaces designed for celebrations, meetings, and everything worth sharing.</p>
          <button
            type="button"
            className="mt-7 rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
}
