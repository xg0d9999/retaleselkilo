import React from 'react'
import { motion } from 'framer-motion'

const Collections = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
    }
  }

  return (
    <section className="py-48 px-8 md:px-16 max-w-[1440px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12"
      >
        <div className="max-w-2xl">
          <p className="font-label text-[10px] uppercase tracking-[0.5em] text-secondary mb-6">Curated Selection</p>
          <h2 className="font-headline text-6xl md:text-7xl font-bold letter-spacing-heading text-primary">Nuestras Colecciones</h2>
        </div>
        <a className="font-label text-[10px] uppercase tracking-[0.4em] border-b border-primary pb-2 text-primary hover:text-secondary hover:border-secondary transition-colors" href="#">Ver todo el catálogo</a>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        {/* Large Card */}
        <motion.div variants={itemVariants} className="md:col-span-8 group relative overflow-hidden bg-surface-container transition-transform duration-1000">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
              alt="High-end neutral linen" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDckO--MzD8b7VbF3Ie5hGeWbCAezWZyKeC8r_jkeMSM1wIKTFNCClt_SqhWXsg7NDSdBqzlUVMC3C6TD0EDUfU8O6pmjL0hyKWpu_73E9h59Y5Nk1ojrYlEkNUdz7u6Ddp-CuHMXW2TXJBUc2K1YGKIX5Ggv8zuoJnVR1z1bRfY8DxvlZbZGsRhlqWr3J1hOpJG_O-dnYlO6m2gD7R-KEyun7wqkFaFWTrhPtEDcFbizIa8l_PEd_FDY-vFpWnOy-cMk3ic8vLqXsg"
            />
          </div>
          <div className="p-16 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/40 to-transparent">
            <h3 className="font-headline text-5xl font-bold text-white mb-6">Tejidos Premium</h3>
            <p className="font-body text-white/80 max-w-md text-sm leading-relaxed tracking-wide">Linos lituanos, sedas italianas y algodones egipcios de la más alta calidad.</p>
          </div>
        </motion.div>
        
        {/* Tall Card */}
        <motion.div variants={itemVariants} className="md:col-span-4 group bg-[#EAE8E3] flex flex-col overflow-hidden">
          <div className="flex-grow overflow-hidden aspect-[4/5]">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
              alt="Golden silk draped" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuat0LmF3nbNjj9r0Noy5q5mwfxkbHcvZ1dCkcX6vB5AIhV_cHcB8tIrZW1fBR-pn44D4eU4gsbQFem8EqcT2ELZ8b-x_vadB8J1LLLp_0urafeT743kAaRaatcY8IKLna-cNuBWvy0c_OGmR066-CpWfmvbj-JUIBPJSMY4-waejuyUNM1nNsj4LECVHQ0o2Yir2Bv0DhR2ANrFOk4YZTYnB1hkn4UWLWXUStMdJ2V8gj6iPkFqBFqJDX9bE17YHDpoWMUm5c3aay"
            />
          </div>
          <div className="p-10 border-t border-outline/30">
            <h3 className="font-headline text-3xl font-bold text-primary mb-3">Telas</h3>
            <p className="font-label text-[9px] text-on-surface-variant uppercase tracking-[0.4em]">Sastrería & Confección</p>
          </div>
        </motion.div>
        
        {/* Small Card */}
        <motion.div variants={itemVariants} className="md:col-span-4 group bg-surface-container overflow-hidden">
          <div className="p-10">
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">Retales</h3>
            <p className="font-body text-sm text-on-surface-variant mb-10 leading-relaxed">Piezas únicas para proyectos extraordinarios.</p>
          </div>
          <div className="h-80 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:rotate-1 group-hover:scale-105 transition-transform duration-1000" 
              alt="Luxury fabric bolts" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdIy3ayh_dv8J0eThwhSmVSiYtZOXFXGk3l2__5a62sX1G7gpg3zA0c1_d9uHHsm_nZ8rYPXabtO2Mg_YHH-XC80ePIZaX-Q8FGrAr8bEYuOjdGh6d_fXzrLsSbjqaJMTWxDjStWz1JzMmOcW5T9MN0s8uuzqrxas1c9WuawJ7pdItHURG4daK5tf-ZmwX9mZX8dIvJugBXF_lUc2rJozvsoLtN8KtqUueYKHsExSNWe1YL5F2BtsIzmM0HCl0Anj6oCQBYyTiGQbq"
            />
          </div>
        </motion.div>
        
        {/* Wide Secondary Card */}
        <motion.div variants={itemVariants} className="md:col-span-8 bg-primary text-on-primary p-20 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#9D8456_0%,_transparent_70%)]"></div>
          </div>
          <p className="font-label text-[10px] uppercase tracking-[0.5em] mb-12 text-secondary">Exclusividad</p>
          <h3 className="font-headline text-5xl md:text-6xl italic font-light mb-12 max-w-2xl leading-tight">"La elegancia es la única belleza que nunca se desvanece."</h3>
          <div className="flex items-center gap-6">
            <span className="h-[1px] w-8 bg-secondary"></span>
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary">Audrey Hepburn</span>
            <span className="h-[1px] w-8 bg-secondary"></span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Collections
