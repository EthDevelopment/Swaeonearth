"use client";

import dynamic from "next/dynamic";

const JourneyMap = dynamic(() => import("@/components/JourneyMap"), {
  ssr: false,
});

export default function JourneyPage() {
  return (
    <div className="py-20">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
        The Expedition
      </p>

      <h1 className="mb-6 text-7xl font-light">Journey To Kenya</h1>

      <p className="mb-16 max-w-2xl text-xl text-gray-400">
        A live record of the route from Manchester to Kenya.
      </p>

      <JourneyMap />
    </div>
  );
}
