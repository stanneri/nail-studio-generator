'use client'

import { useState } from 'react'

interface Props {
  images: string[]
}

export default function ImageResultPanel({ images }: Props) {
  return (
    <div className="mt-12">
      <div className="mb-6 text-center">
        <p className="font-serif text-xl text-mauve-600">Sinun designisi</p>
        <p className="mt-1 text-sm text-gray-400">
          Tallenna suosikkisi seuraavaa käyntiäsi varten
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {images.map((url, i) => (
          <ImageCard key={i} url={url} index={i + 1} />
        ))}
      </div>
    </div>
  )
}

function ImageCard({ url, index }: { url: string; index: number }) {
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
      <div className="relative aspect-square w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={`Generoitu kynsidesign ${index}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setLoaded(true)}
        />
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
