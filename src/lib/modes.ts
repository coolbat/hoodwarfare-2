export type Intent = "casual" | "squad" | "drill";

export type Mode = {
  id: string;
  name: string;
  sides: string;
  scores: string;
  lives: string;
  firstDrill: string;
  summary: string;
};

export const modes: Mode[] = [
  {
    id: "turf-war",
    name: "Turf War",
    sides: "Gang vs gang",
    scores: "Points for the territory your gang holds. Push the other team off theirs.",
    lives: "The store page does not call this one-life.",
    firstDrill: "Stay on a point long enough to see why a kill streak can still lose the match.",
    summary: "Territory, not the kill feed, is the score.",
  },
  {
    id: "gangbang",
    name: "GangBang",
    sides: "Gang vs gang",
    scores: "The gang with the most kills wins.",
    lives: "The store page does not call this one-life.",
    firstDrill: "Use it when you only want a straight fight and no objective to forget.",
    summary: "Team shootout. Most kills wins.",
  },
  {
    id: "chaos",
    name: "Chaos",
    sides: "Every player for themselves",
    scores: "Most kills. The store says there is no gang loyalty here.",
    lives: "The store page does not call this one-life.",
    firstDrill: "Read it as free-for-all before you queue it with a squad and expect teamwork.",
    summary: "Solo kill race.",
  },
  {
    id: "hit-a-lick",
    name: "Hit A Lick",
    sides: "Gang vs gang",
    scores: "Take the bag from the other hood and bring it back. Watch your own bag.",
    lives: "The store page does not call this one-life.",
    firstDrill: "Practice the carry and the defense together. A kill that ignores the bag does not finish the mode.",
    summary: "Two bags. Steal theirs, keep yours.",
  },
  {
    id: "destroy-the-block",
    name: "Destroy The Block",
    sides: "Gang vs gang",
    scores: "One side has the bomb. Plant or defuse to win.",
    lives: "One life per round, per the store page.",
    firstDrill: "Run it against bots before a public lobby. You do not get a second spawn to learn the plant.",
    summary: "Bomb round, one life.",
  },
  {
    id: "chain-snatch",
    name: "Chain Snatch",
    sides: "Gang vs gang",
    scores: "Snatch chains enemies drop. Collect your teammates’ chains before the other gang does.",
    lives: "The store page does not call this one-life.",
    firstDrill: "Get the pickup after the kill. The store says the kill is only half the job.",
    summary: "Kills do not score until the chain is taken.",
  },
];

export function recommendModes(intent: Intent): Mode[] {
  const pick = (ids: string[]) => ids.map((id) => modes.find((mode) => mode.id === id)!);
  if (intent === "casual") return pick(["gangbang", "chaos"]);
  if (intent === "squad") return pick(["turf-war", "hit-a-lick", "chain-snatch"]);
  return pick(["destroy-the-block", "hit-a-lick", "chain-snatch"]);
}

export const intents: { id: Intent; label: string; detail: string }[] = [
  {
    id: "casual",
    label: "I just want a fight",
    detail: "No bag, bomb, or turf to remember.",
  },
  {
    id: "squad",
    label: "I want to play an objective with friends",
    detail: "The score is territory, a bag, or chains.",
  },
  {
    id: "drill",
    label: "I want to practice one rule",
    detail: "Start with the modes that punish a missed objective.",
  },
];

export type MapEntry = {
  name: string;
  source: string;
  note: string;
};

export const maps: MapEntry[] = [
  {
    name: "Downtown",
    source: "Steam store",
    note: "Named with the suburbs, The Trenches, and Chicago Mall as the maps you fight through.",
  },
  {
    name: "The suburbs",
    source: "Steam store",
    note: "Named on the store page. Indoor and street routes are mentioned for the set, not drawn here.",
  },
  {
    name: "The Trenches",
    source: "Steam store",
    note: "A named map. The store page does not publish a layout.",
  },
  {
    name: "Chicago Mall",
    source: "Steam store",
    note: "The indoor map in the store description. Store screenshots show a multi-level mall.",
  },
  {
    name: "Supermarket",
    source: "Patch 1.0.10",
    note: "The developer called Supermarket a very small map where fights end quickly. It is not in the store’s four-name sentence.",
  },
];
