import React, {useRef, useEffect} from 'react'
import '../styles/intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';

function Intro() {

  const { t } = useTranslation();

  const secTextRef = useRef(null);

  useEffect(() => {
    const text = secTextRef.current;

    const textload = () => {
      setTimeout(() => {
        text.textContent = t('intro.subRole1');
      }, 0);
      setTimeout(() => {
        text.textContent = t('intro.subRole2');
      }, 4000);
      setTimeout(() => {
        text.textContent = t('intro.subRole3');
      }, 8000);
      setInterval(textload, 12000);
    };

    textload();
  }, [t]);

  return (
    <div className='introContainer'>
      <div className='leftContent'>
        <div className='shape'>
          <img src='/Images/shape-01.png' alt=''/>
        </div>
        <h2 className='title'>
          {t('intro.greeting')}
          <br></br>
          {t('intro.name')}
        </h2>     
        <div className='myImg'>
          <img src='/Images/my img.jpg' alt='myimg'/>
        </div>
        <div className='gif'>
          <img src='/Images/arrow-down.gif' alt='arrow'/>
        </div>
      </div>
      <div className='rightContent'>
        <div className='snsLinks'>
          <a target='_blank' href='https://www.linkedin.com/in/kedar-gavali-a50359179?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#000000"}} /></a>
          <a target='_blank' href='https://github.com/Kedar37'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000"}} /></a>
          <a target='_blank' href='https://www.behance.net/kedargavali'><FontAwesomeIcon icon={faBehance} size="2xl" style={{color: "#000000"}} /></a>
        </div>
        <div className='introPara'>
          <p>
          {t('intro.description')}
          </p>
        </div>
        <div class="titleWrapper">
          <span className='text first-text'>
          {t('intro.role')}
          </span>
          <br></br>
          <span className='text sec-text' ref={secTextRef}>
          {t('intro.subRole')}
          </span>
        </div> 
      </div>
    </div>
  )
}

export default Intro