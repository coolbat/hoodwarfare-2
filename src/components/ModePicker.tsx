"use client";

import { useState } from "react";
import { intents, recommendModes, type Intent } from "@/lib/modes";

export function ModePicker() {
  const [intent, setIntent] = useState<Intent>("drill");
  const picked = recommendModes(intent);

  return (
    <div>
      <div role="group" aria-label="What do you want from the match" className="grid gap-3 lg:grid-cols-3">
        {intents.map((item) => (
          <button
            key={item.id}
            type="button"
            className="choice"
            aria-pressed={intent === item.id}
            onClick={() => setIntent(item.id)}
          >
            <span className="display block text-[1.7rem]">{item.label}</span>
            <span className="mt-2 block text-sm text-muted">{item.detail}</span>
          </button>
        ))}
      </div>
      <ol className="mt-6 divide-y divide-line border-y border-line">
        {picked.map((mode, index) => (
          <li key={mode.id} className="grid gap-2 py-4 md:grid-cols-12 md:items-baseline">
            <span className="stencil text-sm text-sodium md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
            <a href={`#${mode.id}`} className="display text-[2rem] md:col-span-4">
              {mode.name}
            </a>
            <span className="text-muted md:col-span-7">{mode.summary}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-muted">
        The full mode list stays below. This only changes which three to read first.
      </p>
    </div>
  );
}
