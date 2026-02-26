export default function LoadingSparkle() {
  return (
    <div className="mt-12 flex flex-col items-center gap-6 py-10">
      {/* Sparkle cluster */}
      <div className="relative h-20 w-20">
        {/* Centre star */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-sparkle-a">
          <Star size={22} color="#C4768A" />
        </span>
        {/* Orbit stars */}
        <span className="absolute left-0 top-1 animate-sparkle-b">
          <Star size={12} color="#F9B8D0" />
        </span>
        <span className="absolute right-0 top-3 animate-sparkle-c">
          <Star size={10} color="#C4768A" />
        </span>
        <span className="absolute bottom-1 left-3 animate-sparkle-d">
          <Star size={14} color="#F9B8D0" />
        </span>
        <span className="absolute bottom-0 right-2 animate-sparkle-e">
          <Star size={9} color="#E8D09A" />
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1.5">
        <p className="font-serif text-lg text-mauve-600 animate-pulse-soft">
          Luodaan kynsidesigneja
        </p>
        <p className="text-sm text-gray-400">Tämä kestää noin 20 sekuntia&hellip;</p>
      </div>

      {/* Shimmer bar */}
      <div
        className="h-1 w-40 overflow-hidden rounded-full"
        style={{ background: 'rgba(249,184,208,0.25)' }}
      >
        <div
          className="h-full w-full animate-shimmer rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 20%, #F9B8D0 50%, #C4768A 65%, transparent 80%)',
            backgroundSize: '300% 100%',
          }}
        />
      </div>
    </div>
  )
}

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 4-pointed star */}
      <path d="M12 2 C12 2 12.8 8 12 12 C11.2 8 12 2 12 2Z" />
      <path d="M12 12 C12 12 18 11.2 22 12 C18 12.8 12 12 12 12Z" />
      <path d="M12 12 C12 12 11.2 18 12 22 C12.8 18 12 12 12 12Z" />
      <path d="M12 12 C12 12 6 12.8 2 12 C6 11.2 12 12 12 12Z" />
    </svg>
  )
}
