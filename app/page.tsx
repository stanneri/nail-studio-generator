import DesignForm from '@/components/DesignForm'

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen px-4 pb-24 pt-16 sm:px-6">
      <div className="mx-auto max-w-2xl">

        {/* ── Header ─────────────────────────────── */}
        <header className="mb-14 text-center">
          {/* Decorative rule */}
          <div className="mx-auto mb-6 flex items-center justify-center gap-3 opacity-50">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blush-200" />
            <Gem />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blush-200" />
          </div>

          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-mauve-400">
            Kynsien suunnittelu
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-mauve-700 sm:text-5xl">
            Nails by Neea Dream Nails
          </h1>
          <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400 sm:text-base">
            Kuvaile visiosi — muoto, pituus, värit ja tyyli.
            <br className="hidden sm:block" />
            Saat haluamasi kynsidesignin sekunneissa.
          </p>

          <a
            href="https://www.instagram.com/nailsbyneea_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-pearl-200 bg-white/60 px-4 py-2 text-xs font-medium text-gray-500 shadow-sm transition-all duration-200 hover:border-blush-200 hover:bg-white hover:text-mauve-500 hover:shadow-blush-100"
          >
            <Instagram />
            @nailsbyneea_
          </a>
        </header>

        {/* ── Card ───────────────────────────────── */}
        <div className="rounded-3xl border border-pearl-200 bg-white/80 p-6 shadow-sm shadow-pearl-200 backdrop-blur-sm sm:p-10">
          <DesignForm />
        </div>

      </div>
    </main>
  )
}

function Instagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function Gem() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 0.5L9.5 4L5 9.5L0.5 4L5 0.5Z"
        fill="#F9B8D0"
        stroke="#C4768A"
        strokeWidth="0.5"
      />
    </svg>
  )
}
