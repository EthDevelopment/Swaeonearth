"use client";

import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Popup,
} from "react-leaflet";

import {
  journeySegments,
  getDistanceWalkedKm,
  CURRENT_LOCATION,
  COUNTRIES_WALKED,
  getDaysWalking,
} from "@/lib/journey";

import "leaflet/dist/leaflet.css";

export default function JourneyMap() {
  return (
    <div className="relative h-[calc(100vh-280px)] w-full">
      {" "}
      <MapContainer
        center={[41.0082, 28.9784]}
        zoom={4}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {journeySegments.map((segment, index) => (
          <Polyline
            key={index}
            positions={segment.points.map((point) => [point.lat, point.lng])}
            pathOptions={{
              color: segment.type === "walk" ? "#f59e0b" : "#3b82f6",
              weight: 4,
              dashArray: segment.type === "transport" ? "10, 10" : undefined,
            }}
          />
        ))}

        {journeySegments
          .filter((segment) => segment.type === "walk")
          .flatMap((segment) => segment.points)
          .map((point, index) => (
            <CircleMarker
              key={index}
              center={[point.lat, point.lng]}
              radius={4}
              pathOptions={{
                color: "#f59e0b",
                fillColor: "#f59e0b",
                fillOpacity: 1,
                weight: 0,
              }}
            >
              <Popup>
                <div>
                  <h3>Camp Location</h3>
                  <p>{point.note || "No notes yet"}</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}

        <div className="absolute bottom-6 left-1/2 z-[1000] w-[90%] max-w-5xl -translate-x-1/2">
          <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="p-6 text-center">
                <p className="text-3xl font-light text-white">
                  {getDistanceWalkedKm().toLocaleString()}{" "}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  KM Walked
                </p>
              </div>

              <div className="p-6 text-center border-l border-white/10">
                <p className="text-3xl font-light text-white">
                  {getDaysWalking()}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Days
                </p>
              </div>

              <div className="p-6 text-center border-l border-white/10">
                <p className="text-3xl font-light text-white">
                  {COUNTRIES_WALKED}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Countries Walked
                </p>
              </div>

              <div className="p-6 text-center border-l border-white/10">
                <p className="text-3xl font-light text-white">
                  {CURRENT_LOCATION}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Current Location
                </p>
              </div>
            </div>
          </div>
        </div>
      </MapContainer>
    </div>
  );
}
