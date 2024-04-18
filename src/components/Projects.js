import React from 'react'
import '../styles/project.css'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

function Projects() {

  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting) {
              entry.target.classList.add('show')
          } else {
              entry.target.classList.remove('show')
          }
      })
    })
  
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <div className='projectContainer' id='projects'>
      <div style={{width: '88%', margin: '0 auto'}}>
      <h2 className='heading'>
      {t('Project.title')}
      </h2>
      </div>
      <div className='projectWrapper'>
        <div className='project'>
          <div className='projectImg hidden'>
            <img src='Images/littlelemon.jpg' alt=''/>
          </div>
          <div className='projectInfo hidden'>
            <div className='projectPara'>
              <p>
              {t('Project1.description')}
              </p>
            </div>
            <div className='checkProject'>
              <div className='followLine'></div><a target='_blank" rel="noreferrer' href='https://github.com/Kedar37/Little-Lemon-Restaurant' className='githublink'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000"}} /></a>
              <button>
                <a target='_blank" rel="noreferrer'href='https://little-lemon-restaurant-teal.vercel.app/'>{t('Project.button')}</a>            
              </button>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='projectImg hidden'>
            <img src='Images/disney.jpg' alt=''/>
          </div>
          <div className='projectInfo hidden'>
            <div className='projectPara'>
              <p>
              {t('Project2.description')}
              </p>
            </div>
            <div className='checkProject'>
              <div className='followLine'></div><a target='_blank" rel="noreferrer' href='https://github.com/Kedar37/Disney-Clone-React-App' className='githublink'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000"}} /></a>
              <button>
              <a target='_blank" rel="noreferrer'href='https://disney-clone-bykedar.netlify.app/'>{t('Project.button')}</a> 
              </button>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='projectImg hidden'>
            <img src='Images/weather.jpg' alt=''/>
          </div>
          <div className='projectInfo hidden'>
            <div className='projectPara'>
              <p>
              {t('Project3.description')}
              </p>
            </div>
            <div className='checkProject'>
              <div className='followLine'></div><a target='_blank" rel="noreferrer' href='https://github.com/Kedar37/Weather-App' className='githublink'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000"}} /></a>
              <button>
              <a target='_blank" rel="noreferrer'href='https://weather-app-by-kg.netlify.app/'>{t('Project.button')}</a> 
              </button>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='projectImg hidden'>
            <img src='Images/todo.jpg' alt=''/>
          </div>
          <div className='projectInfo hidden'>
            <div className='projectPara'>
              <p>
              {t('Project4.description')}
              </p>
            </div>
            <div className='checkProject'>
              <div className='followLine'></div><a target='_blank" rel="noreferrer' href='https://github.com/Kedar37/Task-Planner-App' className='githublink'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000"}} /></a>
              <button>
              <a target='_blank" rel="noreferrer'href='https://taskplanner-kg.netlify.app/'>{t('Project.button')}</a> 
              </button>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='projectImg hidden'>
            <img src='Images/apato.jpg' alt=''/>
          </div>
          <div className='projectInfo hidden'>
            <div className='projectPara'>
              <p>
              {t('Project5.description')}
              </p>
            </div>
            <div className='checkProject'>
              <div className='followLine'></div><a target='_blank" rel="noreferrer' href='https://github.com/Kedar37/Apato-Project' className='githublink'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000"}} /></a>
              <button>
              <a target='_blank" rel="noreferrer'href='https://apato.netlify.app/'>{t('Project.button')}</a> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects