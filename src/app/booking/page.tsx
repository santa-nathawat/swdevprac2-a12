"use client";

import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-emerald-950">Book a venue</h1>
      <p className="mt-3 text-zinc-600">Plan a gathering worth remembering. No sign-in required.</p>
      <section aria-label="Booking details" className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <DateReserve />
      </section>
    </main>
  );
}
