import React from 'react'
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material'

import Contact from '../contact/Contact'
import './classes.css'


const Classes = () => {
  return (
    <>
      <section id='classes'>
        <div className='class'>
          <Typography variant='h3' className='title'>
            Classes
          </Typography>

          <Card className='class-card'>
            <CardContent>
              <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <div style={{ paddingBottom: '3rem' }}>
                    <Typography variant='h4'>
                      12:30 PM CET
                    </Typography>
                    <Typography variant='h4'>
                      Yoga for well-being
                    </Typography>
                  </div>
                  <Typography sx={{ padding: '0 2rem 0 0.5rem' }}>
                    Yoga for holistic growth. A small clip of demonstrating a pose is shown here. There are also instances of mantra chanting and therapeutic discussions.
                  </Typography>
                  <Typography sx={{ padding: '0.5rem 2rem 0 0.5rem' }}>
                    You will feel lighter and better at the end of each session :)
                  </Typography>
                </Grid>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <CardMedia component='video' controls src='video/demonstrating pose.mp4' />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className='class-card'>
            <CardContent>
              <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <div style={{ paddingBottom: '3rem' }}>
                    <Typography variant='h4'>
                      3:30 PM IST
                    </Typography>
                    <Typography variant='h4'>
                      Yoga for International citizens
                    </Typography>
                  </div>
                  <Typography sx={{ padding: '0 2rem 0 0.5rem' }}>
                    For our friends around the world. Currently we have participants from New Zealand, Australia and Canada.
                  </Typography>
                  <Typography sx={{ padding: '0.5rem 2rem 0 0.5rem' }}>
                    Hope to see you there too :)
                  </Typography>
                </Grid>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <CardMedia component='img' src='images/international.png' alt='Yoga students from New Zealand, Australia and Canada' style={{ padding: '1rem 0' }} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className='class-card'>
            <CardContent>
              <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <div style={{ paddingBottom: '3rem' }}>
                    <Typography variant='h4'>
                      Yoga for Women
                    </Typography>
                  </div>
                  <Typography sx={{ padding: '0 2rem 0 0.5rem' }}>
                    Women-only classes to empower its participants and grow physically, mentally and spiritually. A clip of Nadi Shuddhi Pranayama is shown here. 
                  </Typography>
                  <Typography sx={{ padding: '0.5rem 2rem 0 0.5rem' }}>
                    The focus group allows for women of all ages to come together.
                  </Typography>
                </Grid>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <CardMedia component='video' controls src='video/nadi shuddhi pranayama.mp4' />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className='class-card'>
            <CardContent>
              <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <div style={{ paddingBottom: '3rem' }}>
                    <Typography variant='h4'>
                      Yoga Therapy
                    </Typography>
                  </div>
                  <Typography sx={{ padding: '0 2rem 0 0.5rem' }}>
                    These classes are conducted in groups with common lifestyle diseases like Diabetes, Hypertension, PCOD and so on. One-to-one classes are conducted based on the disease, like Stroke, Alzheimer's etc.
                  </Typography>
                  <Typography sx={{ padding: '0.5rem 2rem 0 0.5rem' }}>
                    Significant improvements have been seen in patients suffering from dysphagia after brain stroke. Even in Alzheimer's, improvement in behaviour and reduction in the frequency of attacks have been noticed.
                  </Typography>
                  <Typography sx={{ padding: '0.5rem 2rem 0 0.5rem' }}>
                    The aim of Yoga Therapy is a holistic approach towards an individual, where the patient is not considered as a body but as a social, psychological, spiritual being.
                  </Typography>
                </Grid>
                <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                  <CardMedia component='img' src={'images/alzheimer\'s.jpeg'} style={{ marginBottom: '1rem' }} />
                  <CardMedia component='video' controls src='video/meditation.mp4'/>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

      </section>

      <Contact title='What are you looking for?' />
    </>
  )
}

export default Classes