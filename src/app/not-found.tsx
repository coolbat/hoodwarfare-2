
export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20">
      <p className="stencil text-xs text-sodium">404</p>
      <h1 className="display mt-3 text-[clamp(3rem,8vw,6rem)]">That page is not on this block</h1>
      <p className="mt-6 max-w-[52ch] text-muted">
        The guide lives on the friend checklist, the fix lanes, the modes, and the unlock tracks.
      </p>
      <p className="mt-8">
        <a href="/" className="btn">
          Back to the guide
        </a>
      </p>
    </section>
  );
}
