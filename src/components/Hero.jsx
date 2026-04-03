import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <header id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
          className="w-full h-full object-cover" 
          alt="Macro photography of draped golden silk fabric" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgkzhr34dt0JWj0PgHTnAtlA4xRPrPUDq2ikClAkychCNF9QHn3wa1nMs7ySsjU8unSMiyeEs55FxO1Ph5z0Jz8QssuvR4w8HVoDBoEp7SjbFX09pcv-8PmbgrDoOhb2OmqT_Ht8n-RDZ0w4Gwg9JGf8rNJEClwNeqJwh7r1o-4hJRPgyDuTUc8xK5elClGOyW18j05oyqlj1D_hEOchFPvXQ-tc2GPiObMP55hLNfAdu7teptj6TzbOe9cPZYtyEQSYXIYcprOYPj"
        />
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-label text-[10px] uppercase tracking-[0.5em] mb-10 text-on-surface-variant flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-secondary"></span>
            Est. 1975 — Melilla
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="font-headline text-8xl md:text-[11rem] font-bold letter-spacing-tightest text-primary leading-[0.85] mb-12"
          >
            Retales <br/><span className="italic font-light text-secondary">El Kilo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-headline text-2xl italic text-on-surface-variant mb-16 max-w-lg leading-relaxed border-l-2 border-secondary/30 pl-8"
          >
            Alta Costura en Melilla desde 1975. Curating the world's finest textiles for the discerning creator.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex gap-10"
          >
            <button className="bg-primary text-on-primary px-14 py-6 font-label text-[11px] uppercase tracking-[0.4em] hover:bg-secondary transition-all duration-700">
              Explorar Colección
            </button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
