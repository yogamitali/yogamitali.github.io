import React, { useRef, useState } from 'react'
import { Typography, TextField, Button } from '@mui/material'
import emailjs from '@emailjs/browser';

import './contact.css'

const Contact = props => {
  
  const form = useRef();

  const initialFormValues = {
    user_name: '',
    user_email: '',
    message:''
  }

  const [values, setValues] = useState(initialFormValues);

  const [errors, setErrors] = useState({});

  const [sent, setSent] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }

    if ('user_name' in fieldValues)
      temp.user_name = fieldValues.user_name ? '' : 'This field is required.'

    if ('user_email' in fieldValues) {
      temp.user_email = fieldValues.user_email ? '' : 'This field is required.'
      if (fieldValues.user_email)
        temp.user_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.user_email)
          ? ''
          : 'Email is not valid.'
    }

    if ('message' in fieldValues)
      temp.message =
        fieldValues.message ? '' : 'This field is required.'

    setErrors({
      ...temp
    });
  }

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  }

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.user_name &&
      fieldValues.user_email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === '');

    return isValid;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          setSent(true);
          setValues(initialFormValues);
      }, (error) => {
          setSent(false);
          console.log(error.text);
      });
  };

  const inputFieldValues = [
    {
      name: 'user_name',
      label: 'Full Name',
      id: 'my-name'
    },
    {
      name: 'user_email',
      label: 'Email Address',
      id: 'my-email'
    },
    {
      name: 'message',
      label: 'Message',
      id: 'my-message',
      multiline: true,
      rows: 10
    }
  ];
  
  return (
    <section id='contact'>
      <Typography variant='h3' className='title'>
        {props.title ? props.title : 'Get in touch'}
      </Typography>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              onBlur={handleInputValue}
              onChange={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              multiline={inputFieldValue.multiline ?? false}
              rows={inputFieldValue.rows ?? 1}
              autoComplete='none'
              {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}
            />
          );
        })}
        <Button
          type='submit'
          disabled={!formIsValid()}
          sx={{ alignSelf: 'flex-start',
                padding: '0.75rem 1.2rem',
                color: 'white',
                backgroundColor: 'var(--color-primary)',
                '&:hover': {
                  color: 'var(--color-dark)',
                  backgroundColor: 'var(--color-light-alt)',
                } 
              }}
        >
          Send Message
        </Button>
        <Typography style={{color: 'var(--color-primary)', display: sent ? 'inline-block' : 'none'}}>
          Message Sent!
        </Typography>
      </form>
    </section>
  )
}

export default Contact