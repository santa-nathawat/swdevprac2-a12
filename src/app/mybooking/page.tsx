import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-emerald-950">My Booking</h1>
      <p className="mt-3 text-zinc-600">Review and manage your venue reservations.</p>
      <BookingList />
    </main>
  );
}
