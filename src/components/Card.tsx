"use client";

import { useState } from "react";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Link from "next/link";

type CardProps = {
  venueName: string;
  vid: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, rating: number) => void;
};

export default function Card({ vid, venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState(0);
  const ratingName = `${venueName} Rating`;

  const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
    const nextRating = newValue ?? 0;
    setRating(nextRating);
    onRatingChange?.(venueName, nextRating);
  };

  return (
    <InteractiveCard>
      <article className="relative h-full overflow-hidden rounded-lg border border-zinc-200">
        <Link className="absolute inset-0 z-0 rounded-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-emerald-500" href={`/venue/${vid}`} aria-label={`View ${venueName}`} />
        <div className="relative z-10 h-full pointer-events-none">
          <Image className="h-56 w-full object-cover" src={imgSrc} alt={venueName} width={640} height={360} />
          <div className="p-5">
            <h2 className="mb-2 text-xl font-semibold">{venueName}</h2>
            {onRatingChange && <div className="pointer-events-auto" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
              <Rating id={ratingName} name={ratingName} data-testid={ratingName} value={rating} onChange={handleRatingChange} />
            </div>}
          </div>
        </div>
      </article>
    </InteractiveCard>
  );
}
