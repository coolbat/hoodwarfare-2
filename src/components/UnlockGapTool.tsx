"use client";

import { useSyncExternalStore } from "react";
import {
  goals,
  ranges,
  unlockGap,
  type RangeIntent,
  type UnlockFlags,
  type UnlockGoal,
} from "@/lib/unlocks";

const searchListeners = new Set<() => void>();

function subscribeSearch(listener: () => void) {
  searchListeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    searchListeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

function readSearch() {
  return window.location.search;
}

function writeSearch(params: URLSearchParams) {
  const search = params.toString();
  const next = `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (current === next) return;
  window.history.replaceState(null, "", next);
  for (const listener of searchListeners) listener();
}

function isGoal(value: string | null): value is UnlockGoal {
  return value === "weapon" || value === "attachment" || value === "skin";
}

function isRange(value: string | null): value is RangeIntent {
  return value === "close" || value === "lot" || value === "onelife";
}

export function UnlockGapTool() {
  const search = useSyncExternalStore(subscribeSearch, readSearch, () => "");
  const params = new URLSearchParams(search);
  const goalParam = params.get("goal");
  const rangeParam = params.get("range");
  const goal: UnlockGoal = isGoal(goalParam) ? goalParam : "attachment";
  const range: RangeIntent = isRange(rangeParam) ? rangeParam : "close";
  const flags: UnlockFlags = {
    playedMatches: params.get("played") === "1",
    stayedOnOneGun: params.get("onegun") === "1",
    finishedChallenge: params.get("challenge") === "1",
    gotKills: params.get("kills") === "1",
  };
  const gap = unlockGap(goal, flags, range);

  function update(nextGoal: UnlockGoal, nextRange: RangeIntent, nextFlags: UnlockFlags) {
    const next = new URLSearchParams();
    next.set("goal", nextGoal);
    next.set("range", nextRange);
    if (nextFlags.playedMatches) next.set("played", "1");
    if (nextFlags.stayedOnOneGun) next.set("onegun", "1");
    if (nextFlags.finishedChallenge) next.set("challenge", "1");
    if (nextFlags.gotKills) next.set("kills", "1");
    writeSearch(next);
  }

  const checks: { key: keyof UnlockFlags; label: string }[] = [
    { key: "playedMatches", label: "I have played matches on this account" },
    { key: "stayedOnOneGun", label: "I have stayed on one gun" },
    { key: "finishedChallenge", label: "I finished a weapon challenge on that gun" },
    { key: "gotKills", label: "I have kills with that gun" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <fieldset>
          <legend className="stencil text-xs text-muted">Goal</legend>
          <div className="mt-3 grid gap-3">
            {goals.map((item) => (
              <button
                key={item.id}
                type="button"
                className="choice"
                aria-pressed={goal === item.id}
                onClick={() => update(item.id, range, flags)}
              >
                <span className="display text-[1.6rem]">{item.label}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="stencil text-xs text-muted">Where you fight</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {ranges.map((item) => (
              <button
                key={item.id}
                type="button"
                className="choice"
                aria-pressed={range === item.id}
                onClick={() => update(goal, item.id, flags)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="stencil text-xs text-muted">Already done</legend>
          <div className="mt-3 grid gap-3">
            {checks.map((item) => (
              <label key={item.key} className="flex items-start gap-3 border border-line px-3 py-3">
                <input
                  type="checkbox"
                  className="mt-1 accent-[#f0a202]"
                  checked={flags[item.key]}
                  onChange={() => update(goal, range, { ...flags, [item.key]: !flags[item.key] })}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <aside className="border-t border-sodium pt-4 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
        <p className="stencil text-xs text-sodium">{gap.ready ? "Track open" : "Still missing"}</p>
        <h2 className="display mt-3 text-[2.6rem]">{gap.headline}</h2>
        <p className="mt-4 text-muted">{gap.detail}</p>
        <p className="mt-4">{gap.slotNote}</p>
        <p className="mt-4 text-sm text-muted">{gap.caveat}</p>
        <p className="mt-6 text-sm text-muted">
          The address bar holds this checklist so you can send it. Nothing is saved on a server.
        </p>
      </aside>
    </div>
  );
}
