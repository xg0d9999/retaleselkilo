import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-outline/20">
      <div className="flex justify-between items-center px-8 md:px-16 py-8 w-full max-w-[1440px] mx-auto">
        <div className="text-3xl font-headline font-bold text-primary tracking-tighter">Retales El Kilo</div>
        <div className="hidden md:flex gap-16 items-center">
          <a className="text-primary border-b border-primary pb-1 font-label text-[10px] uppercase tracking-[0.3em]" href="#">Tejidos</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-500 font-label text-[10px] uppercase tracking-[0.3em]" href="#">Telas</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-500 font-label text-[10px] uppercase tracking-[0.3em]" href="#">Retales</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-500 font-label text-[10px] uppercase tracking-[0.3em]" href="#">Contacto</a>
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
