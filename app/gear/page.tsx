"use client";
import { gear } from "@/lib/gear";
import { useState } from "react";
import { Footprints, Tent, Camera, Smartphone } from "lucide-react";
import Image from "next/image";

export default function GearPage() {
  const [activeTab, setActiveTab] = useState("walking");
  const [selectedItem, setSelectedItem] = useState(gear.walking[0]);
  const currentGear =
    activeTab === "hall-of-fame"
      ? []
      : gear[activeTab as keyof typeof gear] || [];

  return (
    <div className="py-20">
      <section className="mb-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
          Expedition Equipment
        </p>

        <h1 className="max-w-5xl text-7xl font-light leading-tight">
          Everything I Carry
          <br />
          From The United Kingdom
          <br />
          To Kenya
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-400">
          Every item has earned its place. Some keep me walking. Some keep me
          alive. Some help me tell the story.
        </p>
      </section>

      <section className="overflow-hidden rounded-3xl border">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {["walking", "shelter", "filmmaking", "technology", "hall-of-fame"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);

                  const category =
                    tab === "hall-of-fame"
                      ? []
                      : gear[tab as keyof typeof gear];

                  if (category && category.length > 0) {
                    setSelectedItem(category[0]);
                  }
                }}
                className={`px-8 py-5 text-sm uppercase tracking-widest transition ${
                  activeTab === tab
                    ? "bg-amber-500 text-black"
                    : "hover:bg-zinc-900"
                }`}
              >
                {tab === "hall-of-fame" ? "Hall of Fame" : tab}
              </button>
            ))}
          </div>
        </div>{" "}
        <div className="grid lg:grid-cols-[1.3fr_1fr]">
          {" "}
          <div className="bg-zinc-900 p-10">
            {selectedItem?.image && (
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={1200}
                height={1200}
                className="mb-6 h-[350px] w-full rounded-2xl object-cover"
              />
            )}

            <h3 className="mb-8 text-5xl font-light">{selectedItem.name}</h3>

            <div className="space-y-8">
              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-amber-500">
                  Weight
                </p>

                <p className="text-lg">{selectedItem.weight}</p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-amber-500">
                  Time Used
                </p>

                <p className="text-lg">{selectedItem.timeUsed}</p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-amber-500">
                  Review
                </p>

                <p className="text-lg leading-relaxed text-gray-400">
                  {selectedItem.review}
                </p>
              </div>

              <a
                href={selectedItem.affiliateLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-amber-500 px-6 py-3 text-black"
              >
                View Gear →
              </a>
            </div>
          </div>
          <div className="p-12">
            <p className="mb-4 text-sm uppercase tracking-widest text-amber-500">
              {activeTab}
            </p>

            <h2 className="mb-6 text-6xl font-light">
              {activeTab === "hall-of-fame" ? "Hall of Fame" : "Loadout"}
            </h2>

            <p className="mb-10 max-w-md text-gray-400">
              {activeTab === "hall-of-fame"
                ? "The equipment that has proven itself on the road. These are the items that survived real-world testing across thousands of kilometres."
                : "Equipment currently carried on the expedition. Select an item to view my review and experience using it on the road."}
            </p>

            {activeTab === "hall-of-fame" && (
              <div className="mb-8 rounded-2xl border border-amber-500 p-6">
                <p className="mb-2 text-sm uppercase tracking-widest text-amber-500">
                  Expedition Approved
                </p>

                <p className="text-lg text-gray-300">
                  Gear that has earned its place after months on the road.
                </p>
              </div>
            )}

            <div className="space-y-3">
              {currentGear.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelectedItem(item)}
                  className={`block w-full rounded-xl border p-5 text-left transition ${
                    selectedItem.name === item.name
                      ? "border-amber-500 bg-zinc-900"
                      : "hover:border-amber-500"
                  }`}
                >
                  <p className="text-2xl">{item.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
