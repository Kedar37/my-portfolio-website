import React, { useState } from 'react';
import '../styles/about.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  const [pdfUrl, setPdfUrl] = useState(null);

  const fetchPdfFile = async () => {
    try {
      const response = await fetch('/履歴書.pdf');
      const blob = await response.blob();
      const pdfFileUrl = URL.createObjectURL(blob);
      setPdfUrl(pdfFileUrl);
      window.open(pdfFileUrl, '_blank');
    } catch (error) {
      console.error('Error fetching PDF file:', error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <div className='aboutContainer' id='about'>
      <div className='shape2 hidden'>
        <img src='/Images/shape2.png' alt='shape' />
      </div>
      <div className='aboutWrapper'>
        <div className='aboutLeft'>
          <h2 className='aboutTitle hidden'>
          {t('About.title')}
          </h2>
          <div className='myImages hidden'>
            <img src='/Images/3d4.png' alt='illustration' />
          </div>
        </div>
        <div className='aboutRight'>
          <div className='aboutPara hidden'>
            <p>
            {t('About.description')}
            </p>
          </div>
          <div className='btnWrap hidden'>
            <div className='line'></div>
            <div className='resume'>
              <button onClick={fetchPdfFile}>
              {t('About.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;