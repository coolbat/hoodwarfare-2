export type UnlockGoal = "weapon" | "attachment" | "skin";
export type RangeIntent = "close" | "lot" | "onelife";

export type UnlockFlags = {
  playedMatches: boolean;
  stayedOnOneGun: boolean;
  finishedChallenge: boolean;
  gotKills: boolean;
};

export type Gap = {
  ready: boolean;
  headline: string;
  detail: string;
  caveat: string;
  slotNote: string;
};

export const botCaveat =
  "Bot matches and private lobbies exist. The store page does not say those settings grant reputation, weapon challenges, or skins. Watch the in-game progress move before you count a bot lobby.";

const slotNotes: Record<RangeIntent, string> = {
  close:
    "For rooms and mall corridors, fit a sight you can read up close. A grip or suppressor waits on that gun’s own challenge. Reputation can hand you a new gun, and that gun still starts without those pieces.",
  lot:
    "For a parking-lot lane, the store only confirms that sights are a slot. It publishes no zoom levels and no damage falloff, so this page will not invent either.",
  onelife:
    "Destroy The Block is one life per round. Take a gun whose challenges you already finished. A weapon you just unlocked from reputation is the wrong round for experiments.",
};

export function unlockGap(goal: UnlockGoal, flags: UnlockFlags, range: RangeIntent): Gap {
  const slotNote = slotNotes[range];

  if (goal === "weapon") {
    if (!flags.playedMatches) {
      return {
        ready: false,
        headline: "Weapons and equipment come from reputation, and that bar is still empty.",
        detail:
          "Play matches and level up. A finished weapon challenge does not unlock a different gun. Kills unlock skins, not the next weapon.",
        caveat: botCaveat,
        slotNote,
      };
    }
    return {
      ready: true,
      headline: "You are on the reputation track that pays weapons and equipment.",
      detail:
        "The store page does not publish a level table, so this site cannot name the next gun. A new weapon still needs its own challenges before attachments show up.",
      caveat: botCaveat,
      slotNote,
    };
  }

  if (goal === "attachment") {
    if (!flags.stayedOnOneGun || !flags.finishedChallenge) {
      return {
        ready: false,
        headline: "Attachments are a per-gun challenge, not an account level.",
        detail: flags.playedMatches
          ? "Matches raise reputation. They do not, by themselves, finish the attachment challenge on one gun. Stay with that gun until the challenge clears."
          : "Pick one gun and keep using it. Switching guns leaves several unfinished challenges.",
        caveat: botCaveat,
        slotNote,
      };
    }
    return {
      ready: true,
      headline: "That gun’s challenge track is the one that opens its attachments.",
      detail:
        "The store names the slot types: sights, magazines, grips, suppressors, and other attachments. It does not name every part inside those slots.",
      caveat: botCaveat,
      slotNote,
    };
  }

  if (!flags.gotKills) {
    return {
      ready: false,
      headline: "Skins come from kills with that gun.",
      detail:
        "A weapon challenge can open an attachment and still leave the skin track untouched. The store does not publish a kill count.",
      caveat: botCaveat,
      slotNote,
    };
  }

  return {
    ready: true,
    headline: "Kills with that specific gun are the skin track.",
    detail:
      "This page will not tell you how many kills a skin costs. The store only says kills with each gun unlock skins.",
    caveat: botCaveat,
    slotNote,
  };
}

export const goals: { id: UnlockGoal; label: string }[] = [
  { id: "weapon", label: "A new weapon or equipment piece" },
  { id: "attachment", label: "An attachment on a gun I already use" },
  { id: "skin", label: "A skin on one gun" },
];

export const ranges: { id: RangeIntent; label: string }[] = [
  { id: "close", label: "Close streets and mall rooms" },
  { id: "lot", label: "Open parking lots" },
  { id: "onelife", label: "A one-life bomb round" },
];
