"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-primary text-primary-foreground shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
              C
            </div>
            <span className="font-bold text-lg hidden sm:inline">Norton Elementary PTA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#home" className="hover:opacity-80 transition">
              Home
            </Link>
            <a
              href="https://jefferson.kyschools.us/norton"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              School Website
            </a>
            <a
              href="https://norton.givebacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              School Store
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary-foreground hover:text-primary rounded transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary-foreground/20">
            <Link href="#home" className="block py-2 hover:opacity-80 transition">
              Home
            </Link>
            <a
              href="https://jefferson.kyschools.us/norton"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:opacity-80 transition"
            >
              School Website
            </a>
            <a
              href="https://norton.givebacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:opacity-80 transition"
            >
              School Store
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
