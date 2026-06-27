/* DkFit — edition config
 * ---------------------------------------------------------------
 * Everything that makes this edition "Denmark / Copenhagen" lives
 * here. The engine (index.html) is identical across all editions.
 * --------------------------------------------------------------- */

const CONFIG = {
  title:   "DkFit",
  tagline: "Copenhagen",

  // Map start view
  center: [55.6761, 12.5683],  // Copenhagen city centre [lat, lng]
  zoom: 12,
  minZoom: 10,
  maxZoom: 16,
  focusZoom: 15,
  fitMaxZoom: 13,

  // Optional features (engine reads these). Off where omitted.
  features: {
    comparePage: true,   // show the "Browse / compare all" page link
    search: false
  },

  // Per-brand pin/dot colours (brand = text before " — " in a gym name)
  brandColors: {
    "SATS":          "#222222",
    "PureGym":       "#D81E2C",
    "LOOP Fitness":  "#0066CC",
    "FitnessX":      "#F5821F",
    "Butcher's Lab": "#ff6f9c",
    "Beatriders":    "#8A4FD3"
  },

  // Short labels for the mobile brand bar (else first 4 letters)
  shortLabels: {
    "PureGym":       "Pure",
    "LOOP Fitness":  "LOOP",
    "FitnessX":      "FitX",
    "Butcher's Lab": "Butc",
    "Beatriders":    "Beat"
  }
};
