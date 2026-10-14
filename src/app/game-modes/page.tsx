import { JsonLd } from "@/components/JsonLd";
import { ModePicker } from "@/components/ModePicker";
import { ShotFigure } from "@/components/ShotFigure";
import { maps, modes } from "@/lib/modes";
import { shots } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/site";

export const metadata = pageMetadata("/game-modes/");

const modeShots: Record<string, keyof typeof shots | null> = {
  "turf-war": "blockNight",
  gangbang: "squad",
  chaos: "downtown",
  "hit-a-lick": "supermarket",
  "destroy-the-block": "mall",
  "chain-snatch": "gold",
};

export default function GameModesPage() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "Game modes", path: "/game-modes/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">Six modes · bots · maps</p>
      <h1 className="display mt-3 max-w-[14ch] text-[clamp(3.2rem,7vw,6rem)]">
        Hood Warfare 2 Game Modes
      </h1>
      <p className="mt-6 max-w-[65ch] text-lg text-muted">
        Six modes ship on the Steam page. The names do not all explain the win. Destroy The Block
        is one life. Chain Snatch still needs the pickup after the kill. Use the picker, then read
        the mode you are about to queue.
      </p>

      <section className="mt-10" aria-labelledby="picker-heading">
        <h2 id="picker-heading" className="display text-[2.4rem]">
          What should you play first?
        </h2>
        <div className="mt-5">
          <ModePicker />
        </div>
      </section>

      <div className="mt-14 space-y-16">
        {modes.map((mode) => {
          const shotKey = modeShots[mode.id];
          const shot = shotKey ? shots[shotKey] : null;
          return (
            <section key={mode.id} id={mode.id} className="scroll-mt-6 border-t border-line pt-8">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <p className="stencil text-xs text-muted">{mode.sides}</p>
                  <h2 className="display mt-2 text-[clamp(2.8rem,5vw,4.5rem)]">{mode.name}</h2>
                  <dl className="mt-6 grid gap-4">
                    <div>
                      <dt className="stencil text-[0.68rem] text-muted">How you score</dt>
                      <dd className="mt-1">{mode.scores}</dd>
                    </div>
                    <div>
                      <dt className="stencil text-[0.68rem] text-muted">Lives</dt>
                      <dd className="mt-1">{mode.lives}</dd>
                    </div>
                    <div>
                      <dt className="stencil text-[0.68rem] text-muted">First drill</dt>
                      <dd className="mt-1">{mode.firstDrill}</dd>
                    </div>
                  </dl>
                </div>
                <div className="lg:col-span-6">{shot ? <ShotFigure shot={shot} /> : null}</div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-16 border-t border-line pt-8" id="bots">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2.6rem,5vw,4rem)]">Bots, for a beginner match</h2>
            <p className="mt-4 max-w-[62ch] text-muted">
              The store says you can play online with friends and other players, or set up a match
              against bots. You choose the map, the mode, and the match settings, then add bots to
              fill the teams. That is the beginner path when a public lobby is a bad classroom.
            </p>
            <p className="mt-4 max-w-[62ch]">
              Run Destroy The Block once so the one-life rule is obvious. Run Hit A Lick once so
              you see the bag. The store does not say a bot match counts toward reputation,
              challenges, or skins.
            </p>
            <p className="mt-6">
              <a href="/play-with-friends/" className="btn">
                Then play with friends
              </a>
            </p>
          </div>
          <div className="lg:col-span-5">
            <ShotFigure shot={shots.stripMall} />
          </div>
        </div>
      </section>

      <section className="mt-16" id="maps">
        <h2 className="display text-[clamp(2.6rem,5vw,4rem)]">Maps named so far</h2>
        <p className="mt-4 max-w-[62ch] text-muted">
          No callouts. The store names four places. Patch 1.0.10 adds a fifth by example. Layouts
          are not drawn because they were not published.
        </p>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {maps.map((map) => (
            <li key={map.name} className="grid gap-2 py-4 md:grid-cols-12">
              <span className="display text-[2rem] md:col-span-4">{map.name}</span>
              <span className="text-muted md:col-span-6">{map.note}</span>
              <span className="stencil text-[0.68rem] text-sodium md:col-span-2">{map.source}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ShotFigure shot={shots.supermarket} />
          <ShotFigure shot={shots.scope} />
        </div>
      </section>
    </article>
  );
}
