import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;
  if (!/^[a-f\d]{24}$/i.test(vid)) notFound();
  const { data: venue } = await getVenue(vid);

  if (!venue) notFound();

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-10 text-zinc-950 sm:px-10">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
        <Image src={venue.picture} alt={venue.name} width={1600} height={1000} preload className="h-[320px] w-full object-cover sm:h-[480px]" />
        <div className="p-7 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Event venue</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{venue.name}</h1>
          <dl className="mt-6 grid gap-x-6 gap-y-3 text-zinc-700 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold">Address</dt><dd>{venue.address}</dd>
            <dt className="font-semibold">District</dt><dd>{venue.district}</dd>
            <dt className="font-semibold">Province</dt><dd>{venue.province}</dd>
            <dt className="font-semibold">Postal code</dt><dd>{venue.postalcode}</dd>
            <dt className="font-semibold">Tel</dt><dd><a className="underline" href={`tel:${venue.tel}`}>{venue.tel}</a></dd>
            <dt className="font-semibold">Daily rate</dt><dd>{venue.dailyrate.toLocaleString("en-US")} THB / day</dd>
          </dl>
          <Link href="/venue" className="mt-8 inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900">← Back to all venues</Link>
        </div>
      </article>
    </main>
  );
}
