import { NailStyle } from '@/lib/types'

const STYLES: { value: NailStyle; label: string; hint: string }[] = [
  { value: 'natural',     label: 'Natural',     hint: 'Minimal & clean' },
  { value: 'french',      label: 'French',      hint: 'Classic white tip' },
  { value: 'ombre',       label: 'Ombre',       hint: 'Gradient fade' },
  { value: 'solid',       label: 'Solid',       hint: 'One colour' },
  { value: 'glitter',     label: 'Glitter',     hint: 'Sparkle finish' },
  { value: 'nail art',    label: 'Nail Art',    hint: 'Hand-painted' },
  { value: '3D nail art', label: '3D Art',      hint: 'Sculptural' },
]

interface Props {
  value: NailStyle
  onChange: (v: NailStyle) => void
}

export default function StyleSelector({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {STYLES.map((style) => {
        const selected = value === style.value
        return (
          <button
            key={style.value}
            type="button"
            onClick={() => onChange(style.value)}
            className={[
              'group flex flex-col gap-0.5 rounded-xl border px-4 py-3 text-left transition-all duration-200',
              selected
                ? 'border-blush-200 bg-blush-50 shadow-sm shadow-blush-100'
                : 'border-pearl-200 bg-white hover:border-blush-200 hover:bg-pearl-50',
            ].join(' ')}
          >
            <span
              className={[
                'text-sm font-semibold transition-colors',
                selected ? 'text-mauve-600' : 'text-gray-600 group-hover:text-mauve-400',
              ].join(' ')}
            >
              {style.label}
            </span>
            <span
              className={[
                'text-[11px] transition-colors',
                selected ? 'text-mauve-400' : 'text-gray-400',
              ].join(' ')}
            >
              {style.hint}
            </span>
          </button>
        )
      })}
    </div>
  )
}
