import "./Footer.css";

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";


function Footer() {
  return (

    <div className="footer">
      <div className="contact-info">
      <div className="location">
          <FaHome size={20} style={{color: "white", marginRight:"2rem"}}/>
          <div>
            <p>XXXXXXXXX</p>
            <p> Karlskrona</p>
          </div>
        </div>

        <div className="phone">
          
            <FaPhone size={20} style={{color: "white", marginRight:"2rem"}}/>
            <p>+46 - XX - XXX - XXXX</p>
          
        </div>

        <div className="email"> 
          <FaMailBulk size={20} style={{color: "white", marginRight:"2rem"}}/>
            <p>shasthriellegedara@gmail.com</p>
            
        </div>

      </div>
      

      
      <div className="social">
          <FaFacebook size={30} style={{color: "white", marginRight:"1rem"}}/>
          <a href="https://www.linkedin.com/in/shasthri-ellegedara-a8720b48/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{color: "white", marginRight:"1rem"}}/>
          </a>
          <a href="https://github.com/ShaEll1" target ="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{color: "white", marginRight:"1rem"}}/>
          </a>
        </div>

      </div>

     
  )
}

export default Footer