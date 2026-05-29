export const EXPEDITION_START_DATE = new Date("2025-10-23");

export function getDaysWalking() {
  const today = new Date();

  const difference = today.getTime() - EXPEDITION_START_DATE.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

export const START_LOCATION = "Manchester, England";

export const DESTINATION = "Mombasa, Kenya";

export const CURRENT_LOCATION = "Türkiye";

export const CURRENT_DISTANCE_KM = 2000;

export const TOTAL_DISTANCE_KM = 10000;
