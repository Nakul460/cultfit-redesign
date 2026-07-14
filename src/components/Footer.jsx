export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/6 bg-[#0a0a0a] pt-16 pb-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                <span className="text-sm font-black text-white">c</span>
              </div>
              <span className="text-lg font-bold text-white">cult.fit</span>
              <span className="rounded bg-white/6 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#666]">
                Concept Redesign
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9a9a9a]">
              A personal frontend and UI/UX project exploring a redesigned
              membership experience for cult.fit.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/nakul460"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-[#9a9a9a] transition-all duration-200 hover:border-white/12 hover:text-white"
              >
                <i className="bi bi-github text-lg" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/nakulrajakc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-[#9a9a9a] transition-all duration-200 hover:border-white/12 hover:text-white"
              >
                <i className="bi bi-linkedin text-lg" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#d0d0d0]">
              About this project
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#9a9a9a]">
              <li>Hero &amp; navigation redesign</li>
              <li>Workout category exploration</li>
              <li>Why cult.fit benefits showcase</li>
              <li>Membership tier comparison</li>
              <li>Responsive layout across breakpoints</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/6 pt-6">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="max-w-2xl text-[11px] leading-relaxed text-[#555]">
              &copy; 2026 Nakul Raja. Unofficial concept redesign created for
              educational and portfolio purposes. Not affiliated with or
              endorsed by cult.fit. cult.fit and its associated trademarks
              belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
