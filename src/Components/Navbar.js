import "./Navbar.css";
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);


    const[color,setColor]= useState(false);
    const changeColor = ()=> {
        if (window.scrollY >=100){
            setColor(true);
        
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);


  return (
    <div className={color ?"header header-bg" : "header"}>
        <Link to="/">
        <h2>Shasthri Ellegedara</h2>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu" }>
        
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/project">Projects</Link>
            </li>
            <li>
                <Link to ="/experience">Experience</Link>
            </li>
            <li>
                <Link to ="/skills">Skills</Link>
            </li>
           
            <li>
            <a href={process.env.PUBLIC_URL + '/cv.pdf'} target="_blank" rel="noopener noreferrer" >
                Resume
              </a>
            </li>
            <li>
            <a href="https://shelwork.wordpress.com/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
            </li>
        
        </ul>
        <div className="hamburger" onClick= {handleClick}> 
        {click ? (
            <FaTimes size={20} style={{color:"white"}}/>
        ) : (
            
            <FaBars size={20} style={{color:"white"}}/>
        )}
        </div>

    </div>
  )
}

export default Navbar