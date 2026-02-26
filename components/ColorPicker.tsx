'use client'

import { useRef } from 'react'

const SWATCHES: { hex: string; name: string; light?: boolean }[] = [
  { hex: '#FADADD', name: 'vaaleanpunainen', light: true },
  { hex: '#FFB6C1', name: 'pinkki', light: true },
  { hex: '#FF69B4', name: 'kuumapinkki' },
  { hex: '#FF1493', name: 'tummanpinkki' },
  { hex: '#DC143C', name: 'punainen' },
  { hex: '#8B0000', name: 'viininpunainen' },
  { hex: '#DDA0DD', name: 'luumu', light: true },
  { hex: '#9B59B6', name: 'violetti' },
  { hex: '#4169E1', name: 'sininen' },
  { hex: '#87CEEB', name: 'taivaansininen', light: true },
  { hex: '#20B2AA', name: 'turkoosi' },
  { hex: '#228B22', name: 'vihreä' },
  { hex: '#F5CBA7', name: 'persikka', light: true },
  { hex: '#DEB887', name: 'nude', light: true },
  { hex: '#FFD700', name: 'kulta', light: true },
  { hex: '#C0C0C0', name: 'hopea', light: true },
  { hex: '#FFFFFF', name: 'valkoinen', light: true },
  { hex: '#000000', name: 'musta' },
]

interface Props {
  value: string
  onChange: (v: string) => void
}

export default function ColorPicker({ value, onChange }: Props) {
  const customRef = useRef<HTMLInputElement>(null)
  const isCustom = value.startsWith('#')

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-6 gap-2.5 sm:grid-cols-9">
        {SWATCHES.map((swatch) => {
          const selected = value === swatch.name
          return (
            <button
              key={swatch.hex}
              type="button"
              title={swatch.name}
              onClick={() => onChange(selected ? '' : swatch.name)}
              className="relative aspect-square w-full rounded-full transition-transform duration-150 hover:scale-110 focus:outline-none"
              style={{
                backgroundColor: swatch.hex,
                border: swatch.light ? '1px solid #e5e7eb' : undefined,
                boxShadow: selected
                  ? '0 0 0 2px white, 0 0 0 4px #C4768A'
                  : undefined,
              }}
            >
              {selected && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-6"
                      stroke={swatch.light ? '#374151' : 'white'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </button>
          )
        })}

        {/* Custom color */}
        <button
          type="button"
          title="Oma väri"
          onClick={() => customRef.current?.click()}
          className="relative aspect-square w-full rounded-full transition-transform duration-150 hover:scale-110 focus:outline-none overflow-hidden"
          style={{
            background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
            boxShadow: isCustom ? '0 0 0 2px white, 0 0 0 4px #C4768A' : undefined,
          }}
        >
          <input
            ref={customRef}
            type="color"
            className="sr-only"
            onChange={(e) => onChange(e.target.value)}
          />
        </button>
      </div>

      {value && (
        <p className="text-xs text-gray-400">
          Valittu:{' '}
          <span className="font-medium text-mauve-500">
            {isCustom ? 'oma väri' : value}
          </span>
          {isCustom && (
            <span
              className="ml-2 inline-block h-3 w-3 rounded-full border border-gray-200 align-middle"
              style={{ backgroundColor: value }}
            />
          )}
        </p>
      )}
    </div>
  )
}
