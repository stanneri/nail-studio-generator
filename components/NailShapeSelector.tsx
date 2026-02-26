import { NailShape } from '@/lib/types'

const SHAPES: { value: NailShape; label: string; desc: string }[] = [
  { value: 'square',   label: 'Square',   desc: 'Suora reuna' },
  { value: 'round',    label: 'Pyöreä',   desc: 'Pehmeä kaari' },
  { value: 'almond',   label: 'Almond',   desc: 'Kapeneva kärki' },
  { value: 'stiletto', label: 'Stiletto', desc: 'Terävä kärki' },
  { value: 'coffin',   label: 'Coffin',   desc: 'Tasainen kärki' },
]

interface Props {
  value: NailShape
  onChange: (v: NailShape) => void
}

export default function NailShapeSelector({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
      {SHAPES.map((shape) => {
        const selected = value === shape.value
        return (
          <button
            key={shape.value}
            type="button"
            onClick={() => onChange(shape.value)}
            className={[
              'group flex flex-col items-center gap-1 rounded-2xl border px-2 py-3 text-center transition-all duration-200',
              selected
                ? 'border-blush-200 bg-blush-50 shadow-sm shadow-blush-100'
                : 'border-pearl-200 bg-white hover:border-blush-200 hover:bg-pearl-50',
            ].join(' ')}
          >
            <span
              className={[
                'text-sm font-semibold tracking-wide transition-colors',
                selected ? 'text-mauve-600' : 'text-gray-500 group-hover:text-mauve-400',
              ].join(' ')}
            >
              {shape.label}
            </span>
            <span
              className={[
                'text-[10px] transition-colors',
                selected ? 'text-mauve-400' : 'text-gray-400',
              ].join(' ')}
            >
              {shape.desc}
            </span>
          </button>
        )
      })}
    </div>
  )
}
