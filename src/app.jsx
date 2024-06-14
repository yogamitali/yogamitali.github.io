import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './scrollToTop'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Classes from './components/classes/Classes'
import Testimonials from './components/testimonials/Testimonials'
import NotFound from './components/notFound/NotFound'

import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/classes' element={<Classes long={true} />} />
        <Route path='/testimonials' element={<Testimonials long={true} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App