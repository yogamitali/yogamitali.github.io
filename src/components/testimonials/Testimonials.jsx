import React, { useState } from 'react'
import { Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import Contact from '../contact/Contact'
import './testimonials.css'


const Item = props => {
  return (
    <Card className='testimonial'>
      <CardContent>
        {props.item.video ? <CardMedia component='video' controls src={props.item.video} style={{ paddingBottom: '2rem' }} /> : ''}
        {props.item.comments ? <Typography variant='h6' className='comments'>{props.item.comments}</Typography> : ''}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          {props.item.img ? <Avatar src={props.item.img} alt={props.item.user} sx={{ height: '4rem', width: '4rem' }} /> : ''}
          <Typography variant='h6' className='user-name'>{props.item.user}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

const texts = [
  {
    user: 'Chhavi, USA',
    comments: 'I wanted yoga to help me in connecting with myself, to be more present in reality. Now when I look back before I joined you, I see so much changes in me now. Yes the body has changed tremendously, I feel so balanced and calm within my whole body. My body has become so light. But with all that, my mind, it has completely shifted. I feel connected with myself, more importantly I am more accepting of myself now.',
    img: '',
    video: ''
  },
  {
    user: 'Ashley, Toronto',
    comments: 'I started Maitreyee’s morning yoga class after struggling for almost a year with pain in my back, neck, shoulder, arm, all the way to my wrist. Through morning meditation and yoga, I  learned how to relax my body and mind. Learning to be present and my connection to my breath helped me navigate my world physically with more ease.',
    img: 'images/ashley.jpeg',
    video: ''
  },
  {
    user: 'Neeraj, Mumbai',
    comments: 'In February, 2022 I had a medullary stroke leading to hospitalization in icu for about a month. I couldn\'t eat, drink or swallow my saliva and had a riles tube in nose to feed me. Because of long duration of riles tube there was deviation in nasal passage and couldn\'t breathe properly. Maitreyeeji initiated the pranayam practice of different types and now it\'s much easier. Also, I had pain in my right arm, which was gone in 3 days. Her knowledge of yoga is brilliant.',
    img: '',
    video: ''
  }
]

const TextCarousel = props => {
  return (
    <>
      <Typography variant='h3' className='title'>
        Client Reviews
      </Typography>

      <Carousel indicators={false} navButtonsAlwaysVisible={true} autoPlay={false} className='texts-container' sx = {{ marginBottom: '0 !important' }}>
        { texts.map( (item, i) => <Item key={i} item={item} /> ) }
      </Carousel>
    </>
  )
}

const vids = [
  {
    user: 'Sindhujan, Toronto',
    comments: '',
    img: '',
    video: 'video/foot drop.mp4'
  },
  {
    user: 'Keiran, Toronto',
    comments: '',
    img: '',
    video: 'video/keiran canada.mp4'
  }
]

const Testimonials = () => {
  
  const [playing, setPlaying] = useState();
  
  return (
    <>
      <section id='testimonials'>
        <Typography variant='h3' className='title'>
          Client Reviews
        </Typography>

        <Carousel indicators={false} navButtonsAlwaysVisible={true} autoPlay={false} className='texts-container'>
          { texts.map( (item, i) => <Item key={i} item={item} /> ) }
        </Carousel>

        <Carousel indicators={false} navButtonsAlwaysVisible={true} autoPlay={false} className='vids-container'>
          { vids.map( (item, i) => <Item key={i} item={item} playing={playing} setPlaying={setPlaying} /> ) }
        </Carousel>

      </section>

      <Contact title = 'Join Us'/>
    </>

  )
}

export { TextCarousel, Testimonials }