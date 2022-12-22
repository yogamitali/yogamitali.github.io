import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './scrollToTop'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Classes from './components/classes/Classes'
import { Testimonials } from './components/testimonials/Testimonials'
import NotFound from './components/notFound/NotFound'
import Footer from './components/footer/Footer'

import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App