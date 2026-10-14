import { JsonLd } from "@/components/JsonLd";
import { ShotFigure } from "@/components/ShotFigure";
import { faqLd, faqs } from "@/lib/faq";
import { shots } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/");

const jobs = [
  {
    index: "01",
    href: "/play-with-friends/",
    title: "Private match",
    detail: "Password lobby on build 1.0.1.4. Host, join, or a room you cannot see.",
  },
  {
    index: "02",
    href: "/play-with-friends/#friends-audio",
    title: "Invite friends",
    detail: "Same checklist for the player joining. The patch does not name an invite button.",
  },
  {
    index: "03",
    href: "/troubleshooting/#trouble-no-sound",
    title: "No sound",
    detail: "Silent guns and menu. Select an audio output device. Not the microphone.",
  },
  {
    index: "04",
    href: "/troubleshooting/#trouble-voice",
    title: "Voice chat",
    detail: "Push-to-talk is T by default. Lobby or team. Added in patch 1.0.10.",
  },
  {
    index: "05",
    href: "/troubleshooting/#trouble-cant-join",
    title: "Can’t join",
    detail: "Join failures and crashes are on the 1.0.1.4 list. Check the build first.",
  },
  {
    index: "06",
    href: "/troubleshooting/#trouble-kicked",
    title: "Kicked",
    detail: "False anti-cheat kicks were a 1.0.1.4 fix. A report ban is a different case.",
  },
  {
    index: "07",
    href: "/game-modes/",
    title: "Game modes",
    detail: "Six modes, what scores, and a first bot drill. Beginner path included.",
  },
  {
    index: "08",
    href: "/weapons-and-unlocks/",
    title: "Weapons",
    detail: "Reputation, attachment challenges, and skins. Three tracks, no fake stats.",
  },
];

const facts = [
  { label: "Released", value: "8 Oct 2026" },
  { label: "US price snapshot", value: "$5.39" },
  { label: "Platform", value: "Windows · Steam" },
  { label: "Build", value: "1.0.1.4" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description:
            "Unofficial Hood Warfare 2 guide for private matches, troubleshooting, game modes, and unlocks.",
        }}
      />
      <JsonLd data={faqLd(faqs)} />

      <section className="mx-auto grid max-w-[1400px] items-end gap-10 px-5 pb-8 pt-8 lg:grid-cols-12 lg:pt-12">
        <div className="hero-rise lg:col-span-7">
          <p className="stencil text-xs text-sodium">Build {site.build} · checked {site.verified}</p>
          <h1 className="display mt-4 max-w-[11ch] text-[clamp(3.6rem,8vw,7.1rem)]">
            Hood Warfare 2 Guides & Tools
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
            If you searched hoodwarfare2, this is the same Steam game: Trapstar Games’ Chicago
            shooter, app {site.steamApp}. This guide gets two players into a private match, then
            splits no sound from voice chat, then shows which unlock track is actually missing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/play-with-friends/" className="btn">
              Start the friend checklist
            </a>
            <a href={site.steamUrl} className="btn-ghost">
              View on Steam
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <ShotFigure shot={shots.squad} priority />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5" aria-label="Snapshot">
        <dl className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-line px-0 py-4 sm:px-4 sm:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0">
              <dt className="stencil text-[0.68rem] text-muted">{fact.label}</dt>
              <dd className="display mt-2 text-[2.2rem]">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 max-w-[70ch] text-sm text-muted">
          US store price on {site.verified}: $5.99 list, $5.39 with a 10 percent discount. Confirm
          it on Steam. The list price is not a promise.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14" aria-labelledby="jobs-heading">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="jobs-heading" className="display text-[clamp(2.6rem,4vw,4rem)]">
              Pick a job
            </h2>
            <p className="mt-4 text-muted">
              Hood Warfare 2 searches split in two. Before you buy: what it is, and whether your
              machine runs it. After you buy: friends, broken audio, and the next unlock.
            </p>
          </div>
          <ol className="lg:col-span-8">
            {jobs.map((job) => (
              <li key={job.href} className="border-t border-line last:border-b">
                <a href={job.href} className="grid gap-2 py-4 md:grid-cols-12 md:items-baseline">
                  <span className="stencil text-sm text-sodium md:col-span-2">{job.index}</span>
                  <span className="display text-[2rem] md:col-span-4">{job.title}</span>
                  <span className="text-muted md:col-span-6">{job.detail}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 py-6 lg:grid-cols-12" aria-labelledby="patch-heading">
        <div className="lg:col-span-5">
          <ShotFigure shot={shots.blockNight} />
        </div>
        <div className="lg:col-span-7 lg:pt-4">
          <p className="stencil text-xs text-sodium">Patch {site.build}</p>
          <h2 id="patch-heading" className="display mt-3 text-[clamp(2.6rem,5vw,4.4rem)]">
            The update that changed friend sessions
          </h2>
          <p className="mt-4 max-w-[62ch] text-muted">
            On 14 October 2026 Trapstar Games posted patch 1.0.1.4: password private matches, a fix
            for false anti-cheat kicks, a fix for missing audio, and fixes for some join failures
            and crashes. The version sits in the bottom-right of the menu. If it will not update,
            exit Steam from the Steam menu.
          </p>
          <p className="mt-4 max-w-[62ch]">
            A guide that never mentions a password lobby is stale for “how to play with friends.”
            The button names themselves were not in the post. This site says so instead of drawing
            a menu it has not opened.
          </p>
          <p className="mt-6">
            <a href="/updates/" className="btn">
              Read what the patches changed
            </a>
          </p>
        </div>
      </section>

      <section id="platforms" className="mx-auto max-w-[1400px] px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.6rem,5vw,4.2rem)]">Where Hood Warfare 2 runs</h2>
            <p className="mt-4 text-muted">
              PS5, Xbox, Mac, and mobile searches all hit the same Steam fact. Windows is listed.
              Mac and Linux are not. No console or phone edition is on the store page checked{" "}
              {site.verified}.
            </p>
          </div>
          <div className="lg:col-span-7">
            <table className="w-full border-t border-line text-left">
              <caption className="sr-only">Hood Warfare 2 platform availability from the Steam store page</caption>
              <tbody>
                {[
                  ["Windows PC", "Yes. Steam, 64-bit Windows 10 1909 or newer."],
                  ["Controller", "Yes. Steam lists full controller support on PC."],
                  ["Mac", "Not listed."],
                  ["PS5 and Xbox", "Not listed. No separate console page here."],
                  ["Mobile", "Not listed. This is not a Roblox game and not a phone port."],
                  ["Bots / single player", "Yes. You can fill teams with bots."],
                ].map(([platform, answer]) => (
                  <tr key={platform} className="border-b border-line">
                    <th scope="row" className="display w-[34%] py-3 pr-4 text-[1.4rem] font-normal">
                      {platform}
                    </th>
                    <td className="py-3 text-muted">{answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="display mt-8 text-[2rem]">PC requirements</h3>
            <table className="mt-3 w-full border-t border-line text-left text-sm">
              <caption className="sr-only">Minimum and recommended PC specs from Steam</caption>
              <thead>
                <tr className="stencil text-[0.68rem] text-muted">
                  <th className="py-2 pr-3 font-normal">Part</th>
                  <th className="py-2 pr-3 font-normal">Minimum</th>
                  <th className="py-2 font-normal">Recommended</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["OS", "Windows 10 64-bit, 1909 or newer", "Windows 11 64-bit"],
                  ["CPU", "i5-9600K or Ryzen 5 3600", "i5-12600K or Ryzen 5 7600"],
                  ["Memory", "8 GB", "16 GB"],
                  ["GPU", "GTX 1660 or RX 5600 XT 6 GB", "RTX 3060 Ti or RTX 4060 8 GB"],
                  ["Storage", "25 GB", "30 GB"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    {row.map((cell) => (
                      <td key={cell} className="py-2 pr-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-muted">
              DirectX 12, broadband, and a DirectX-compatible sound card on both tiers. Family Sharing
              is listed. Steam Deck is not rated on the page this guide checked.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-8 lg:grid-cols-2">
        <ShotFigure shot={shots.downtown} />
        <ShotFigure shot={shots.mall} />
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="display text-[clamp(2.6rem,5vw,4.2rem)]">
          Hood Warfare 2 questions
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="cursor-pointer display text-[1.7rem] leading-tight">
                {faq.question}
              </summary>
              <p className="mt-3 max-w-[68ch] text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
