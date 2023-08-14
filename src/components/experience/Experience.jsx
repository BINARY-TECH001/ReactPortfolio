
import './experience.css'
import html5 from "../../assets/tech/html.png"
import css3 from "../../assets/tech/css.png"
import Javascript from "../../assets/tech/javascript.png"
import Figma from "../../assets/tech/figma.png"
import react from "../../assets/tech/reactjs.png"
import node from "../../assets/tech/nodejs.png"
import docker from "../../assets/tech/docker.png"
import Git from "../../assets/tech/git.png"
import MongoDb from "../../assets/tech/mongodb.png"
import redux from "../../assets/tech/redux.png"
import tailwind from "../../assets/tech/tailwind.png"
import threejs from "../../assets/tech/threejs.svg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

const skillData = [
  {
    skill: "HTML5",
    img: html5,
  },
  {
    skill: "CSS3",
    img: css3,
  },
  {
    skill: "Javascript",
    img: Javascript,
  },
  {
    skill: "Figma",
    img: Figma,
  },
  {
    skill: "React.Js",
    img: react,
  },
  {
    skill: "Node.Js",
    img: node,
  },
  {
    skill: "Docker",
    img: docker,
  },
  {
    skill: "Git",
    img: Git,
  },
  {
    skill: "MongoDb",
    img: MongoDb,
  },
  {
    skill: "Redux",
    img: redux,
  },
  {
    skill: "TailwindCss",
    img: tailwind,
  },
  {
    skill: "Three.Js",
    img: threejs,
  },
]

const educationData = [
  {
    id: 1,
    cert: 'JSCE',
    sch: "Al-Iman Group Of Schools, Oyo",
    year: '2007 - 2012',
  },
  {
    id: 2,
    cert: 'SSCE',
    sch: "God' Blessing College, Oyo",
    year: '2012 - 2018',
  },
  {
    id: 3,
    cert: 'Software Tech Certified',
    sch: "NPOWER, Federal Republic Nigeria Empowerment",
    year: '2020 - 2021',
  },
  {
    id: 4,
    cert: 'ND, Computer Science',
    sch: "FCAH&PT Ibadan",
    year: '2020 - 2022',
  },
]

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up" data-aos-duration="3000">
      <h5> Skills I Have </h5>
      <h2> My Skills & Education </h2>
      <div class="underline"></div>

      <div className="container experience__container">
        <h4 className='intro'> I am an highly skilled and motivated individual wiith a strong background in the following technologies </h4>
        <div className="experience__frontend">

        <div className="experience__content">
          {
          skillData.map(({skill, img})=>{
            return(
              <article className="experience__details">
              <div className='techContainer'>
                <img className='tech__img' src={img} alt="Technology" />
              <p className="text">{skill}</p>
              </div>
            </article>
                   )
                  })
                }
                </div>
        </div>

        <div className="experience__Backend">
        <p className='eduTitle'> Education </p>
        <div className="underline"></div>
          <div className="experience__content2">
            {
              educationData.map(({ id, cert, sch, year })=>{
                return (
            <article className="experience__details" key={id}>
              <h5 className="cert"> {cert} </h5>
              <div className="schoolYear">
                <p> {sch} </p>
                <small className='year'> {year} </small>
              </div>
            </article>
                )
              })
            }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience