"use client";

export default function VenueError({ retry }: { retry: () => void }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Unable to load venues</h1>
      <p className="mt-4 text-zinc-600">Please try again in a moment.</p>
      <button type="button" onClick={retry} className="mt-6 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white">Try again</button>
    </main>
  );
}
