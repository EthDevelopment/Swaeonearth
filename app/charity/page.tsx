import Link from "next/link";

export default function CharityPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <section className="mb-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
          Walking For A Cause
        </p>

        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl font-light leading-tight">
          Walking To Kenya
          <br />
          Supporting
          <br />
          Food Aid
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
          This expedition is raising money for the World Food Programme. Every
          donation helps support food assistance for people facing hunger around
          the world.
        </p>

        <Link
          href="https://www.justgiving.com/page/swaeonearth"
          target="_blank"
          className="mt-10 inline-flex items-center rounded-full border border-amber-500 px-8 py-4 text-lg transition hover:bg-amber-500 hover:text-black"
        >
          Donate To The Fundraiser →
        </Link>
      </section>

      <div className="mb-24 grid grid-cols-1 gap-8 border-y py-10 sm:grid-cols-3">
        <div>
          <p className="text-5xl font-light">£175</p>
          <p className="text-gray-500">Raised So Far</p>
        </div>

        <div>
          <p className="text-5xl font-light">11</p>
          <p className="text-gray-500">Donations</p>
        </div>

        <div>
          <p className="text-5xl font-light">£3,000</p>
          <p className="text-gray-500">Goal</p>
        </div>
      </div>

      <section className="mb-24">
        <h2 className="mb-8 text-4xl font-light">
          Why Raise Money For Food Aid?
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-400">
          <p>
            When I left Manchester and began walking towards Kenya, the journey
            was originally a personal challenge. A chance to explore the world,
            test my limits and experience life beyond my comfort zone.
          </p>

          <p>
            As the expedition grew, I realised it could become something larger
            than myself. While I am walking across continents by choice,
            millions of people around the world face challenges far greater than
            a long road ahead.
          </p>

          <p>
            That is why I am using this journey to raise money for the World
            Food Programme. Every donation helps support efforts to provide food
            assistance to people affected by conflict, disaster and poverty.
          </p>
        </div>
      </section>

      <section className="mb-24">
        <div className="rounded-3xl border p-10">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.3em] text-amber-500">
              Fundraising Progress
            </span>

            <span className="text-sm text-gray-500">£175 / £3,000</span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-amber-500"
              style={{ width: "6%" }}
            />
          </div>

          <p className="mt-4 text-gray-400">
            Every contribution helps move the fundraiser forward.
          </p>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-4xl font-light">More Than A Walk</h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-400">
          <p>
            Every border crossed, camp pitched and kilometre travelled creates
            an opportunity to bring attention to something meaningful.
          </p>

          <p>
            If this journey has inspired you, entertained you, or simply made
            you stop and think, please consider supporting the fundraiser.
          </p>

          <p>
            Together we can turn an adventure into something that creates a
            positive impact beyond the road itself.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border p-12 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
          Support The Cause
        </p>

        <h2 className="text-4xl font-light">
          Help Turn This Journey
          <br />
          Into Something Bigger
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
          Walking from Manchester to Kenya. Raising money for food aid along the
          way.
        </p>

        <Link
          href="https://www.justgiving.com/page/swaeonearth"
          target="_blank"
          className="mt-10 inline-flex items-center rounded-full border border-amber-500 px-8 py-4 text-lg transition hover:bg-amber-500 hover:text-black"
        >
          Donate Now →
        </Link>
      </section>
    </div>
  );
}
