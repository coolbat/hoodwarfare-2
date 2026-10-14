import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd, site } from "@/lib/site";

export const metadata = pageMetadata("/updates/");

export default function UpdatesPage() {
  return (
    <article className="mx-auto max-w-[900px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "Updates", path: "/updates/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">Checked {site.verified}</p>
      <h1 className="display mt-3 text-[clamp(3.2rem,7vw,5.6rem)]">Hood Warfare 2 Updates</h1>
      <p className="mt-6 text-lg text-muted">
        Two developer posts matter for anyone using a launch-week guide. This page says which
        advice expired. It does not reprint the posts as a second patch archive.
      </p>

      <section className="mt-12 border-t border-sodium pt-6">
        <p className="stencil text-xs text-sodium">14 October 2026 · 01:03 UTC</p>
        <h2 className="display mt-2 text-[3rem]">Patch 1.0.1.4</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Private matches: a password-only lobby with friends.</li>
          <li>False anti-cheat kicks: the developer says they are fixed.</li>
          <li>No audio: open settings and select an audio output device.</li>
          <li>Various join failures and crashes: listed as fixed.</li>
        </ul>
        <p className="mt-4 text-muted">
          Read the version in the bottom-right of the menu. If Steam will not update, use the top
          left Steam menu and Exit Steam, then relaunch. The post is signed Trap$tar.
        </p>
        <p className="mt-4">
          <a href={site.patch1014} className="text-sodium">
            Patch note on SteamDB
          </a>
        </p>
      </section>

      <section className="mt-12 border-t border-line pt-6">
        <p className="stencil text-xs text-muted">12 October 2026 · 16:35 UTC</p>
        <h2 className="display mt-2 text-[3rem]">Patch 1.0.10</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Voice chat for the whole lobby or just the team. Push-to-talk defaults to T. Open mic is in settings.</li>
          <li>Anti-cheat, plus Report in the pause menu. Reports are reviewed. Confirmed cheating can be banned.</li>
          <li>Spawns moved, and spawn protection added. Supermarket is cited as a very small map where fights still end quickly.</li>
          <li>Loadout presets not saving, end-of-match progress not showing, character selection not saving, and bad ping on the join screen were among the bug fixes.</li>
          <li>Drive By locations were adjusted on some maps. No kill cost was published.</li>
        </ul>
      </section>

      <section className="mt-12 border-t border-line pt-6">
        <h2 className="display text-[2.6rem]">Guides to retire</h2>
        <dl className="mt-4 divide-y divide-line border-y border-line">
          <div className="grid gap-2 py-4 md:grid-cols-2">
            <dt>Friend posts with no password lobby</dt>
            <dd className="text-muted">Written before 1.0.1.4. Use the friend checklist.</dd>
          </div>
          <div className="grid gap-2 py-4 md:grid-cols-2">
            <dt>“No audio” posts that only talk about the mic</dt>
            <dd className="text-muted">Output device and voice chat are different lanes.</dd>
          </div>
          <div className="grid gap-2 py-4 md:grid-cols-2">
            <dt>Kick posts that skip the version</dt>
            <dd className="text-muted">The false-kick fix only applies once the menu shows 1.0.1.4.</dd>
          </div>
        </dl>
        <p className="mt-6 flex flex-wrap gap-4">
          <a href="/play-with-friends/" className="btn">
            Friend checklist
          </a>
          <a href="/troubleshooting/" className="btn-ghost">
            Fix lanes
          </a>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="display text-[2.4rem]">Launch</h2>
        <p className="mt-3 text-muted">
          Hood Warfare 2 released on Steam on 8 October 2026. The developer’s launch post said it
          had been nearly four years since Hood Warfare, and that more updates were coming. A
          4 October post said the game was dropping Thursday 10/8.
        </p>
      </section>
    </article>
  );
}
