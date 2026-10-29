"use client";

import { useReducer } from "react";
import Card from "./Card";
import { venues } from "@/data/venues";

type RatingAction =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

const initialRatings = new Map(venues.map(({ venueName }) => [venueName, 0]));

function ratingsReducer(ratings: Map<string, number>, action: RatingAction) {
  const nextRatings = new Map(ratings);

  if (action.type === "set") {
    nextRatings.set(action.venueName, action.rating);
  } else {
    nextRatings.delete(action.venueName);
  }

  return nextRatings;
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  const updateRating = (venueName: string, rating: number) => {
    dispatch({ type: "set", venueName, rating });
  };

  return (
    <section className="w-full px-6 py-10 sm:px-10 lg:px-16">
      <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <Card
            key={venue.vid}
            vid={venue.vid}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            onRatingChange={updateRating}
          />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-2">
        <h2 className="text-lg font-semibold">Venue List with Ratings</h2>
        {[...ratings].map(([venueName, rating]) => (
          <button
            key={venueName}
            type="button"
            data-testid={venueName}
            className="block w-full rounded-md bg-white px-4 py-3 text-left shadow-sm transition hover:bg-zinc-100"
            onClick={() => dispatch({ type: "remove", venueName })}
          >
            {venueName} Rating : {rating}
          </button>
        ))}
      </div>
    </section>
  );
}
