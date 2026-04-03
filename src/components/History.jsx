import React from 'react'
import { motion } from 'framer-motion'

const History = () => {
  return (
    <section className="py-56 bg-surface-container/30">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          <div className="absolute -top-16 -left-16 w-80 h-80 bg-outline/20 z-0"></div>
          <div className="relative z-10 overflow-hidden">
            <img 
              className="w-full editorial-shadow transition-transform duration-[3000ms]" 
              alt="Bespoke tailoring atelier" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0SUhH3zfsJ05AWw6KF3mbyGIDrc6xu4nNpvMsqMfKMvtn1HeM_iWKDl8SY6atWWiInwh0cREjWjfnVQqIm8Z7iFlFXuBYfJ8D9kIEqutZmX54wpR78YxIUuf43jkwO1wrO8PWNViicjObRaqHLjp9y-9e-qxIC51BSPCRSA4ZFq930EePKM2Fk48DKZMJxLtT5NVofGV72VIVn52cJ7xHgE_Wd34S1YvLnmXTgc7YFgnuD1zlZ7FMW9ql69XlI6tlcn3XF3lm4VcC"
            />
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -bottom-10 -right-10 p-12 bg-primary text-on-primary z-20 hidden lg:block"
          >
            <p className="font-headline text-6xl font-bold text-secondary">49</p>
            <p className="font-label text-[10px] uppercase tracking-[0.5em] opacity-80 mt-2">Años de Tradición</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="font-label text-[10px] uppercase tracking-[0.5em] text-secondary mb-10">Nuestra Historia</p>
          <h2 className="font-headline text-7xl md:text-8xl font-bold text-primary mb-14 letter-spacing-tightest leading-[0.9]">Legado de <br/><span className="italic font-light text-secondary">Hilo y Aguja.</span></h2>
          <div className="space-y-10 font-body text-on-surface-variant text-lg leading-relaxed font-light">
            <p>Fundada en 1975 en el corazón de Melilla, Retales El Kilo nació con la vocación de traer los tejidos más exclusivos del mundo a nuestra ciudad. Lo que comenzó como un pequeño taller de curaduría textil se ha convertido en el referente de la alta costura local.</p>
            <p>Hoy, mantenemos intacta nuestra obsesión por la calidad. Cada metro de tela que pasa por nuestras manos es seleccionado bajo estrictos criterios de tacto, caída y durabilidad, asegurando que cada creación de nuestros clientes sea una obra maestra.</p>
          </div>
          <button className="mt-16 flex items-center gap-6 group">
            <span className="w-16 h-[1px] bg-primary group-hover:w-24 group-hover:bg-secondary transition-all duration-700"></span>
            <span className="font-label text-[11px] uppercase tracking-[0.4em] text-primary group-hover:text-secondary transition-colors">Conoce nuestro taller</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default History
