import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import page
import Home from './Page/Home'
import Contact from './Page/Contact'


function App() {

  return (
    <>
      <a href="https://wa.me/6282158606679?text=Halo,%20saya%20ingin%20berkonsultasi%20hukum" target="_blank"
              className="fixed bottom-7 right-4 md:bottom-10 md:right-10 z-50 animate-bounce">
            <div className="flex gap-2 items-center">
                <p className="bg-white text-gray-800 shadow-md px-4 py-2 rounded-xl font-semibold">Konsultasi Gratis</p>
                <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14"/>
            </div>
        </a>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
