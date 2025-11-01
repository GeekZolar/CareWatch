import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import InformationHub from './pages/InformationHub'
import MedicalTests from './pages/MedicalTests'
import Equipment from './pages/Equipment'
import MedicalSpecialists from './pages/MedicalSpecialists'
import AccessibilityEquipment from './pages/AccessibilityEquipment'
import Diet from './pages/Diet'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information-hub" element={<InformationHub />} />
            <Route path="/medical-tests" element={<MedicalTests />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/medical-specialists" element={<MedicalSpecialists />} />
            <Route path="/accessibility-equipment" element={<AccessibilityEquipment />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

