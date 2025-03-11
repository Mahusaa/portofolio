"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Briefcase, FolderKanban, Code, User, Mail } from "lucide-react"

export default function BottomNavbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-cream border-t-3 border-black py-2">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavItem href="#home" icon={<Home />} active={activeSection === "home"} label="Home" />
          <NavItem href="#about" icon={<User />} active={activeSection === "about"} label="About" />
          <NavItem href="#experience" icon={<Briefcase />} active={activeSection === "experience"} label="Work" />
          <NavItem href="#projects" icon={<FolderKanban />} active={activeSection === "projects"} label="Projects" />
          <NavItem href="#skills" icon={<Code />} active={activeSection === "skills"} label="Skills" />
          <NavItem href="#contact" icon={<Mail />} active={activeSection === "contact"} label="Contact" />
        </div>
      </div>
    </nav>
  )
}

function NavItem({
  href,
  icon,
  active,
  label,
}: { href: string; icon: React.ReactNode; active: boolean; label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div
        className={`p-2 rounded-md ${active ? "bg-black text-white shadow-brutal-sm" : "text-black"} border-3 border-black transform hover:-translate-y-1 transition-transform ${active ? "translate-y-0" : "translate-y-0"}`}
      >
        {icon}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
    </Link>
  )
}


