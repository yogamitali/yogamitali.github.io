import React from 'react'
import { Link } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import { Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material'

import { TextCarousel } from '../testimonials/Testimonials'
import Contact from '../contact/Contact'
import './home.css';


const Home = () => {  
  const images = [
    {
      original: 'images/gallery/konark.jpeg',
      description: 'Be kind to yourself',
      originalAlt: 'Be kind to yourself',
      thumbnail: 'images/gallery/konark.jpeg'
    },
    {
      original: 'images/gallery/leg up.jpg',
      description: 'Learn to bow down, to rise up',
      originalAlt: 'Learn to bow down, to rise up',
      thumbnail: 'images/gallery/leg up.jpg'
    },
    {
      original: 'images/gallery/konark2.jpeg',
      description: 'Try to perform, perfection is not the goal',
      originalAlt: 'Try to perform, perfection is not the goal',
      thumbnail: 'images/gallery/konark2.jpeg'
    },
    {
      original: 'images/gallery/debu and joy.jpg',
      description: 'Let the child in you live',
      originalAlt: 'Let the child in you live',
      thumbnail: 'images/gallery/debu and joy.jpg'
    },
    {
      original: 'images/gallery/Chhavi from Canada in a classical Hatha Yoga pose.png',
      description: 'Samatvam (balance) is the key',
      originalAlt: 'Samatvam (balance) is the key',
      thumbnail: 'images/gallery/Chhavi from Canada in a classical Hatha Yoga pose.png'
    },
    {
      original: 'images/gallery/split.jpg',
      description: 'Flexibility is not about body, but mind',
      originalAlt: 'Flexibility is not about body, but mind',
      thumbnail: 'images/gallery/split.jpg'
    },
    {
      original: 'images/gallery/sutra neti.jpg',
      description: 'Yogic Kriya - Sutra Neti',
      originalAlt: 'Yogic Kriya - Sutra Neti',
      thumbnail: 'images/gallery/sutra neti.jpg'
    },
    {
      original: 'images/gallery/Atha Yogaanushasanam.jpg',
      description: 'Atha Yogaanushasanam',
      originalAlt: 'Atha Yogaanushasanam',
      thumbnail: 'images/gallery/Atha Yogaanushasanam.jpg'
    },
    {
      original: 'images/gallery/yoga for anxiety.png',
      description: 'Yoga for anxiety & stress management',
      originalAlt: 'Yoga for anxiety & stress management',
      thumbnail: 'images/gallery/yoga for anxiety.png'
    },
    {
      original: 'images/gallery/fly.jpg',
      description: 'Feel the lightness of being',
      originalAlt: 'Feel the lightness of being',
      thumbnail: 'images/gallery/fly.jpg'
    }
  ];
  
  return (
    <>

      <section id='gallery'>
        <ImageGallery items={images} showPlayButton={false} autoPlay={true} showIndex={true} slideInterval={10000} />
      </section>

      <section id='welcome'>
        <Typography variant='h3' className='title'>
          Welcome!
        </Typography>
        <Typography className='text'>
            <b>YogaMitali</b> is a private Yoga Centre which has been running around the Globe for more than 5 years. It is basically an Online Platform providing general Yoga classes in Groups, Individual, Therapy Classes to almost all age groups.
        </Typography>
        <Typography className='text'>
            The owner and the Instructor of YogaMitali is Mrs. <b>Maitreyee Sharma</b>, a Certified Yoga Instructor from a renowned Institute S-Vyasa, Bengaluru. She is also a certified Pre and Post Natal Yoga Instructor and a member of the Indian Yoga Association. She is presently in her final semester of M.Sc. Yoga from Tamil Nadu Physical Education and Sports University. She is also a certified Yoga Therapist under the Indian Yoga Association and Asian Yoga Therapy Association.
        </Typography>
        <Typography className='text'>
          Since the past 5 years, YogaMitali has been a friend to innumerable suffering Souls. Maitreyee has worked with people suffering from different variety of ailments - Cardiovascular problems, Brain Strokes, Neurological disorders like Muscular Sclerosis and Alzheimer’s, Foot Drop, Infertility issues, PCOD, Gastro-intestinal problems and so on. Her major area of work is with <b>Women</b> and <b>Elderly</b> population.
        </Typography>
        <Typography className='text'>
          Countries where YogaMitali caters to are New Zealand, Australia, Canada and India. She tries her best to follow the <b>“Classical School of Yoga”</b>. In the present world Yoga has entered into the Glamour Industry. Maitreyee continuously fights against this misappropriation of Yoga and shall continue working towards this aim.
        </Typography>
        <Link to={'/about'}>
          <Button
            sx={{ left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '2rem',
                  padding: '0.75rem 1.2rem',
                  color: 'white',
                  backgroundColor: 'var(--color-primary)',
                  '&:hover': {
                    color: 'var(--color-dark)',
                    backgroundColor: 'var(--color-light-alt)',
                  } 
                }}
          >
            Read More
          </Button>
        </Link>
      </section>

      <section id='classes'>
        <Typography variant='h3' className='title'>
          Classes
        </Typography>
        <Card className='class-card'>
          <CardContent>
            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
              <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                <div style={{ paddingBottom: '3rem' }}>
                  <Typography variant='h4'>
                    6:30 AM IST
                  </Typography>
                  <Typography variant='h4'>
                    Yoga for well-being
                  </Typography>
                </div>
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
              </Grid>
              <Grid xs={12} md={6} style={{ padding: '0 0.5rem' }}>
                <CardMedia component='img' src='images/international.png' style={{ padding: '1rem 0' }} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Link to={'/classes'}>
          <Button
            sx={{ left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.75rem 1.2rem',
                  color: 'white',
                  backgroundColor: 'var(--color-primary)',
                  '&:hover': {
                    color: 'var(--color-dark)',
                    backgroundColor: 'var(--color-light-alt)',
                  } 
                }}
          >
            More Info
          </Button>
        </Link>
      </section>

      <section id='testimonials'>
        <TextCarousel />
        <Link to={'/testimonials'}>
          <Button
            sx={{ left: '50%',
                  transform: 'translateX(-50%)',
                  margin: '3rem 0 4rem',
                  padding: '0.75rem 1.2rem',
                  color: 'white',
                  backgroundColor: 'var(--color-primary)',
                  '&:hover': {
                    color: 'var(--color-dark)',
                    backgroundColor: 'var(--color-light-alt)',
                  } 
                }}
          >
            See More
          </Button>
        </Link>
      </section>

      <Contact />

    </>
  )
}

export default Home