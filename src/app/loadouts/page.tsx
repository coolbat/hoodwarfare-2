import { JsonLd } from "@/components/JsonLd";
import { UnlockGapTool } from "@/components/UnlockGapTool";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/site";

export const metadata = pageMetadata("/loadouts/");

export default function LoadoutsPage() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "Loadouts", path: "/loadouts/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">What is still locked</p>
      <h1 className="display mt-3 max-w-[16ch] text-[clamp(3.2rem,7vw,6rem)]">
        Hood Warfare 2 Loadout Gaps
      </h1>
      <p className="mt-6 max-w-[65ch] text-lg text-muted">
        A copied “best loadout” is useless if the attachment is still locked. Mark what you already
        have. The result says which of the three official tracks is still open, and it refuses to
        invent a damage chart.
      </p>
      <section className="mt-10 border-t border-line pt-8" aria-labelledby="gap-tool">
        <h2 id="gap-tool" className="sr-only">
          Unlock gap checker
        </h2>
        <UnlockGapTool />
      </section>
      <section className="mt-16 grid gap-10 border-t border-line pt-8 lg:grid-cols-3">
        <div>
          <h2 className="display text-[2rem]">Close range</h2>
          <p className="mt-3 text-muted">
            Mall rooms and tight streets want a sight you can read up close. Add a grip or
            suppressor only after that gun’s challenge unlocks it.
          </p>
        </div>
        <div>
          <h2 className="display text-[2rem]">Parking lots</h2>
          <p className="mt-3 text-muted">
            Longer lanes use the sight slot. The store does not publish zoom or falloff, so neither
            does this checker.
          </p>
        </div>
        <div>
          <h2 className="display text-[2rem]">One life</h2>
          <p className="mt-3 text-muted">
            Destroy The Block gives you one life per round. Bring the gun you already finished,
            not the one reputation just handed you.
          </p>
        </div>
      </section>
      <p className="mt-10">
        <a href="/weapons-and-unlocks/" className="text-sodium">
          Read the three unlock tracks
        </a>
      </p>
    </article>
  );
}
