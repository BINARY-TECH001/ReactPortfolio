import React from 'react'
import './about.css'
import ME from '../../assets/crop.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import CV from '../../assets/cv.pdf'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div class="underline"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Abdulrafiu Mubarak" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small> 10+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects </h5>
              <small> 20+ Completed </small>
            </article>
          </div>
          <p>Hello👋. This is Abdulrafiu Mubarak Ishola.
         <p>  I'm a skilled software developer with experience in Javascript and expertise in frameworks like React, Node.js and Express.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, user-friendly solutions that solve real-world problems. I love being part of a solution driven tech community. I love to teach others about web development and I've made a lot of projects with multiple web technologies.</p>
          </p>

          {/* <a href="#contact" className='btn btn-primary'> Let's Talk </a> */}
          <div className='aboutCta'>
            <a href={CV} download className='btn'> Download CV </a>
            <a href="#contact" className='btn btn-primary'> Let's Talk </a>
         </div>
        </div>
      </div>
    </section>
  )
}

export default about