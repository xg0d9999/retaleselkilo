import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { name: 'Tejidos', id: 'tejidos' },
    { name: 'Tradición', id: 'tradicion' },
    { name: 'Contacto', id: 'contacto' }
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Trigger when section is in top 20-80% of view
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = ['hero', 'tejidos', 'tradicion', 'contacto']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-outline/20">
      <div className="flex justify-between items-center px-8 md:px-16 py-8 w-full max-w-[1440px] mx-auto">
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, 'hero')}
          className="text-3xl font-headline font-bold text-primary tracking-tighter"
        >
          Retales El Kilo
        </a>
        <div className="hidden md:flex gap-16 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className={`font-label text-[10px] uppercase tracking-[0.3em] transition-all duration-500 pb-1 border-b-2 ${
                activeSection === link.id 
                  ? 'text-primary border-primary' 
                  : 'text-on-surface-variant hover:text-primary border-transparent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-primary text-2xl">shopping_bag</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
