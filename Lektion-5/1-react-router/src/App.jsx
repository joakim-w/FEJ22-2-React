import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './Views/About'
import Home from './Views/Home'
import NotFound from './Views/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          {/* Shop */}
          {/* Details */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
