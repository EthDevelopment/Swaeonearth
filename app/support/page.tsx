import Image from "next/image";
import { getDaysWalking } from "@/lib/journey";
export default function SupportPage() {
  const daysWalking = getDaysWalking();
  return (
    <div className="mx-auto max-w-3xl py-20">
      <section className="mb-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
          Support The Expedition
        </p>

        <h1 className="max-w-4xl text-7xl font-light leading-tight">
          Help Me Walk From
          <br />
          The United Kingdom
          <br />
          To Kenya
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
          Every kilometre, story, photograph and video from this journey exists
          because people choose to support it.
        </p>
      </section>

      <section className="mb-24 max-w-2xl">
        <p className="mt-8 text-lg leading-relaxed text-gray-400">
          If you'd like to help me continue the journey, you can do so below.
        </p>
      </section>

      <div className="mb-24 grid grid-cols-3 gap-8 border-y py-8">
        <div>
          <p className="text-5xl font-light">{daysWalking}</p>
          <p className="text-gray-500">Days Walking</p>
        </div>

        <div>
          <p className="text-5xl font-light">2,000+</p>
          <p className="text-gray-500">Kilometres</p>
        </div>

        <div>
          <p className="text-5xl font-light">1</p>
          <p className="text-gray-500">Continent Crossed</p>
        </div>
      </div>

      <section className="mb-24">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-amber-500">
          Current Location
        </p>

        <h2 className="text-5xl font-light">Istanbul, Türkiye</h2>
      </section>

      <section className="mb-32">
        <h2 className="mb-8 text-4xl font-light">Support The Journey</h2>

        <div className="space-y-6">
          <a
            href="https://buymeacoffee.com/swaeonearth"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-3xl border p-8 transition hover:border-amber-500"
          >
            <div>
              <p className="text-3xl font-light">☕ Buy Me A Coffee</p>

              <p className="mt-2 text-gray-400">
                Help keep me moving one step at a time.
              </p>
            </div>

            <p className="text-3xl">→</p>
          </a>

          <a
            href="https://www.paypal.com/paypalme/Swaeonearth"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-3xl border p-8 transition hover:border-amber-500"
          >
            <div>
              <p className="text-3xl font-light">💸 PayPal</p>

              <p className="mt-2 text-gray-400">
                The simplest way to contribute directly.
              </p>
            </div>

            <p className="text-3xl">→</p>
          </a>

          <div className="rounded-3xl border p-8">
            <p className="text-3xl font-light">₿ Bitcoin</p>

            <p className="mt-2 text-gray-400">
              Support the expedition with Bitcoin.
            </p>

            <p className="mt-6 break-all font-mono text-sm">
              YOUR_WALLET_ADDRESS
            </p>
          </div>
        </div>

        <section className="mt-32 border-t pt-16">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
              Supported By
            </p>

            <h2 className="text-4xl font-light">
              Brands helping make this expedition possible
            </h2>
          </div>

          <div className="rounded-3xl bg-zinc-100 p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="flex items-center justify-center">
                <Image
                  src="/brands/AKU.png"
                  alt="AKU"
                  width={180}
                  height={90}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/brands/Gregory.png"
                  alt="Gregory"
                  width={180}
                  height={90}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/brands/huel.png"
                  alt="Huel"
                  width={180}
                  height={90}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/brands/vodafone.png"
                  alt="Vodafone"
                  width={180}
                  height={90}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/brands/IHG.png"
                  alt="IHG"
                  width={180}
                  height={90}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-400">
              Make gear that's built for the long road?{" "}
            </p>

            <a
              href="mailto:contact@swaeonearth.com"
              className="mt-3 inline-block text-lg text-amber-500 transition hover:text-amber-400"
            >
              Let's find out →{" "}
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
