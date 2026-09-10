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
  },
  {
    name:        "status.kervian.com",
    status:      "operational",
    description: "This status page.",
  },
  {
    name:        "assets.kervian.com",
    status:      "operational",
    description: "Asset hosting for the Kervian network.",
  },
  {
    name:        "countdown.kervian.com",
    status:      "operational",
    description: "Countdown timer site.",
  },
  {
    name:        "docs.kervian.com",
    status:      "degraded",
    description: "Documentation site for the Kervian network.",
  },
  {
    name:        "lmc.kervian.com",
    status:      "operational",
    description: "Site for the Labyrinth co-op Minecraft server.",
  },
  {
    name:        "labyrinthmc.org",
    status:      "operational",
    description: "Primary domain for the Labyrinth Minecraft server site (mirrors lmc.kervian.com).",
  },
  {
    name:        "cms.kervian.com",
    status:      "operational",
    description: "Self-hosted CMS for the Kervian network's 11ty sites.",
  },
  {
    name:        "tlp.kervian.com",
    status:      "operational",
    description: "Self-hosted student newspaper management system.",
  },
  {
    name:        "address.kervian.com",
    status:      "operational",
    description: "Open addressing protocol for the near-Earth shell.",
  },
  {
    name:        "focus.kervian.com",
    status:      "operational",
    description: "Generated ambient focus-music track.",
  },
  {
    name:        "sailsofcombat.kervian.com",
    status:      "operational",
    description: "Turn-based age-of-sail gunnery game.",
    note:        "Actively under development — expect frequent changes.",
  },
];
