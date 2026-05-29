import {
  getDaysWalking,
  CURRENT_LOCATION,
  TOTAL_DISTANCE_KM,
  CURRENT_DISTANCE_KM,
  START_LOCATION,
  DESTINATION,
} from "@/lib/journey";
export default function Hero() {
  const daysWalking = getDaysWalking();
  return (
    <section className="py-24">
      <h1 className="text-7xl font-light">Swae On Earth</h1>

      <p className="mt-6 text-xl text-gray-600">
        Walking from the United Kingdom to {DESTINATION}.
      </p>

      <div className="mt-16">
        <p className="text-sm uppercase tracking-widest">Day {daysWalking}</p>

        <h2 className="mt-2 text-3xl">{CURRENT_LOCATION}</h2>

        <p className="mt-4 text-lg text-gray-700">
          One continent crossed. Another waiting.
        </p>
      </div>
    </section>
  );
}
