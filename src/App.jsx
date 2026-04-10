import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Benefits from './components/Benefits'
import ScheduleLocation from './components/ScheduleLocation'
import RegistrationForm from './components/RegistrationForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Benefits />
        <ScheduleLocation />
        <RegistrationForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
