"use client";

import { usePathname } from "next/navigation";
import { pages, site } from "@/lib/site";

const nav = pages.filter((page) => page.nav);

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-x-8 gap-y-4 px-5 py-4">
        <a href="/" className="display text-[2.4rem] leading-none">
          HW2
          <span className="mt-1 block font-body text-[0.68rem] font-normal tracking-[0.18em] text-muted normal-case">
            {site.domain}
          </span>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((page) => {
            const active = page.path === "/" ? pathname === "/" : pathname.startsWith(page.path);
            return (
              <a
                key={page.path}
                href={page.path}
                aria-current={active ? "page" : undefined}
                className={`display text-[1.35rem] leading-none ${active ? "text-sodium" : "text-ink"}`}
              >
                {page.nav}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="stencil text-xs text-sodium">Unofficial</p>
          <p className="mt-3 max-w-[62ch] text-muted">
            {site.domain} is a fan guide for Hood Warfare 2. It is not Trapstar Games and not the
            Steam store. Screenshots are from the Steam store page and belong to Trapstar Games.
            The game is fiction. Buy it on Steam. Never send a Steam password to this site.
          </p>
        </div>
        <div className="md:col-span-5 md:text-right">
          <p className="stencil text-xs text-muted">Checked {site.verified}</p>
          <p className="mt-3">
            <a href="/about/" className="display text-2xl">
              About
            </a>
          </p>
          <p className="mt-2">
            <a href={site.steamUrl} className="text-sodium">
              Hood Warfare 2 on Steam
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">Support published by the developer: {site.supportEmail}</p>
        </div>
      </div>
    </footer>
  );
}
