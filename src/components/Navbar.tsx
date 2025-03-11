"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "~/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-cream border-b-3 border-navy" : "py-4 bg-transparent"}`}
    >
      <div className="container max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold text-navy">
          usamahfz.tech
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-md border-3 border-navy shadow-brutal-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-navy" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b-3 border-navy py-4">
          <nav className="container max-w-5xl mx-auto px-4 flex flex-col space-y-3">
            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setMobileMenuOpen(false)}>
              Experience
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-navy font-medium rounded-md border-3 border-navy hover:bg-coral hover:text-white transition-colors group shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
    >
      <span className="relative z-10">{children}</span>
      <span className="stabilo-highlight"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative px-4 py-2 text-navy font-medium rounded-md border-3 border-navy hover:bg-coral hover:text-white transition-colors block group shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
    >
      <span className="relative z-10">{children}</span>
      <span className="stabilo-highlight"></span>
    </Link>
  )
}


