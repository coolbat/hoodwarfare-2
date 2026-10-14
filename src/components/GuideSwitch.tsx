"use client";

import { useSyncExternalStore } from "react";
import { sourceLabel, type GuideLane } from "@/lib/friend";

const hashListeners = new Set<() => void>();

function subscribeHash(listener: () => void) {
  hashListeners.add(listener);
  window.addEventListener("hashchange", listener);
  return () => {
    hashListeners.delete(listener);
    window.removeEventListener("hashchange", listener);
  };
}

function readHash() {
  return window.location.hash.replace("#", "");
}

function writeHash(id: string) {
  const next = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.replaceState(null, "", next);
  for (const listener of hashListeners) listener();
}

export function GuideSwitch({ lanes, group }: { lanes: GuideLane[]; group: string }) {
  const hash = useSyncExternalStore(subscribeHash, readHash, () => "");
  const active = lanes.some((lane) => lane.id === hash) ? hash : lanes[0]?.id;

  function choose(id: string) {
    writeHash(id);
    document.getElementById(`${group}-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <div role="group" aria-label={group} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lanes.map((lane) => (
          <button
            key={lane.id}
            type="button"
            className="choice"
            aria-pressed={active === lane.id}
            onClick={() => choose(lane.id)}
          >
            <span className="stencil block text-[0.68rem] text-sodium">{lane.query}</span>
            <span className="display mt-2 block text-[1.8rem]">{lane.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-14">
        {lanes.map((lane) => (
          <article
            key={lane.id}
            id={`${group}-${lane.id}`}
            className={`scroll-mt-6 border-t pt-6 ${active === lane.id ? "border-sodium" : "border-line"}`}
          >
            <header className="grid gap-4 md:grid-cols-12">
              <h2 className="display text-[clamp(2.4rem,5vw,4rem)] md:col-span-7">{lane.label}</h2>
              <p className="text-muted md:col-span-5 md:pt-2">{lane.lede}</p>
            </header>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {lane.steps.map((step, index) => (
                <li key={step.id} className="grid gap-4 py-6 md:grid-cols-12">
                  <p className="stencil text-sm text-sodium md:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="md:col-span-10">
                    <h3 className="display text-[2rem]">{step.title}</h3>
                    <dl className="mt-4 grid gap-4 md:grid-cols-3">
                      <div>
                        <dt className="stencil text-[0.68rem] text-muted">Check</dt>
                        <dd className="mt-1">{step.check}</dd>
                      </div>
                      <div>
                        <dt className="stencil text-[0.68rem] text-muted">Where</dt>
                        <dd className="mt-1">{step.where}</dd>
                      </div>
                      <div>
                        <dt className="stencil text-[0.68rem] text-muted">Then</dt>
                        <dd className="mt-1">{step.next}</dd>
                      </div>
                    </dl>
                    <p className={`stencil mt-4 text-[0.68rem] source-${step.source}`}>
                      {sourceLabel[step.source]}
                      <span className="mt-1 block font-body text-sm tracking-normal text-muted normal-case">
                        {step.sourceNote}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
}
