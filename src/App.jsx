import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import SideMenu from "./components/SideMenu"
import Home from "./pages/Home"
import Category from "./pages/Category"

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg text-white">
      <Header onMenuClick={() => setOpen(true)} title="PS Menü" />
      <SideMenu open={open} onClose={() => setOpen(false)} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategori/:key" element={<Category />} />
        </Routes>
      </main>

      <footer className="mx-auto max-w-md p-4 text-center text-xs text-white/50 border-t border-stroke">
        © {new Date().getFullYear()} PS QR Menü
      </footer>
    </div>
  )
}