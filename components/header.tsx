"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "About Bitfest", href: "/about-bitfest" },
  { name: "Events & Competitions", href: "/events" },
  { name: "Workshops & Sessions", href: "/workshops" },
  { name: "Schedule & Registration", href: "/schedule-registration" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "navbar-bg-scrolled shadow-lg py-2" : "navbar-bg py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold grid place-items-center">
            <div className="w-4 h-4 bg-navy"></div>
          </div>
          <span className="text-white pixel-font text-sm md:text-base tracking-wider">BITFEST</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gold transition-colors text-xs font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-gold text-navy hover:bg-gold/80">Register Now</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden navbar-bg absolute top-full left-0 w-full border-t border-gold/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold transition-colors py-2 border-b border-gray-700/50 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-gold text-navy hover:bg-gold/80 w-full pixel-font text-xs">Register Now</Button>
          </div>
        </div>
      )}
    </header>
  )
}
