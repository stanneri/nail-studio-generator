import { NailStyle } from '@/lib/types'

const STYLES: { value: NailStyle; label: string; hint: string }[] = [
  { value: 'natural',     label: 'Luonnollinen',  hint: 'Minimalistinen' },
  { value: 'french',      label: 'Ranskis',       hint: 'Klassinen valk. kärki' },
  { value: 'ombre',       label: 'Ombre',         hint: 'Liukuväri' },
  { value: 'chrome',      label: 'Chrome',        hint: 'Metallinen kiilto' },
  { value: 'nail art',    label: 'Kynsitaide',    hint: 'Käsin maalattu' },
  { value: '3D nail art', label: 'Kohokuviot',    hint: 'Veistoksellinen' },
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
