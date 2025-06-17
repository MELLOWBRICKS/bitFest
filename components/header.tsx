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

 return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            {/* Logo placeholder - This div will be replaced with actual CA logo */}
            <div className="h-10 mr-3 flex items-center justify-center">
		<div className="h-10 bg-[#f2c14e] flex items-center justify-center px-4 rounded-lg pixel-border">
			<span className="font-pixel text-navy text-xs">Computer Association</span> 
		</div>
	    </div>
            {/* BitFest logo placeholder - This span will be replaced with actual BitFest logo */}
            <span className="font-pixel text-white text-sm hidden md:inline-block">BITFEST 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`transition-colors ${location === link.href ? 'text-[#f2c14e]' : 'hover:text-[#f2c14e]'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy text-white pb-4">
            <ul className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-2 py-1 ${location === link.href 
                      ? 'bg-[#f2c14e] text-navy' 
                      : 'hover:bg-[#f2c14e] hover:text-navy transition-colors'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default header;
