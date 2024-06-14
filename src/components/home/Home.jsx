import React from 'react'
import { Carousel, Typography } from "@material-tailwind/react";

import { images } from '../../images'

import Classes from '../classes/Classes'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contact/Contact'


const Home = () => {
  
  return (
    <>

      <Carousel className="rounded-xl h-[calc(100vh-9rem)]" loop>
        {images.map((image, index) => (
        <div className="flex h-full w-full items-center bg-[radial-gradient(circle,rgba(255,255,255,1)_60%,rgba(237,234,229,1)_100%)]">
          <div className="flex h-full items-center text-center pl-16 ">
            <Typography
              variant="h5"
              className={index%2===0 ? "text-transparent": "text-[var(--color-primary)] italic"}
            >
              {image.description}
            </Typography>
          </div>
          <img key={index} src={image.original} alt={image.description} className="h-full w-full object-contain" />
          <div className="flex h-full items-center text-center pr-16 ">
            <Typography
              variant="h5"
              className={index%2===1 ? "text-transparent" : "text-[var(--color-primary)] italic"}
            >
              {image.description}
            </Typography>
          </div>
        </div>
        ))}
      </Carousel>

      <Classes />

      <Testimonials />

      <Contact />

    </>
  )
}

export default Home