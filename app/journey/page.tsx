"use client";

import dynamic from "next/dynamic";

const JourneyMap = dynamic(() => import("../../components/JourneyMap"), {
  ssr: false,
});

export default function JourneyPage() {
  return (
    <div className="flex h-[calc(100vh-140px)] flex-col">
      {" "}
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
          Live Expedition
        </p>

        <h1 className="mt-3 text-5xl md:text-6xl font-light">
          Journey To Kenya
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Walking from Manchester to Kenya. Every camp, border crossing,
          transport segment and milestone documented in real time.
        </p>
      </div>
      {/* Map */}
      <div className="relative w-[100vw] left-1/2 -translate-x-1/2">
        <JourneyMap />
      </div>
    </div>
  );
}
