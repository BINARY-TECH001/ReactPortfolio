import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
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

const data = [
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

const Experience = () => {
  return (
    <section id="experience">
      <h5> Skills I Have </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">

        <h3> Technologies </h3>
        <div className="experience__content">
          {
          data.map(({skill, img})=>{
            return(
              <article className="experience__details">
              <div>
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
        <h3> Education </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4> MongoDB </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4> PHP </h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>MYSQl </h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience