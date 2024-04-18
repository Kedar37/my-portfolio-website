// Home.js
import React from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './styles/home.css';

function Home() {
  const { t, i18n } = useTranslation();

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className='navbar'>
        <div className='nav'>
          <div className='logo'>
            <img src='/Images/mylogo2.png' alt='logo' />
          </div>
          <div className='links'>
            <ul>
              <li onClick={() => scrollToComponent('about')}>{t('navbar.about')}</li>
              <li onClick={() => scrollToComponent('projects')}>{t('navbar.projects')}</li>
              <li onClick={() => scrollToComponent('contact')}>{t('navbar.contact')}</li>
            </ul>
          </div>
          <div className='lang'>
              <button className='eng' onClick={() => changeLanguage('en')}>
                Eng
              </button>
              <button className='jp' onClick={() => changeLanguage('ja')}>
                日本語
              </button>
            </div>         
        </div>
      </div>
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;