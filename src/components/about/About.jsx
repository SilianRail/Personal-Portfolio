import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Courses: CMPT276, Projects</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
            I am a second year Computer Science student. My academic journey has been a rich source of 
            knowledge and hands-on experience, fully equipping me with the technical proficiency required for the role.
            My robust foundation in web development fundamentals,
            includig HTML, JavaScript, CSS, and AJAX, has been honed through the creation of two functional websites.
            Notably, my most recent project, akin to 'Stack Overflow,' presented intricate challenges that I skillfully
            navigated. This experience has fortified my debugging skills and adaptability, ensuring that I can excel both
            independently and as a collaborative team member. In terms of back-end technologies, I have diligently pursued
            online courses and actively engaged with JavaScript frameworks like Angular5 and database technologies such
            as MySQL. I have applied these concepts to my personal websites to perform search and store operations on the
            information stored. These experiences have uniquely prepared me to tackle the multifaceted challenges of web
            development effectively.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About