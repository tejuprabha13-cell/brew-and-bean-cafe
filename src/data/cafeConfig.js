/**
 * Single source of truth for Brew & Bean Café business information.
 * Fully configurable for production deployment without code refactoring.
 */
export const CAFE_CONFIG = {
  name: "Brew & Bean Café",
  shortName: "Brew & Bean",
  badge: "Specialty Roastery & Café",
  tagline: "Craft Coffee. Cozy Corners. Genuine Connection.",
  subtitle: "The Elevated Everyday",
  description: "Your neighborhood retreat for specialty roasts, fresh bites, and a space to simply be. Premium quality without the pretension.",
  
  location: {
    address: "124 Artisan Way",
    district: "Coffee District",
    crossStreets: "Corner of Roaster Lane & Market Square",
    fullAddress: "124 Artisan Way, Coffee District",
    googleMapsUrl: "https://maps.google.com/?q=124+Artisan+Way+Coffee+District",
    coordinates: [40.718, -74.005] // [lat, lng]
  },

  contact: {
    phoneDisplay: "(555) 019-8372",
    phoneTel: "tel:5550198372",
    email: "hello@brewandbeancafe.com",
    emailMailto: "mailto:hello@brewandbeancafe.com"
  },

  hours: {
    weekday: {
      days: "Monday – Friday",
      open: "6:30 AM",
      close: "8:00 PM",
      openMinutes: 6 * 60 + 30, // 390
      closeMinutes: 20 * 60     // 1200
    },
    weekend: {
      days: "Saturday – Sunday",
      open: "8:00 AM",
      close: "9:00 PM",
      openMinutes: 8 * 60,      // 480
      closeMinutes: 21 * 60     // 1260
    },
    note: "Kitchen closes 1 hour prior to coffee bar closing."
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  },

  // Genuine brand hallmarks (grounded in specialty coffee craftsmanship, no fabricated reviews)
  hallmarks: [
    { label: "Direct-Trade Lots", detail: "Ethically sourced from partner estates" },
    { label: "Fresh Weekly Roasts", detail: "Small 12kg precision profile batches" },
    { label: "Plant-Forward", detail: "House oat & almond milks, no surcharge" }
  ]
};

/**
 * Helper to determine real-time open status based on current device time
 */
export function getLiveStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 6 = Sat
  const isWeekend = day === 0 || day === 6;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const schedule = isWeekend ? CAFE_CONFIG.hours.weekend : CAFE_CONFIG.hours.weekday;
  const isOpen = currentMinutes >= schedule.openMinutes && currentMinutes <= schedule.closeMinutes;

  return {
    isOpen,
    statusText: isOpen 
      ? `Open Now • Closes ${schedule.close}` 
      : `Closed • Opens ${isWeekend ? '8:00 AM' : '6:30 AM'}`,
    schedule
  };
}
