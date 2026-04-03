import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import History from './components/History'
import Showroom from './components/Showroom'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <History />
        <Showroom />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
