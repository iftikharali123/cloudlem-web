export default function TechIcons() {
  const icons = [
    { icon: "📱", position: "top-20 left-10" },
    { icon: "💻", position: "top-32 right-20" },
    { icon: "⚙️", position: "top-40 left-1/4" },
    { icon: "🔧", position: "top-16 right-1/3" },
    { icon: "📊", position: "top-28 left-1/3" },
    { icon: "🎯", position: "top-36 right-10" },
    { icon: "🚀", position: "top-24 left-1/2" },
    { icon: "💡", position: "top-44 right-1/4" },
    { icon: "🔒", position: "top-20 right-1/2" },
    { icon: "📈", position: "top-32 left-20" },
    { icon: "🌐", position: "top-48 left-1/6" },
    { icon: "⚡", position: "top-12 left-2/3" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} text-orange-300/30 text-4xl animate-float`}
          style={{
            animationDelay: `${index * 0.5}s`,
            animationDuration: "6s",
          }}
        >
          <div className="w-16 h-16 border-2 border-orange-300/20 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-orange-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
