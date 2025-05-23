import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import page
import Home from './Page/Home'
import About from './Page/About'
import ServicesPage from './Page/ServicesPage'
import Contact from './Page/Contact'


function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/layanan" element={<ServicesPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
