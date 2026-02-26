'use client'

import { useState } from 'react'

interface Props {
  images: string[]
}

export default function ImageResultPanel({ images }: Props) {
  const [zoomedUrl, setZoomedUrl] = useState<string | null>(null)

  return (
    <>
      <div className="mt-12">
        <div className="mb-6 text-center">
          <p className="font-serif text-xl text-mauve-600">Sinun designisi</p>
          <p className="mt-1 text-sm text-gray-400">
            Tallenna suosikkisi seuraavaa käyntiäsi varten
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {images.map((url, i) => (
            <ImageCard key={i} url={url} index={i + 1} onZoom={() => setZoomedUrl(url)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {zoomedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setZoomedUrl(null)}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setZoomedUrl(null)}
            aria-label="Sulje"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zoomedUrl}
            alt="Zoomattu kynsidesign"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

function ImageCard({
  url,
  index,
  onZoom,
}: {
  url: string
  index: number
  onZoom: () => void
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="group overflow-hidden rounded-3xl border border-pearl-200 bg-white shadow-sm shadow-pearl-200 transition-all duration-300 hover:shadow-md hover:shadow-blush-100"
      style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'scale(1)' : 'scale(0.97)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Image */}
      <div
        className="relative aspect-square w-full cursor-zoom-in overflow-hidden"
        onClick={onZoom}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={`Generoitu kynsidesign ${index}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setLoaded(true)}
        />
        {/* Zoom hint overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="rounded-full bg-black/30 p-2.5 backdrop-blur-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8.5 6v5M6 8.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-serif text-sm text-mauve-400">
          Design {index}
        </span>
        <a
          href={url}
          download={`nail-design-${index}.png`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-pearl-200 px-3 py-1.5 text-xs font-medium text-gray-500 transition-all duration-200 hover:border-blush-200 hover:bg-blush-50 hover:text-mauve-500"
        >
          Tallenna kuva
        </a>
      </div>
    </div>
  )
}
