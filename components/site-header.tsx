"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="PasaTuLlave inicio"
        >
          <Image
            src="/logo_blanco.png"
            alt="PasaTuLlave logo"
            className="rounded-sm object-cover"
            width={60}
            height={60}
            priority
          />
          <span className="text-lg font-black tracking-[-0.05em]">
            PASATULLAVE
          </span>
        </Link>
        {/* <nav
          className="hidden items-center gap-8 text-sm font-medium lg:flex"
          aria-label="Navegación principal"
        >
          <Link
            href="/autos"
            className="transition-colors hover:text-[#D4A72C] hover:font-bold"
          >
            CATÁLOGO DE AUTOS
          </Link>
        </nav> */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/vende-tu-auto"
            className="rounded-full bg-[#D4A72C] px-5 py-2.5 text-sm font-bold text-[#0B2B45] transition-transform hover:scale-[1.03]"
          >
            QUIERO VENDER MI AUTO
          </Link>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/15 bg-[#0B2B45] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-5 text-sm font-semibold">
            <Link href="#vehiculos" onClick={() => setOpen(false)}>
              Comprar auto
            </Link>
            <Link href="#como-funciona" onClick={() => setOpen(false)}>
              Cómo funciona
            </Link>
            <Link href="/vende-tu-auto">Vende tu auto</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#071c2d] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between items-center gap-5 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="PasaTuLlave inicio"
        >
          <Image
            src="/logo_blanco.png"
            alt="PasaTuLlave logo"
            className="rounded-sm object-cover"
            width={60}
            height={60}
            priority
          />
          <span className="text-lg font-black tracking-[-0.05em]">
            PASATULLAVE
          </span>
        </Link>
        <span className="font-bold">COMPRA CON CONFIANZA</span>
        <span>© 2025 PasaTuLlave</span>
      </div>
    </footer>
  );
}
