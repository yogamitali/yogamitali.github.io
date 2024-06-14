import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import ReactTooltip from 'react-tooltip'

import './footer.css'


function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null)

  const copy = async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}

const Footer = () => {
  const [value, copy] = useCopyToClipboard()
  return (
    <section id='footer'>
      <Grid container className='footer-container'>
        <Grid xs={12} md={4} className='footer-logo'>
          <img src='images/logo.png' alt='Yogamitali Logo' />
        </Grid>
        <Grid xs={6} md={4} className='link-holder'>
          <Typography variant='h6'>
            Connect
          </Typography>
          <button data-tip data-for='copy-ph' className='link'>
            <i className='fa fa-phone fa-2x' aria-hidden='true'></i>
            <Typography>
              +91 99967 09419
            </Typography>
          </button>
          <ReactTooltip id='copy-ph' event='click' globalEventOff='focus' place='left' effect='solid' type='dark' delayHide={1000}
          afterShow={() => {
              copy('+919996709419')
              ReactTooltip.hide()
            }}>
            <Typography>
              Copied!
            </Typography>
          </ReactTooltip>

          <button data-tip data-for='copy-em' className='link'>
            <i className='fa fa-envelope fa-2x' aria-hidden='true'></i>
            <Typography>
              yogawithms@gmail.com
            </Typography>
          </button>
          <ReactTooltip id='copy-em' event='click' globalEventOff='focus' place='left' effect='solid' type='dark' delayHide={1000}
          afterShow={() => {
              copy('yogawithms@gmail.com')
              ReactTooltip.hide()
            }}>
            <Typography>
              Copied!
            </Typography>
          </ReactTooltip>
        </Grid>
        <Grid xs={6} md={4} className='link-holder'>
          <Typography variant='h6'>
            Follow
          </Typography>
          <a className='link' href='https://www.youtube.com/channel/UC9Hh-ujTPpln8eVQc0oVpmw' target='blank'>
            <i className='fa fa-youtube fa-2x' aria-hidden='true'></i>
            <Typography>
              Yoga Mitali
            </Typography>
          </a>
        </Grid>
      </Grid>
      <Typography textAlign='center'>© YogaMitali 2022. All Rights Reserved.</Typography>
      <Typography fontSize='0.75rem' textAlign='end' paddingRight='1rem'>
        Made with ❤ by <a href={'https://github.com/Awe42'} target='_blank' rel='noreferrer'>Awe42</a>
      </Typography>
    </section>
  )
}

export default Footer