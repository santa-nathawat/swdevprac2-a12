"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const bannerImages = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section
      aria-label="Featured venue banner"
      className="relative flex min-h-[380px] cursor-pointer items-center overflow-hidden bg-cover bg-center px-6 py-16 text-white sm:min-h-[480px]"
      style={{ backgroundImage: `url('${bannerImages[imageIndex]}')` }}
      onClick={() => setImageIndex((current) => (current + 1) % bannerImages.length)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/35 to-transparent" />
      {session?.user?.name && <p className="absolute right-6 top-6 rounded-full bg-zinc-950/60 px-4 py-2 text-sm font-semibold">Welcome {session.user.name}</p>}
      <div className="relative mx-auto w-full max-w-6xl pb-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Venue Explorer</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">Find the right place for your next event.</h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">Distinctive spaces for the moments worth bringing people together.</p>
      </div>
      <button
        type="button"
        className="absolute bottom-6 right-6 rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-emerald-950 shadow-lg transition hover:bg-emerald-200"
        onClick={(event) => {
          event.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </section>
  );
}
