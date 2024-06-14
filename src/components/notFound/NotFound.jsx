import React from 'react'
import { Typography } from "@material-tailwind/react"


const NotFound = () => {
  return (
    <section id='notFound'>
      <div className='flex flex-col lg:flex-row justify-center mx-12 lg:mx-24'>
        <div className='flex flex-col justify-center'>
          <Typography variant='h3' className='mb-4 lg:mb-8'>
            Something's not right.
          </Typography>
          <Typography className=''>
            The page you're looking for was not found. You seem to have lost your way, but don't worry. Sometimes, we all need a guide.
          </Typography>
        </div>
        <div className='ml-8 lg:ml-16'>
          <img src='images/404.svg' className='max-h-[25rem]' alt='404 page not found' />
        </div>
      </div>
    </section>
  )
}

export default NotFound