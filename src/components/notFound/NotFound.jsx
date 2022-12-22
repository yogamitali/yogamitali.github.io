import React from 'react'
import { Grid, Typography } from '@mui/material'


const NotFound = () => {
  return (
    <section id='notFound'>
      <Grid container>
        <Grid xs={12} md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant='h3' margin='0 8rem 2rem'>
            Something's not right.
          </Typography>
          <Typography margin='0 8rem 0.25rem'>
            The page you're looking for was not found. You seem to have lost your way, but don't worry. Sometimes, we all need a guide.
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <img src='images/404.svg' style={{height: '25rem'}} alt='404 page not found' />
        </Grid>
      </Grid>
    </section>
  )
}

export default NotFound