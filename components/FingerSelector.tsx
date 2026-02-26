const FINGERS: { value: string; label: string }[] = [
  { value: 'index finger',  label: 'Etusormi' },
  { value: 'middle finger', label: 'Keskisormi' },
  { value: 'ring finger',   label: 'Nimetön' },
  { value: 'pinky',         label: 'Pikkurilli' },
]

interface Props {
  value: string[]
  onChange: (v: string[]) => void
}

export default function FingerSelector({ value, onChange }: Props) {
  const toggle = (finger: string) => {
    onChange(
      value.includes(finger)
        ? value.filter((f) => f !== finger)
        : [...value, finger]
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {FINGERS.map((finger) => {
        const selected = value.includes(finger.value)
        return (
          <button
            key={finger.value}
            type="button"
            onClick={() => toggle(finger.value)}
            className={[
              'flex-1 rounded-full border px-3 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap',
              selected
                ? 'border-blush-200 bg-blush-100 text-mauve-600 shadow-sm shadow-blush-100'
                : 'border-pearl-200 bg-white text-gray-500 hover:border-blush-200 hover:text-mauve-400',
            ].join(' ')}
          >
            {finger.label}
          </button>
        )
      })}
    </div>
  )
}
