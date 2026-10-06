'use client'

import Link from 'next/link'
import { ArrowRight, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="PasaTuLlave inicio">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#D4A72C] text-[#0B2B45]">
            <span className="text-lg font-black tracking-[-0.12em]">PTL</span>
          </span>
          <span className="text-lg font-black tracking-[-0.05em]">PASATULLAVE</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Navegación principal">
          <Link href="#vehiculos" className="transition-colors hover:text-[#D4A72C]">Comprar auto</Link>
          <Link href="#como-funciona" className="transition-colors hover:text-[#D4A72C]">Cómo funciona</Link>
          <Link href="/vende-tu-auto" className="transition-colors hover:text-[#D4A72C]">Vende tu auto</Link>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="#vehiculos" className="flex items-center gap-2 text-sm font-semibold hover:text-[#D4A72C]">
            <Search className="size-4" /> Explorar inventario
          </Link>
          <Link href="/vende-tu-auto" className="rounded-full bg-[#D4A72C] px-5 py-2.5 text-sm font-bold text-[#0B2B45] transition-transform hover:scale-[1.03]">
            Vender mi auto
          </Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <div className="border-t border-white/15 bg-[#0B2B45] px-5 py-5 lg:hidden"><nav className="flex flex-col gap-5 text-sm font-semibold"><Link href="#vehiculos" onClick={() => setOpen(false)}>Comprar auto</Link><Link href="#como-funciona" onClick={() => setOpen(false)}>Cómo funciona</Link><Link href="/vende-tu-auto">Vende tu auto</Link></nav></div>}
    </header>
  )
}

export function Footer() {
  return <footer className="bg-[#071c2d] px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row"><span className="font-bold tracking-wide text-white">PASATULLAVE</span><span>Compra con confianza. Vende con ventaja.</span><span>© 2025 PasaTuLlave</span></div></footer>
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group inline-flex items-center gap-2 font-bold text-[#0B2B45]">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
}

