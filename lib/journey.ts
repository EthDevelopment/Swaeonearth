export const EXPEDITION_START_DATE = new Date("2025-10-23");

import { journeySegments } from "./route";

export { journeySegments };

function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export function getDistanceWalkedKm() {
  return Math.round(
    journeySegments
      .filter((segment) => segment.type === "walk")
      .reduce((total, segment) => {
        let segmentDistance = 0;

        for (let i = 1; i < segment.points.length; i++) {
          const prev = segment.points[i - 1];
          const current = segment.points[i];

          segmentDistance += haversineDistance(
            prev.lat,
            prev.lng,
            current.lat,
            current.lng
          );
        }

        return total + segmentDistance;
      }, 0)
  );
}

export function getDaysWalking() {
  const today = new Date();

  const difference = today.getTime() - EXPEDITION_START_DATE.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

export const START_LOCATION = "Manchester, England";

export const DESTINATION = "Mombasa, Kenya";

export const CURRENT_LOCATION = "Türkiye";

export const CURRENT_DISTANCE_KM = 2000;

export const COUNTRIES_WALKED = 6;

export const TOTAL_DISTANCE_KM = 10000;

export const currentLocation = {
  lat: 41.0082,
  lng: 28.9784,
  country: "Turkey",
};
