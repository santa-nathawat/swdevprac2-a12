"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const venueNames: Record<string, string> = {
  Bloom: "The Bloom Pavilion",
  Spark: "Spark Space",
  GrandTable: "The Grand Table",
};

export default function BookingList() {
  const bookings = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookings.length === 0) {
    return (
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 text-center">
        <p className="text-lg font-semibold text-zinc-700">No Venue Booking</p>
        <Link href="/booking" className="mt-5 inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white hover:bg-emerald-900">Book a venue</Link>
      </section>
    );
  }

  return (
    <ul aria-label="Venue bookings" className="mt-8 grid gap-6">
      {bookings.map((booking) => (
        <li key={JSON.stringify([booking.venue, booking.bookDate])} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-950">{venueNames[booking.venue] ?? booking.venue}</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><dt className="text-sm text-zinc-500">Name-Lastname</dt><dd className="break-words font-medium">{booking.nameLastname}</dd></div>
            <div><dt className="text-sm text-zinc-500">Contact-Number</dt><dd className="font-medium">{booking.tel}</dd></div>
            <div><dt className="text-sm text-zinc-500">Event date</dt><dd className="font-medium">{booking.bookDate}</dd></div>
          </dl>
          <button type="button" onClick={() => dispatch(removeBooking(booking))} aria-label={`Cancel booking for ${venueNames[booking.venue] ?? booking.venue} on ${booking.bookDate}`} className="mt-6 rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50">Cancel Booking</button>
        </li>
      ))}
    </ul>
  );
}
