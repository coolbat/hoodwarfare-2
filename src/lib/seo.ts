import type { Metadata } from "next";
import { pageByPath, site } from "@/lib/site";

export function pageMetadata(path: string): Metadata {
  const page = pageByPath(path);
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/media/header.jpg",
          width: 1600,
          height: 748,
          alt: "Hood Warfare 2 key art",
        },
      ],
    },
  };
}
