import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="py-56 bg-surface-container/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-5"
        >
          <h2 className="font-headline text-7xl font-bold text-primary mb-20 letter-spacing-heading leading-tight">Hablemos de su <br/><span className="italic font-light text-secondary">Próxima Creación.</span></h2>
          <div className="space-y-16">
            <div className="flex gap-8 items-start">
              <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.5em] text-on-surface-variant mb-3">Visítenos</p>
                <p className="font-headline text-2xl text-primary">Bda. San Francisco de Asís, 1,<br/>52002 Melilla, España</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <span className="material-symbols-outlined text-secondary text-3xl">call</span>
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.5em] text-on-surface-variant mb-3">Teléfono</p>
                <p className="font-headline text-2xl text-primary">952 682 686</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.5em] text-on-surface-variant mb-3">Email</p>
                <p className="font-headline text-2xl text-primary">atelier@retaleselkilo.es</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="lg:col-span-7 bg-surface p-16 md:p-20 editorial-shadow"
        >
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-all py-6 placeholder:text-outline/60 font-body text-sm tracking-wide" placeholder="Nombre" type="text"/>
              </div>
              <div className="relative">
                <input className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-all py-6 placeholder:text-outline/60 font-body text-sm tracking-wide" placeholder="Email" type="email"/>
              </div>
            </div>
            <div className="relative">
              <input className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-all py-6 placeholder:text-outline/60 font-body text-sm tracking-wide" placeholder="Asunto" type="text"/>
            </div>
            <div className="relative">
              <textarea className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-all py-6 placeholder:text-outline/60 font-body text-sm tracking-wide resize-none" placeholder="Su mensaje" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary py-8 font-label text-[11px] uppercase tracking-[0.5em] hover:bg-secondary transition-all duration-700">
              Enviar Consulta
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
