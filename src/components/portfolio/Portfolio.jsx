import React from 'react'
import './portfolio.css'
import Img1 from "../../assets/MinuteApp.PNG"
import Img2 from "../../assets/Home.JPG"
import Img3 from "../../assets/wages.PNG"
import Img4 from "../../assets/dashboard.PNG"
import Img5 from "../../assets/Crime.PNG"
import Img6 from "../../assets/IgClone.JPG"
import blog from "../../assets/blog.JPG"
import pharm from '../../assets/pharm.JPG'
import Github from '../../assets/GithubSearch.JPG'
import wordle from '../../assets/wordle.JPG'


const data = [
  {
    id: 1,
    img: Img1,
    title: "Meeting Minutes Management System",
    github: "https://github.com/MinuteApp",
    desc: "A web application for taking meetingss minutes by recording the meeting audio and video and transcribing meeting audio text to generate meeting minutes. It also helps in keeping, retrieving and managing meeting minutes.",
    demo: "#"
  },
  {
    id: 2,
    img: Img2,
    title: "Binary Social Media Application UI",
    github: "https://github.com/BINARY-TECH001/SocialMedia-UI",
    desc: "A Web Social media User Interface designed using React.Js. It contains the authentication pages (Login & Register), Story/Home page, comment, like, post and profile page.",
    demo: "#"
  },
  {
    id: 3,
    img: Img3,
    title: "Employees wages Calculator & Report",
    github: "https://github.com//BINARY-TECH001/",
    desc: "A web based application designed using PHP that helps manage employee wages and calculations.",
    demo: "#"
  },
  {
    id: 4,
    img: Img4,
    title: "Meeting Minutes Management System Dashboard",
    github: "https://github.com/BINARY-TECH001/MinuteApp",
    desc: "A dashboard designed using PHP to manage the Meeting Minutes management system. Written in PHP and Js.",
    demo: "#"
  },
  {
    id: 5,
    img: Img5,
    title: "FRSC Crime Reporting System",
    github: "https://github.com/BINARY-TECH001/Crime-Report",
    desc: "A web bssed crime reporting system designed using PHP, MYSQL, Javascript for reporting crimes and manging crimes data.",
    demo: "#"
  },
  {
    id: 6,
    img: Img6,
    title: "Instagram Page Clone Using React & Dexie",
    github: "https://github.com/BINARY-TECH001/ig-clone/",
    desc: "Cloned the Instagram profile page using React.Js and the Dexie for storage.",
    demo: "https://binarytech-IgClone.netlify.app"
  },
  {
    id: 7,
    img: blog,
    title: "Binary Blog Site",
    github: "https://github.com/BINARY-TECH001/BINARY-BLOG",
    desc: "Blog site desiigned using React.Js. It contains 5+ pages including authentication System, Comment, Posting Features and lots more.",
    demo: "#"
  },
  {
    id: 8,
    img: pharm,
    title: "Al-Miskeen Pharmacy Management System",
    github: "https://github.com/BINARY-TECH001/PharmacyDashboard",
    desc: "A web Application built with PHP, Javascript & Bootstrap for Al-Miskeen Pharmacy for mangaing their store. It contains over 10 pages including Authhentication.",
    demo: "#"
  },
  {
    id: 9,
    img: wordle,
    title: "Wordle Game",
    github: "https://github.com/BINARY-TECH001/",
    desc: "Cloning of web-based word guessing game that allow users to guess a word five times and show different colors to show if its correct, or the letter is there and wrong placed or the word is totally incorrect with a cool modal after five times try that tells whether ypu're right or correc.",
    demo: "#"
  },
  {
    id: 8,
    img: Github,
    title: "Github Uaer Search",
    github: "https://github.com/BINARY-TECH001/React-GithubUser",
    desc:  "Web application that enables users to search for github users, view their followers, gist, repositories and also folow them on github.",
    demo: "#"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>
      <div class="underline"></div>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo, desc})=>{
            return(
          <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={img} alt={title} />
          </div>
          <h3> {title} </h3>
          <p className='porfolio__desc'> {desc}</p>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio