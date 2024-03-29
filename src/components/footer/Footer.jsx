import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer__logo'>BINARY.</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#services">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://facebook.com/mubarak.abdulrafiu.520"><FaFacebookF /></a>
        <a href="https://instagram.com/Binary_tech001"><FiInstagram /></a>
        <a href="https://twitter.com/BinaryTech001"><IoLogoTwitter /></a>
      </div>
      
        <div className="footer__copyright">
          <small>&copy; BINARY. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer