export default function Header({ onMenuClick, title = "PS Menü" }) {
  return (
    <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur border-b border-stroke">
      <div className="mx-auto max-w-md px-4 h-14 flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl border border-stroke bg-card active:scale-95"
          aria-label="Menüyü aç"
        >
          ☰
        </button>

        <div className="flex-1">
          <p className="font-semibold text-white">{title}</p>
          <p className="text-xs text-white/60">QR Menü</p>
        </div>
      </div>
    </header>
  )
}