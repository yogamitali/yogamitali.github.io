import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { Grid, Typography, Button } from '@mui/material'
import ReactTooltip from 'react-tooltip'

import Contact from '../contact/Contact'
import './about.css'


const About = () => {
  const images = [
    {
      original: 'images/certificates/receive2.jpeg',
      description: 'Receiving the Yoga Instructor Course certificate',
      originalAlt: 'Receiving the Yoga Instructor Course certificate'
    },
    {
      original: 'images/certificates/receive1.jpg',
      description: 'Pre-natal and post-natal yoga certification',
      originalAlt: 'Pre-natal and post-natal yoga certification'
    },
    {
      original: 'images/certificates/cert7.jpg',
      description: 'Member of Indian Yoga Association',
      originalAlt: 'Member of Indian Yoga Association'
    },
    {
      original: 'images/certificates/cert5.png'
    },
    {
      original: 'images/certificates/cert6.png'
    },
    {
      original: 'images/certificates/cert4.png'
    },
    {
      original: 'images/certificates/cert3.png'
    },
    {
      original: 'images/certificates/cert2.png'
    },
    {
      original: 'images/certificates/cert1.png'
    }
  ]

  const [isOpen, setIsOpen] = useState(0);

  return (
    <section id='about'>
      
      <div className='welcome-about'>
        <Typography variant='h3' className='title'>
          About YogaMitali
        </Typography>
        <Typography className='text'>
            <b>YogaMitali</b> is a private Yoga Centre which has been running around the Globe for more than 6 years. It is an Online Platform providing general Yoga classes and Therapy classes in Groups to almost all ages.
        </Typography>
        <Typography className='text'>
            The owner of YogaMitali is Mrs. <b>Maitreyee Sharma</b>. She holds 3 post graduate degrees in English, Educational Management and Yogic Scences. She is a Certified Yoga Instructor from the renowned Institute S-Vyasa, Bengaluru, India. She is also a certified Pre and Post Natal Yoga Instructor and a Life Time member of the Indian Yoga Association. She is also a certified Yoga Therapist and also a member of Asian Yoga Therapy Association.
        </Typography>
        <Typography className='text'>
          Since the past 6 years, YogaMitali has been a friend to innumerable suffering Souls. Maitreyee has worked with people suffering from different variety of ailments - Cardiovascular problems, Brain Strokes, Neurological disorders like Muscular Sclerosis and Alzheimer’s, Foot Drop, Infertility issues, PCOD, Gastro-intestinal problems and so on. Her major area of work is with <b>Women</b>.
        </Typography>
        <Typography className='text'>
          Countries where YogaMitali caters to are New Zealand, Australia, Canada, India and Europe. She tries her best to follow the <b>“Classical School of Yoga”</b>. In the present world Yoga has entered into the Glamour Industry. Maitreyee continuously fights against this misappropriation of Yoga and shall continue working towards this aim.
        </Typography>
      </div>

      <Grid container className='instructor-grid'>
        <Grid xs={12} md={6}>
          <img src='images/hero.png' className='hero-img' alt={'YogaMitali instructor Maitreyee Sharma'} />
        </Grid>
        <Grid xs={12} md={6} className='hero-caption'>
          <Typography variant='h3' className='title'>
            From the Instructor's Mouth
          </Typography>
          <Typography className='text'>
            My acquaintance with Yoga started when I was in complete misaligned state of body and mind. I was diagnosed with hormonal issues, gastrointestinal problems, acute back pain and migraine. I had gone through many alternative therapies and finally resorted to Yoga. After coming to Yoga, what I realised is my Body started listening to the Mind and my Breath. This is what Yoga is all about – <i>“Yujyate anena iti Yogah”</i> (Yoga is that which joins).
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='philosophy-grid'>
        <Grid xs={12} style={{ margin: '0 auto 2rem' }}>
          <Typography variant='h3' className='title'>
            My Philosophy
          </Typography>
          <Typography className='text'>
            Like me there are thousands who are disconnected from their breath and mind. My idea is to help individuals to get connected to their origin and go beyond their pains. For me Yoga is not about ‘doing’ Asanas, but ‘being’ in Asanas. I generally follow the ‘Patanjala School of Yoga’ but believe in Swami Vivekananda’s Four Schools Of Yoga – Raja, Jnana, Bhakti and Karma Yoga because all these schools lead to the same path – attaining bliss in physical, social and psychological planes.
          </Typography>
        </Grid>

        <Grid xs={6} md={3} className='philosophy-btn-container'>
          <Button data-tip data-for='raja' className='philosophy-btn'>
            <img src='images/raja.png' alt='Raja Yoga'/>
            <Typography variant='h5' className='caption'>
              Raja Yoga
            </Typography>
          </Button>
          <ReactTooltip id='raja' event='click' globalEventOff='click' place='bottom' effect='solid' multiline clickable textColor='var(--color-dark)' backgroundColor='var(--color-light-alt)' arrowColor='var(--color-primary)' className='phil-tooltip' afterShow={() => setIsOpen(isOpen + 1)} afterHide={() => setIsOpen(isOpen - 1)}>
            <Typography>
              At Yoga Mitali, we follow the Asanas, Mudras, Bandhas, Meditation for holistic development of an individual. Asanas are preceded by Breathing techniques and loosening practices too.
            </Typography>
          </ReactTooltip>
        </Grid>

        <Grid xs={6} md={3} className='philosophy-btn-container'>
          <Button data-tip data-for='jnana' className='philosophy-btn'>
            <img src='images/jnana.png' alt='Jnana Yoga'/>
            <Typography variant='h5' className='caption'>
              Jnana Yoga
            </Typography>
          </Button>
          <ReactTooltip id='jnana' event='click' globalEventOff='click' place='bottom' effect='solid' multiline clickable textColor='var(--color-dark)' backgroundColor='var(--color-light-alt)' arrowColor='var(--color-primary)' className='phil-tooltip' afterShow={() => setIsOpen(isOpen + 1)} afterHide={() => setIsOpen(isOpen - 1)}>
            <Typography>
              As Swamiji said, Jnana is the knowledge of the highest kind. He did not mean the degrees or credentials we acquire academically but the Knowledge of the Consciousness, the Advaita, the real Self which can be gained through Satsanga, Spiritual discourses and Counselling. Here, at Yoga Mitali all these are done once a month. Counselling sessions are taken up according to the need.
            </Typography>
          </ReactTooltip>
        </Grid>

        <Grid xs={6} md={3} className='philosophy-btn-container'>
          <Button data-tip data-for='bhakti' className='philosophy-btn'>
            <img src='images/bhakti.png' alt='Bhakti Yoga'/>
            <Typography variant='h5' className='caption'>
              Bhakti Yoga
            </Typography>
          </Button>
          <ReactTooltip id='bhakti' event='click' globalEventOff='click' place='bottom' effect='solid' multiline clickable textColor='var(--color-dark)' backgroundColor='var(--color-light-alt)' arrowColor='var(--color-primary)' className='phil-tooltip' afterShow={() => setIsOpen(isOpen + 1)} afterHide={() => setIsOpen(isOpen - 1)}>
            <Typography>
              Sessions at Yoga Mitali starts with Prayers from the Vedas and the Upanishads because unless the mind, body and breath synchronise, one can never reap the benefits of Yoga. Moreover Mantra Chantings are a part of the sessions everyday with Bhajans and kirtans too.
            </Typography>
          </ReactTooltip>
        </Grid>

        <Grid xs={6} md={3} className='philosophy-btn-container'>
          <Button data-tip data-for='karma' className='philosophy-btn'>
            <img src='images/karma.png' alt='Karma Yoga' style={{borderRadius: '50%'}}/>
            <Typography variant='h5' className='caption'>
              Karma Yoga
            </Typography>
          </Button>
          <ReactTooltip id='karma' event='click' globalEventOff='click' place='bottom' effect='solid' multiline clickable textColor='var(--color-dark)' backgroundColor='var(--color-light-alt)' arrowColor='var(--color-primary)' className='phil-tooltip' afterShow={() => setIsOpen(isOpen + 1)} afterHide={() => setIsOpen(isOpen - 1)}>
            <Typography>
              ‘Nishkama Karma’ is what Shri Krishna says in Bhagvad Gita. Unattached actions are the most difficult to perform, but a regular Yoga practice with following all the above fields truly teaches one to practice unattached actions.
            </Typography>
          </ReactTooltip>
        </Grid>
      </Grid>
      
      <div className={isOpen === 0 ? 'cert-gallery' : 'cert-gallery open'}>
        <Typography variant='h3' className='title'>
          My Certifications
        </Typography>
        <ImageGallery items={images} showPlayButton={false} autoPlay showIndex slideInterval={10000} showFullscreenButton={false} />
      </div>

      <Contact title='Drop me a Hello!' />

    </section>
  )
}

export default About