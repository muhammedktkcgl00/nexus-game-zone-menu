function Tag({ children }) {
  if (!children) return null

  return (
    <span className="text-[11px] px-2 py-1 rounded-full border border-stroke bg-bg text-white/70">
      {children}
    </span>
  )
}

export default function ItemRow({ item }) {
  return (
    <div className="rounded-3xl border border-stroke bg-card p-3 flex items-center gap-3 shadow-[0_0_15px_rgba(168,85,247,0.08)]">

      {/* Resim */}
      <div className="w-16 h-16 rounded-2xl border border-stroke bg-bg flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white/40 text-xs">Resim</span>
        )}
      </div>

      {/* Bilgi */}
      <div className="flex-1">
        <p className="font-semibold text-white">{item.name}</p>

        <div className="mt-1">
          <Tag>{item.tag}</Tag>
        </div>
      </div>

      {/* Fiyat */}
      <div className="text-right">
        <p className="text-xl font-extrabold text-neon">
          {item.price}₺
        </p>
      </div>

    </div>
  )
}