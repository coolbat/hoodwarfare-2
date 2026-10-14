export const site = {
  name: "Hood Warfare 2 Guide",
  domain: "hoodwarfare-2.com",
  url: "https://hoodwarfare-2.com",
  verified: "14 October 2026",
  verifiedIso: "2026-10-14",
  build: "1.0.1.4",
  priorBuild: "1.0.10",
  steamApp: 5155360,
  steamUrl: "https://store.steampowered.com/app/5155360/Hood_Warfare_2/",
  steamCharts: "https://steamdb.info/app/5155360/charts/",
  patch1014: "https://steamdb.info/patchnotes/25921858/",
  supportEmail: "trapstargames@protonmail.com",
  developer: "Trapstar Games",
} as const;

export type PageDef = {
  path: string;
  file: string;
  nav: string | null;
  title: string;
  description: string;
  h1: string;
};

export const pages: PageDef[] = [
  {
    path: "/",
    file: "src/app/page.tsx",
    nav: "Guide",
    title: "Hood Warfare 2 Guide — Friends, Game Modes & Troubleshooting",
    description:
      "Hood Warfare 2 guides for private matches with friends, join and audio fixes on patch 1.0.1.4, six modes, and weapon unlock tracks. Unofficial Steam guide.",
    h1: "Hood Warfare 2 Guides & Tools",
  },
  {
    path: "/play-with-friends/",
    file: "src/app/play-with-friends/page.tsx",
    nav: "Friends",
    title: "Hood Warfare 2: How to Play with Friends (Private Match)",
    description:
      "Create a password private lobby in Hood Warfare 2 on build 1.0.1.4, get a friend in, and branch if the room is missing, the join fails, or you get kicked.",
    h1: "Play Hood Warfare 2 with Friends",
  },
  {
    path: "/troubleshooting/",
    file: "src/app/troubleshooting/page.tsx",
    nav: "Fixes",
    title: "Hood Warfare 2 Troubleshooting: No Sound, Can't Join, Kicked",
    description:
      "Separate Hood Warfare 2 no sound from voice chat, then check version 1.0.1.4 before you troubleshoot a failed join or an anti-cheat kick.",
    h1: "Hood Warfare 2 Troubleshooting",
  },
  {
    path: "/game-modes/",
    file: "src/app/game-modes/page.tsx",
    nav: "Modes",
    title: "Hood Warfare 2 Game Modes, Maps, and Bots",
    description:
      "How every Hood Warfare 2 mode scores, which one to practice first, and what the store actually says about bots and Chicago maps.",
    h1: "Hood Warfare 2 Game Modes",
  },
  {
    path: "/weapons-and-unlocks/",
    file: "src/app/weapons-and-unlocks/page.tsx",
    nav: "Unlocks",
    title: "Hood Warfare 2 Weapons, Attachments, and Unlocks",
    description:
      "Hood Warfare 2 splits weapons, attachments, and skins into three unlock tracks. Slot types from the Steam store, with no invented damage stats.",
    h1: "Hood Warfare 2 Weapons and Unlocks",
  },
  {
    path: "/loadouts/",
    file: "src/app/loadouts/page.tsx",
    nav: "Loadouts",
    title: "Hood Warfare 2 Loadouts: What You Still Need to Unlock",
    description:
      "Pick a Hood Warfare 2 loadout goal and see which unlock track is still open. Reputation, weapon challenges, and gun kills are not the same bar.",
    h1: "Hood Warfare 2 Loadout Gaps",
  },
  {
    path: "/updates/",
    file: "src/app/updates/page.tsx",
    nav: "Updates",
    title: "Hood Warfare 2 Patch Notes for 1.0.10 and 1.0.1.4",
    description:
      "What Hood Warfare 2 patches 1.0.10 and 1.0.1.4 changed for private matches, voice chat, false kicks, missing audio, and which old guides to retire.",
    h1: "Hood Warfare 2 Updates",
  },
  {
    path: "/about/",
    file: "src/app/about/page.tsx",
    nav: null,
    title: "About This Hood Warfare 2 Guide",
    description:
      "hoodwarfare-2.com is an unofficial Hood Warfare 2 fan guide. Sources, the check date, and what this site refuses to invent.",
    h1: "About this Hood Warfare 2 guide",
  },
];

export function pageByPath(path: string): PageDef {
  const page = pages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Unknown page: ${path}`);
  }
  return page;
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
