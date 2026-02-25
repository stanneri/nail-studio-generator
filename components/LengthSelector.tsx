import { NailLength } from '@/lib/types'

const LENGTHS: { value: NailLength; label: string }[] = [
  { value: 'short',       label: 'Short' },
  { value: 'medium',      label: 'Medium' },
  { value: 'long',        label: 'Long' },
  { value: 'extra long',  label: 'Extra Long' },
]

interface Props {
  value: NailLength
  onChange: (v: NailLength) => void
}

export default function LengthSelector({ value, onChange }: Props) {
  return (
    <div className="flex gap-2">
      {LENGTHS.map((len) => {
        const selected = value === len.value
        return (
          <button
            key={len.value}
            type="button"
            onClick={() => onChange(len.value)}
            className={[
              'flex-1 rounded-full border px-3 py-2.5 text-sm font-medium transition-all duration-200',
              selected
                ? 'border-blush-200 bg-blush-100 text-mauve-600 shadow-sm shadow-blush-100'
                : 'border-pearl-200 bg-white text-gray-500 hover:border-blush-200 hover:text-mauve-400',
            ].join(' ')}
          >
            {len.label}
          </button>
        )
      })}
    </div>
  )
}
