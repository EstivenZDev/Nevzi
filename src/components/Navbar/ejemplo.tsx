"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" // íconos del menú (instala con: npm i lucide-react)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold">
            MyBrand
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">Inicio</Link>
            <Link href="/shop">Tienda</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/contact">Contacto</Link>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Tienda</Link>
            <Link href="/about" onClick={() => setOpen(false)}>Nosotros</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
