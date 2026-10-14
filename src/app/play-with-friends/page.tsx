import { GuideSwitch } from "@/components/GuideSwitch";
import { JsonLd } from "@/components/JsonLd";
import { ShotFigure } from "@/components/ShotFigure";
import { friendLanes } from "@/lib/friend";
import { shots } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd, site } from "@/lib/site";

export const metadata = pageMetadata("/play-with-friends/");

export default function PlayWithFriendsPage() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "Play with friends", path: "/play-with-friends/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">Private match · build {site.build}</p>
      <h1 className="display mt-3 max-w-[16ch] text-[clamp(3.2rem,7vw,6.2rem)]">
        Play Hood Warfare 2 with Friends
      </h1>
      <p className="mt-6 max-w-[65ch] text-lg text-muted">
        Patch {site.build} added a password-only private lobby. Both PCs need that build in the
        bottom-right of the main menu. Pick the situation you are in. Every lane says what to
        check, where to look, and what to do next. Menu labels the developer did not publish stay
        marked unverified.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ShotFigure shot={shots.squad} priority />
        </div>
        <aside className="border-t border-line pt-4 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="stencil text-xs text-muted">Checked {site.verified}</p>
          <p className="mt-3">
            This is a shared checklist, not a remote repair. It does not touch your PC and it does
            not ask for a Steam login.
          </p>
          <p className="mt-4 text-muted">
            Bots are a different session. The store lets you fill teams with bots. That is practice.
            A friend session on this patch is the password lobby.
          </p>
          <p className="mt-4">
            <a href="/troubleshooting/" className="text-sodium">
              Jump to troubleshooting
            </a>
          </p>
        </aside>
      </div>
      <div className="mt-12">
        <GuideSwitch lanes={friendLanes} group="friends" />
      </div>
      <section className="mt-16 grid gap-8 border-t border-line pt-8 lg:grid-cols-2">
        <div>
          <h2 className="display text-[2.6rem]">What this page will not pretend</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>It does not name a button the 1.0.1.4 post never named.</li>
            <li>It does not claim the password room appears in the public browser.</li>
            <li>It does not treat “no sound” and “mic dead” as one bug.</li>
            <li>It does not count a bot match as progress. That rule is unverified.</li>
          </ul>
        </div>
        <ShotFigure shot={shots.downtown} />
      </section>
    </article>
  );
}
