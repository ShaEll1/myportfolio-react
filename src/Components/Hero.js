import "./Hero.css";
import IntroImg from "../Assets/photo 4.jpg"
import React, { useState } from 'react';

import {Link} from "react-router-dom";
import { Document, Page } from 'react-pdf';

function Hero() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  return (
    <div className="hero">
        <div className="mask"> </div>
            <img className="into-img" src={IntroImg} alt ="Intro Image"/>

        <div className="content1">
          <h3>Hello, My name is Shasthri, </h3>
          <p>I'm a versatile person. 
          I Create amazing things.</p>

        </div>
        <div className="content">
          
        
            <h3>A bit about me:  </h3>
             <p> I'm a  ambitious and creative individual with strong social skills,
               consistently bringing out the best in every situation. 
               Committed to delivering top-notch performance, 
               I thrive in dynamic environments, approaching challenges
                with a positive mindset. My creativity and interpersonal 
                strengths contribute effectively to collaborative projects, 
                fostering a positive work atmosphere. Eager to learn and grow,
                 I'm a valuable asset in any professional setting.</p>
            
                 <div className="button-container">
                <Link to="/project" className=" btn-light">Projects</Link>
                <Link to="/experience" className=" btn-light">Experience</Link>
                <a href={process.env.PUBLIC_URL + '/cv.pdf'} target="_blank" rel="noopener noreferrer" className="btn-light">
                Resume
              </a>
    
  </div>
</div>




    </div>
  )
}

export default Hero;