export default function Home() {
  return (
    <div className="mx-auto max-w-md min-h-[calc(100vh-56px)]">
      {/* Full background */}
      <div
        className="min-h-[calc(100vh-56px)] bg-cover bg-center relative"
        style={{ backgroundImage: "url(/images/hero.png)" }}
      >
        {/* Dark overlay + mor gradient */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon/25 via-transparent to-bg/80" />

        {/* Content */}
        <div className="relative h-full px-4 py-10 flex items-center justify-center">
          <div className="w-full">
            <div className="rounded-3xl border border-neon/60 bg-bg/60 backdrop-blur p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <p className="text-sm text-white/70">NEXUS GAME ZONE</p>
              <p className="text-3xl font-extrabold tracking-tight mt-1">
                Eğlence burada başlar
              </p>
              <p className="text-white/70 mt-3">
                Sol üst menüden yiyecek & içecekleri seç.
              </p>
                <br />
              <p>Yüksekova'nın en büyük ve en konforlu oyun salonunda gerçek oyun deneyimine hazır ol!
                <br />
                <br />
                    Geniş oyun alanımız, hijyenik ortamımız ve kaliteli ekipmanlarımız ile arkadaşlarınla keyifli vakit geçirebileceğin bir ortam sunuyoruz.
                <br />
                <br />
                    İster rekabet dolu maçlar yap, ister arkadaşlarınla eğlenceli anlar yaşa.
                <br />
                <br />
                    Burada sadece oyun oynamazsın; dostluk kurar, heyecanı ve rekabeti birlikte yaşarsın.</p>

              <div className="mt-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-stroke bg-card">
                  🎮 Turnuva 
                </span>
                <span className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-stroke bg-card">
                  ⚡ Hızlı servis
                </span>
                <span className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-stroke bg-card">
                    🧼 Hijyenik ve temiz
                </span>
              </div>
            </div>

            <p className="text-center text-xs text-white/50 mt-6">
              Menüyü açmak için ☰
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}