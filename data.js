// =============================================
//   KERVIAN NETWORK — SITE STATUS DATA
//
//   To update a status:   change "status"
//   To update info:       change "description" or "note"
//   To add a site:        copy a block and fill in the fields
//
//   status options: "operational" | "degraded" | "outage"
//   note:           shown below the description (e.g. resolution time)
//                   leave empty ("") to hide it
// =============================================

const SITES = [
  {
    name:        "kervian.com",
    status:      "operational",
    description: "Main Kervian homepage.",
    note:        "",
  },
  {
    name:        "assets.kervian.com",
    status:      "operational",
    description: "Asset hosting for the Kervian network.",
    note:        "",
  },
  {
    name:        "countdown.kervian.com",
    status:      "operational",
    description: "Countdown timer site.",
    note:        "",
  },
  {
    name:        "docs.kervian.com",
    status:      "operational",
    description: "Documentation site for the Kervian network.",
    note:        "",
  },
  {
    name:        "lmc.kervian.com",
    status:      "degraded",
    description: "Site for the Labyrinth co-op Minecraft server.",
    note:        "Estimated resolution: TBD",
  },
  {
    name:        "savethepast.kervian.com",
    status:      "operational",
    description: "HTML site for an FLL innovation project.",
    note:        "",
  },
];
