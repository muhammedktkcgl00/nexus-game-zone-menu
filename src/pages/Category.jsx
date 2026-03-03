import { useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { MENU } from "../data/menu"
import ItemRow from "../components/ItemRow"

const TITLES = {
  icecekler: "İçecekler",
  yiyecekler: "Yiyecekler",
}

export default function Category() {
  const { key } = useParams()
  const [q, setQ] = useState("")

  const rawItems = useMemo(() => MENU[key] || [], [key])
  const title = TITLES[key] || "Kategori"

  const items = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return rawItems
    return rawItems.filter((x) => x.name.toLowerCase().includes(term))
  }, [q, rawItems])

  return (
    <div className="mx-auto max-w-md p-4 grid gap-4">

      {/* Başlık */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-extrabold text-white">{title}</p>

        <Link
          to="/"
          className="text-sm text-neon border border-stroke px-3 py-1 rounded-xl"
        >
          Ana Sayfa
        </Link>
      </div>

      {/* Arama */}
      <div className="rounded-2xl border border-stroke bg-card p-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ürün ara..."
          className="w-full outline-none px-3 py-2 rounded-xl bg-transparent text-white placeholder:text-white/40"
        />
      </div>

      <div className="text-xs text-white/50">
        {items.length} ürün listeleniyor
      </div>

      {/* Liste */}
      <div className="grid gap-3">
        {items.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>

    </div>
  )
}