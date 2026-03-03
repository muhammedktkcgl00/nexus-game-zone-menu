import { Link } from "react-router-dom"

export default function SideMenu({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/60 transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed z-40 top-0 left-0 h-full w-72 bg-bg shadow-xl border-r border-stroke transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-stroke flex items-center justify-between">
          <p className="font-semibold text-white">Menü</p>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl border border-stroke bg-card active:scale-95 text-white"
            aria-label="Menüyü kapat"
          >
            ✕
          </button>
        </div>

        <nav className="p-3 grid gap-2">
          <Link
            to="/"
            onClick={onClose}
            className="p-3 rounded-xl border border-stroke bg-card text-white"
          >
            🏠 Ana Sayfa
          </Link>

          <Link
            to="/kategori/icecekler"
            onClick={onClose}
            className="p-3 rounded-xl border border-stroke bg-card text-white"
          >
            🥤 İçecekler
          </Link>

          <Link
            to="/kategori/yiyecekler"
            onClick={onClose}
            className="p-3 rounded-xl border border-stroke bg-card text-white"
          >
            🍔 Yiyecekler
          </Link>
        </nav>

        <div className="p-4 text-xs text-white/60 border-t border-stroke mt-auto">
          <p className="text-neon">NEXUS GAME ZONE</p>
          {/* <p>Fiyatlar şubeye göre değişebilir.</p> */}
        </div>
      </aside>
    </>
  )
}