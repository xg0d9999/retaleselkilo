import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-on-primary w-full py-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="font-headline text-3xl font-bold tracking-tighter">Retales <span className="italic font-light text-secondary">El Kilo</span></div>
        <div className="flex flex-wrap justify-center gap-12 font-label text-[9px] uppercase tracking-[0.4em]">
          <a className="text-on-primary/60 hover:text-secondary transition-colors" href="#">Aviso Legal</a>
          <a className="text-on-primary/60 hover:text-secondary transition-colors" href="#">Privacidad</a>
          <a className="text-on-primary/60 hover:text-secondary transition-colors" href="#">Envíos</a>
          <a className="text-on-primary/60 hover:text-secondary transition-colors" href="#">Instagram</a>
          <a className="text-on-primary/60 hover:text-secondary transition-colors" href="#">Pinterest</a>
        </div>
        <div className="text-on-primary/40 font-label text-[9px] uppercase tracking-[0.3em]">
          © 2024 Retales El Kilo. High-End Textile Curators.
        </div>
      </div>
    </footer>
  )
}

export default Footer
