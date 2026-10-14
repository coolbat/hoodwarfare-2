import Image from "next/image";
import type { Shot } from "@/lib/media";

export function ShotFigure({
  shot,
  priority = false,
}: {
  shot: Shot;
  priority?: boolean;
}) {
  return (
    <figure>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority={priority}
        className="h-auto w-full"
        style={{ width: "100%", height: "auto" }}
      />
      <figcaption className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted">
        {shot.caption}
      </figcaption>
    </figure>
  );
}
