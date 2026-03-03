import { Link } from "react-router-dom"

export default function CategoryCard({ to, title, subtitle, emoji }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border bg-white p-4 shadow-sm active:scale-[0.99] transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-2xl">
          {emoji}
        </div>
        <div className="flex-1">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="text-slate-400">›</div>
      </div>
    </Link>
  )
}