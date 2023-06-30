
import './services.css'
import { FaConnectdevelop } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { MdDevicesOther } from 'react-icons/md'
import { FaPencilRuler } from 'react-icons/fa'
import { MdGraphicEq } from 'react-icons/md'
import { CiMobile1 } from 'react-icons/ci'


const data = [
  {
    id: 1,
    Icon: FaConnectdevelop,
    title: "Web Design",
    desc: "I have a passsion for creating visually appealing and user-friendly websites that meet the needs of my clients",
    color: "red"
  },
  {
    id: 2,
    Icon: FaCode,
    title: "Web Development",
    desc: "I have experience creating and maintaining websites for both personal and professional projects",
    color: "green"
  },
  {
    id: 3,
    Icon: MdDevicesOther,
    title: "Responsive Design",
    desc: "I am highly skilled in creating websites that adapt seamlessly to different devicesa and screen sizes",
    color: "blue"
  },
  {
    id: 4,
    Icon: FaPencilRuler,
    title: "UI/UX Design",
    desc: "I am passionate about creating intuitive and visually appealing digital experiences for users",
    color: "orange"
  },
  {
    id: 5,
    Icon: MdGraphicEq,
    title: "Graphics Design",
    desc: "I am a graphics designer, skilled in creating visually stunning designs for a variety of media",
    color: "purple"
  },
  {
    id: 6,
    Icon: CiMobile1,
    title: "Mobile App Design",
    desc: "I am specialize in creating intuitive and visually appealing interfacec for users to interact with",
    color: "teal"
    },
]

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container portfolio_container">
        {
          data.map(({id, Icon, title, desc, color})=>{
            return(
            <article className="portfolio_item" key={id}>
              <Icon className='icon' style={{color:color}}/>
              <h3 style={{color:color}}> {title} </h3>
              <span>{desc}</span>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services