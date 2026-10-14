import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd, site } from "@/lib/site";

export const metadata = pageMetadata("/about/");

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[760px] px-5 py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: "Guide", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <p className="stencil text-xs text-sodium">Unofficial fan guide</p>
      <h1 className="display mt-3 text-[clamp(3rem,7vw,5.4rem)]">About this Hood Warfare 2 guide</h1>
      <div className="mt-6 space-y-4 text-lg">
        <p>
          {site.domain} helps players get from “I own Hood Warfare 2” to “my friend is in the
          lobby, and I know which unlock I am missing.” It is not operated by {site.developer}.
        </p>
        <p>
          Pages were checked on {site.verified} against Steam app {site.steamApp}, the US store
          page, and the developer posts for patches {site.priorBuild} and {site.build}. A direct
          Steam player-count read that afternoon returned 2,948 at 14:42 UTC. That number is a
          snapshot of people running the app. It is not a lobby list, and it is not kept live here.
        </p>
        <p>
          Screenshots are the store’s own images. Captions say what the shot shows and what it does
          not prove. When a patch announces a feature without naming the button, the checklist says
          the path is unverified.
        </p>
        <p>This site does not publish invented weapon stats, a sensitivity converter, or a live server map. The loadout checker keeps its state in the address bar. No Steam password is requested.</p>
        <p>
          The game’s store page says Hood Warfare is fiction and does not promote real gang
          violence. Support mail published on that page is {site.supportEmail}.
        </p>
        <p>
          <a href={site.steamUrl} className="text-sodium">
            Buy and update Hood Warfare 2 on Steam
          </a>
        </p>
      </div>
    </article>
  );
}
