import type { VenueItem, VenueJson } from "../../interface";
import Card from "./Card";

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venues = await venuesJson;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
      <p className="mb-6 text-zinc-600">Explore {venues.count} fabulous venues in our venue catalog.</p>
      <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {venues.data.map((venue: VenueItem) => (
          <Card key={venue.id} vid={venue.id} venueName={venue.name} imgSrc={venue.picture} />
        ))}
      </div>
    </section>
  );
}
