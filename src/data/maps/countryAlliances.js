// Allegiance: "blue" (USA bloc), "red" (Others), "neutral"
// PowerIndex: Inverse gfpRaw (global fire power index online).
// All glory to the one and ONLY god, the both sides of the yingyang

import { gfpRaw } from "../gfpRaw.js";

// Convert GFP → 0–100 (0 = strongest, 4 = weakest)
function normalizePowerIndex(x) {
  const min = 0, max = 4;
  return Math.round(100 * (max - x) / (max - min));
}

export const countryAlliances = {
  // --- Blue ---
  "840": { name: "United States", allegiance: "blue", powerIndex: normalizePowerIndex(gfpRaw["840"].gfp) },
  // under usa influence
  "862": { name: "Venezuela", allegiance: "blue", powerIndex: normalizePowerIndex(gfpRaw["862"].gfp) },
  "328": { name: "Guyana", allegiance: "blue", powerIndex: 20 },
  "392": { name: "Japan", allegiance: "blue", powerIndex: normalizePowerIndex(gfpRaw["392"].gfp) },
  "702": { name: "Singapore", allegiance: "blue", powerIndex: normalizePowerIndex(gfpRaw["702"].gfp) },
  "376": { name: "Israel", allegiance: "blue", powerIndex: normalizePowerIndex(gfpRaw["376"].gfp) },
  "410": { name: "South Korea", allegiance: "blue", powerIndex: normalizePowerIndex(gfpRaw["410"].gfp) },

  // --- Fractured (red with blue undertones) ---
  "124": { name: "Canada", allegiance: "fractured", powerIndex: normalizePowerIndex(gfpRaw["124"].gfp) },
  "032": { name: "Argentina", allegiance: "fractured", powerIndex: normalizePowerIndex(gfpRaw["032"].gfp), notes: "Economic collapse, inflation and debt; political swings between U.S.-aligned and China-linked policies; social unrest and strikes; institutions still intact but cracks widening"},

  // --- Conflict (under siege) ---
  "250": { name: "France", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["250"].gfp) },
  "056": { name: "Belgium", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["056"].gfp) },
  "360": { name: "Indonesia", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["360"].gfp) },
  "566": { name: "Nigeria", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["566"].gfp) },
  "036": { name: "Australia", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["036"].gfp) },
  "276": { name: "Germany", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["276"].gfp) },
  "524": { name: "Nepal", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["524"].gfp) },
  "604": { name: "Peru", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["604"].gfp), notes: "Boluarte pardons security forces; anti-NGO crackdown; illegal-mining violence; spillover from Venezuelan criminal gangs; mass antigovernment unrest"},
  "218": { name: "Ecuador", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["218"].gfp), notes: "Frequent indigenous protests and riots; economic instability; balancing US security ties with China trade and debt; instability escalating into conflict"},
  "528": { name: "Netherlands", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["528"].gfp) },
  "152": { name: "Chile", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["152"].gfp), notes: "Stable institutions but recurring protests; inequality and indigenous rights tensions; Molotov and street clashes show cracks; aguerrido populace keeps pressure alive"},
  "158": { name: "Taiwan", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["158"].gfp) },
  "752": { name: "Sweden", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["752"]?.gfp || 4) },
  "484": { name: "Mexico", allegiance: "conflict", powerIndex: normalizePowerIndex(gfpRaw["484"].gfp) },

  // --- Death (im drinking from this countries blood) ---
  "170": { name: "Colombia", allegiance: "ultraviolence", powerIndex: normalizePowerIndex(gfpRaw["170"].gfp), notes: "ELN/FARC dissident surge; mass displacement and human-rights abuses; rising China economic ties; high instability"},
  "724": { name: "Spain", allegiance: "ultraviolence", powerIndex: normalizePowerIndex(gfpRaw["724"].gfp) },
  "826": { name: "United Kingdom", allegiance: "ultraviolence", powerIndex: normalizePowerIndex(gfpRaw["826"].gfp) },
  "275": { name: "Palestine", allegiance: "ultraviolence", powerIndex: normalizePowerIndex(gfpRaw["275"]?.gfp || 4) },  

  "804": { name: "Ukraine", allegiance: "ultraviolence", powerIndex: normalizePowerIndex(gfpRaw["804"]?.gfp || 4) },

  // --- Red ---
  "364": { name: "Iran", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["364"].gfp) },
  "643": { name: "Russia", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["643"].gfp) },
  "156": { name: "China", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["156"].gfp) },
  "408": { name: "North Korea", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["408"].gfp) },
  "414": { name: "Kuwait", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["414"].gfp) },
  "634": { name: "Qatar", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["634"].gfp) },
  "368": { name: "Iraq", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["368"].gfp) },
  "422": { name: "Lebanon", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["422"].gfp) },
  "760": { name: "Syria", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["760"].gfp) },
  "076": { name: "Brazil", allegiance: "red",powerIndex: normalizePowerIndex(gfpRaw["076"].gfp), notes: "BRICS core, no USA pledge"},
  "068": { name: "Bolivia", allegiance: "red", powerIndex: normalizePowerIndex(gfpRaw["068"].gfp), notes: "MAS collapse; protests over Morales exclusion; political polarization and instability"},


  // --- Neutral ---
  "740": { name: "Suriname", allegiance: "neutral", powerIndex: 18 },
  "356": { name: "India", allegiance: "neutral", powerIndex: normalizePowerIndex(gfpRaw["356"].gfp) },
  "710": { name: "South Africa", allegiance: "neutral", powerIndex: normalizePowerIndex(gfpRaw["710"].gfp) },
  "682": { name: "Saudi Arabia", allegiance: "neutral", powerIndex: normalizePowerIndex(gfpRaw["682"].gfp) },
};

// Centralized colors
export const allegianceColors = {
  blue: "#3B82F6",
  red:  "#EF4444",
  neutral: "#cccccc",
  conflict: "url(#blueRedStripe)",
  fractured: "url(#fracturedStripe)", 
  ultraviolence: "#4c0099", // solid dark purple
};
