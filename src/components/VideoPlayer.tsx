"use client";

import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  vdoSrc: string;
  isPlaying: boolean;
};

export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      const playback = video.play();
      if (playback instanceof Promise) void playback.catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      className="aspect-video w-full rounded-xl bg-zinc-950 object-cover"
      src={vdoSrc}
      controls
      playsInline
      muted
      aria-label="Venue showcase video"
    />
  );
}
