"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 px-3 backdrop-blur sm:px-6">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2">
        <TopMenuItem href={session ? "/api/auth/signout" : "/api/auth/signin"} label={session ? "Sign-Out" : "Sign-In"} />
        <TopMenuItem href="/mybooking" label="My Booking" />
        <div className="flex items-center gap-1 sm:gap-3">
          <span className="hidden sm:block"><TopMenuItem href="/venue" label="Venues" /></span>
          <TopMenuItem href="/booking" label="Booking" />
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-emerald-900" aria-label="Venue Explorer home">
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-700 text-lg text-white">V</span>
            <span className="hidden sm:inline">Venue Explorer</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
