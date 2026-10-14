import { GuideSwitch } from "@/components/GuideSwitch";
import { JsonLd } from "@/components/JsonLd";
import { ShotFigure } from "@/components/ShotFigure";
import { shots } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd, site } from "@/lib/site";
import { troubleLanes } from "@/lib/trouble";

export const metadata = pageMetadata("/troubleshooting/");

export default function TroubleshootingPage() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "Troubleshooting", path: "/troubleshooting/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">No sound, voice, join, kick</p>
      <h1 className="display mt-3 max-w-[14ch] text-[clamp(3.2rem,7vw,6rem)]">
        Hood Warfare 2 Troubleshooting
      </h1>
      <p className="mt-6 max-w-[65ch] text-lg text-muted">
        Pick one symptom. A silent game is the {site.build} output-device fix. Voice chat is the
        1.0.10 microphone path, default key T. A kick on an old build is the false-kick bug they
        say they fixed. A kick after you are already on {site.build} is not automatically the same
        bug.
      </p>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <ShotFigure shot={shots.blockNight} priority />
        </div>
        <div className="lg:col-span-6">
          <h2 className="display text-[2.4rem]">Do not mix these</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            <div className="grid gap-2 py-4 md:grid-cols-2">
              <dt className="display text-[1.6rem]">No sound</dt>
              <dd className="text-muted">Guns and menu are silent. Settings, audio output device.</dd>
            </div>
            <div className="grid gap-2 py-4 md:grid-cols-2">
              <dt className="display text-[1.6rem]">Voice chat</dt>
              <dd className="text-muted">You hear the match. Nobody hears you. Hold T, or open mic.</dd>
            </div>
            <div className="grid gap-2 py-4 md:grid-cols-2">
              <dt className="display text-[1.6rem]">Can’t join</dt>
              <dd className="text-muted">Version, password lobby, then verify files.</dd>
            </div>
            <div className="grid gap-2 py-4 md:grid-cols-2">
              <dt className="display text-[1.6rem]">Kicked</dt>
              <dd className="text-muted">Update to {site.build}. Do not remove Easy Anti-Cheat.</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-muted">
            Store screenshots on this page are not the settings menu. Nobody has published that
            screen in the patch notes.
          </p>
          <p className="mt-4">
            <a href="/play-with-friends/" className="text-sodium">
              Back to the friend checklist
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <GuideSwitch lanes={troubleLanes} group="trouble" />
      </div>
    </article>
  );
}
