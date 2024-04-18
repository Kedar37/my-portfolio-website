import React, { useRef, useState } from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const form = useRef();
 
  const sendEmail = () => {
    emailjs
      .sendForm('service_7efgmup', 'template_2twgyuq', form.current, {publicKey: 'NN2Ee6A3p1XWKVle0',})
      .then(
        () => {
          console.log('Contact message sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({ name: '', email: '', message: '' });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    sendEmail();
    alert("Thank you for contacting me! I'll get back to you in short!")
  }


  return (
    <div className='contactContainer' id='contact'>
      <div className='contactForm'>
        <h2 className='contactHead'>
        {t('Contact.title')}
        </h2>
        <form ref={form} onSubmit={formSubmit}>
          <div className='field'>
            <label htmlFor='name'>
            {t('Contact.name')}
            </label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
            {formErrors.name && <span className='error'>{formErrors.name}</span>}
          </div>
          <div className='field'>
            <label htmlFor='email'>
            {t('Contact.email')}
            </label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
            {formErrors.email && <span className='error'>{formErrors.email}</span>}
          </div>
          <div className='textfield'>
            <label htmlFor='message'>
            {t('Contact.message')}
            </label>
            <textarea name='message' id='message' value={formData.message} onChange={handleChange} required></textarea>
            {formErrors.message && <span className='error'>{formErrors.message}</span>}
          </div>
          <div className='buttonwrap'>
            <div className='followline'></div>
            <div className='submitBtn'>
              <button type='submit'>
              {t('Contact.button')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;