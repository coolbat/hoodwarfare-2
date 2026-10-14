import { JsonLd } from "@/components/JsonLd";
import { ShotFigure } from "@/components/ShotFigure";
import { shots } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/site";

export const metadata = pageMetadata("/weapons-and-unlocks/");

const tracks = [
  {
    name: "Weapons and equipment",
    how: "Play matches and level reputation.",
    not: "A weapon challenge does not unlock a different gun.",
  },
  {
    name: "Attachments",
    how: "Finish the challenge on that specific gun.",
    not: "Account level does not fill sights, magazines, grips, or suppressors.",
  },
  {
    name: "Skins",
    how: "Get kills with that gun.",
    not: "The store does not publish a kill quota, and a challenge is not the skin track.",
  },
];

const slots = ["Sights", "Magazines", "Grips", "Suppressors", "Other attachments"];

export default function WeaponsPage() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "Weapons and unlocks", path: "/weapons-and-unlocks/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">Weapons · attachments · skins</p>
      <h1 className="display mt-3 max-w-[16ch] text-[clamp(3.2rem,7vw,6rem)]">
        Hood Warfare 2 Weapons and Unlocks
      </h1>
      <p className="mt-6 max-w-[65ch] text-lg text-muted">
        The Steam page separates three progress bars. Leveling up unlocks weapons and equipment.
        Weapon challenges unlock attachments. Kills with each gun unlock skins. Writing them as
        “reach this level and you own the build” is wrong.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <ShotFigure shot={shots.suppressor} priority />
        <ShotFigure shot={shots.gold} />
        <ShotFigure shot={shots.scope} />
      </div>

      <section className="mt-12">
        <h2 className="display text-[clamp(2.4rem,4vw,3.6rem)]">Three tracks</h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {tracks.map((track, index) => (
            <li key={track.name} className="grid gap-3 py-6 md:grid-cols-12">
              <span className="stencil text-sm text-sodium md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-4">
                <h3 className="display text-[2.2rem]">{track.name}</h3>
              </div>
              <div className="md:col-span-6">
                <p>{track.how}</p>
                <p className="mt-2 text-muted">{track.not}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="display text-[2.8rem]">Attachment slots the store names</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {slots.map((slot) => (
              <li key={slot} className="display py-3 text-[2rem]">
                {slot}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted">
            Perks and equipment are equipped before a match. The store does not list the perk
            names, so this page does not invent them. There is no damage table, no time-to-kill,
            and no ranked gun list here.
          </p>
        </div>
        <div className="lg:col-span-6">
          <h2 className="display text-[2.8rem]">How to test a change</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            <li>Stay on one gun so the challenge actually moves.</li>
            <li>Change one slot.</li>
            <li>Shoot it in a bot match at the range you actually fight.</li>
            <li>Judge it yourself. The store published no numbers to quote.</li>
          </ol>
          <p className="mt-6">
            <a href="/loadouts/" className="btn">
              Check the unlock you are missing
            </a>
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-line pt-8">
        <h2 className="display text-[2.6rem]">Loadout presets</h2>
        <p className="mt-4 max-w-[65ch] text-muted">
          Patch 1.0.10 said loadout presets were failing to save, and that this was fixed, along
          with progress sometimes not showing at the end of a match. That confirms presets exist.
          It does not publish the preset screen. If a preset looks blank, be on 1.0.1.4 before you
          assume the fix missed you. 1.0.1.4 came after 1.0.10.
        </p>
      </section>
    </article>
  );
}
