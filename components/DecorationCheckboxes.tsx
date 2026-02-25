const DECORATIONS = [
  'Rhinestones',
  'Glitter',
  'Foil',
  'Flowers',
  'Geometric',
  'Pearls',
]

interface Props {
  value: string[]
  onChange: (v: string[]) => void
}

export default function DecorationCheckboxes({ value, onChange }: Props) {
  const toggle = (dec: string) => {
    onChange(
      value.includes(dec) ? value.filter((d) => d !== dec) : [...value, dec]
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {DECORATIONS.map((dec) => {
        const checked = value.includes(dec)
        return (
          <label
            key={dec}
            className={[
              'flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 select-none',
              checked
                ? 'border-blush-200 bg-blush-50'
                : 'border-pearl-200 bg-white hover:border-blush-200 hover:bg-pearl-50',
            ].join(' ')}
          >
            <span
              className={[
                'flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border transition-all duration-200',
                checked
                  ? 'border-mauve-400 bg-mauve-400'
                  : 'border-pearl-300 bg-white',
              ].join(' ')}
            >
              {checked && (
                <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4l3 3 5-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={() => toggle(dec)}
            />
            <span
              className={[
                'text-sm font-medium transition-colors',
                checked ? 'text-mauve-600' : 'text-gray-500',
              ].join(' ')}
            >
              {dec}
            </span>
          </label>
        )
      })}
    </div>
  )
}
