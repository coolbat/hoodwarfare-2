import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { friendLanes } from "@/lib/friend";
import { recommendModes } from "@/lib/modes";
import { pages } from "@/lib/site";
import { laneText, troubleLanes } from "@/lib/trouble";
import { unlockGap } from "@/lib/unlocks";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

describe("friend checklist", () => {
  it("opens every lane on build 1.0.1.4", () => {
    for (const lane of friendLanes) {
      expect(`${lane.steps[0].title} ${lane.steps[0].check}`).toContain("1.0.1.4");
    }
  });
});

describe("audio lanes stay split", () => {
  it("does not send a silent game to the talk key", () => {
    const lane = troubleLanes.find((item) => item.id === "no-sound");
    expect(lane).toBeDefined();
    expect(laneText(lane!).toLowerCase()).not.toMatch(/push-to-talk|pressing t|hold t/);
  });

  it("tells a voice problem about the default key", () => {
    const lane = troubleLanes.find((item) => item.id === "voice");
    expect(laneText(lane!)).toMatch(/push-to-talk/);
    expect(laneText(lane!)).toContain("T");
  });
});

describe("mode picker", () => {
  it("sends a drill toward the one-life bomb mode", () => {
    expect(recommendModes("drill").map((mode) => mode.id)).toContain("destroy-the-block");
  });

  it("does not hand a casual fight the bomb round first", () => {
    expect(recommendModes("casual")[0].id).toBe("gangbang");
  });
});

describe("unlock gap", () => {
  it("refuses to treat reputation as an attachment unlock", () => {
    const gap = unlockGap(
      "attachment",
      {
        playedMatches: true,
        stayedOnOneGun: false,
        finishedChallenge: false,
        gotKills: false,
      },
      "close",
    );
    expect(gap.ready).toBe(false);
    expect(gap.headline.toLowerCase()).toContain("not an account level");
    expect(gap.detail.toLowerCase()).toContain("reputation");
  });

  it("keeps skins on the kill track", () => {
    const gap = unlockGap(
      "skin",
      {
        playedMatches: true,
        stayedOnOneGun: true,
        finishedChallenge: true,
        gotKills: false,
      },
      "lot",
    );
    expect(gap.ready).toBe(false);
    expect(gap.headline.toLowerCase()).toContain("kills");
  });
});

describe("page registry", () => {
  it("prints each H1 in that route's source", () => {
    for (const page of pages) {
      const source = fs.readFileSync(path.join(root, page.file), "utf8");
      expect(source).toContain(page.h1);
    }
  });
});
