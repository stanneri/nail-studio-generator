'use client'

import { useState } from 'react'
import NailShapeSelector from './NailShapeSelector'
import LengthSelector from './LengthSelector'
import StyleSelector from './StyleSelector'
import DecorationCheckboxes from './DecorationCheckboxes'
import ColorPicker from './ColorPicker'
import FingerSelector from './FingerSelector'
import LoadingSparkle from './LoadingSparkle'
import ImageResultPanel from './ImageResultPanel'
import { NailDesignInput, NailShape, NailLength, NailStyle } from '@/lib/types'

const INITIAL: NailDesignInput = {
  shape: 'round',
  length: 'medium',
  colors: '',
  style: 'ombre',
  decorations: [],
  fingers: [],
  details: '',
}

export default function DesignForm() {
  const [form, setForm] = useState<NailDesignInput>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const set = <K extends keyof NailDesignInput>(key: K, val: NailDesignInput[K]) =>
    setForm((f) => ({ ...f, [key]: val }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.colors.trim()) return

    setLoading(true)
    setError(null)
    setImages([])

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Generointi epäonnistui')
      }

      setImages(data.images ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Jokin meni pieleen')
    } finally {
      setLoading(false)
    }
  }

  const canSubmit = form.colors.trim().length > 0 && !loading

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Shape */}
        <Section number="01" title="Kynnen muoto">
          <NailShapeSelector
            value={form.shape}
            onChange={(v: NailShape) => set('shape', v)}
          />
        </Section>

        {/* Length */}
        <Section number="02" title="Pituus">
          <LengthSelector
            value={form.length}
            onChange={(v: NailLength) => set('length', v)}
          />
        </Section>

        {/* Colors */}
        <Section number="03" title="Värit">
          <ColorPicker
            value={form.colors}
            onChange={(v) => set('colors', v)}
          />
        </Section>

        {/* Style */}
        <Section number="04" title="Tyyli">
          <StyleSelector
            value={form.style}
            onChange={(v: NailStyle) => set('style', v)}
          />
        </Section>

        {/* Decorations */}
        <Section number="05" title="Koristeet" optional>
          <DecorationCheckboxes
            value={form.decorations}
            onChange={(v) => set('decorations', v)}
          />
        </Section>

        {/* Fingers */}
        <Section number="06" title="Koristeltavat sormet" optional>
          <FingerSelector
            value={form.fingers}
            onChange={(v) => set('fingers', v)}
          />
        </Section>

        {/* Details */}
        <Section number="07" title="Lisätiedot" optional>
          <textarea
            value={form.details}
            onChange={(e) => set('details', e.target.value)}
            placeholder="Lisätoiveet, kuten erityiset kuviot yms."
            rows={3}
            className="w-full resize-none rounded-xl border border-pearl-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-300 transition-all duration-200 focus:border-blush-200 focus:ring-2 focus:ring-blush-100"
          />
        </Section>

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit}
          className={[
            'relative w-full overflow-hidden rounded-2xl py-4 text-base font-semibold tracking-wide text-white shadow-lg transition-all duration-300',
            canSubmit
              ? 'bg-gradient-to-r from-mauve-500 to-blush-400 shadow-blush-100 hover:shadow-xl hover:shadow-blush-200 hover:scale-[1.01] active:scale-[0.99]'
              : 'cursor-not-allowed bg-pearl-200 shadow-none text-pearl-300',
          ].join(' ')}
        >
          {/* Shimmer overlay on hover */}
          {canSubmit && (
            <span
              className="pointer-events-none absolute inset-0 animate-shimmer opacity-30"
              style={{
                background:
                  'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.5) 50%, transparent 80%)',
                backgroundSize: '300% 100%',
              }}
            />
          )}
          <span className="relative">
            {loading ? 'Generoidaan…' : 'Generoi kynsidesign'}
          </span>
        </button>
      </form>

      {/* Loading */}
      {loading && <LoadingSparkle />}

      {/* Error */}
      {error && !loading && (
        <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-500">
          {error}
        </div>
      )}

      {/* Results */}
      {images.length > 0 && !loading && <ImageResultPanel images={images} />}
    </div>
  )
}

function Section({
  number,
  title,
  optional,
  children,
}: {
  number: string
  title: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline gap-2.5">
        <span className="font-mono text-xs font-bold tracking-widest text-blush-300">
          {number}
        </span>
        <h2 className="font-serif text-base font-semibold text-mauve-600">
          {title}
        </h2>
        {optional && (
          <span className="ml-1 rounded-full bg-pearl-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gray-400">
            Valinnainen
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
