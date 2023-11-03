import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';




const Skills = () => {
  return (

    <div className="skills-container">
        <Navbar/>
        <div className="experience" style={{ paddingTop: '100px' }}>
        <h1 className="project-heading">Skills</h1>
      <div className="skill-category">
        <h3>Technical Skills</h3>
        <ul>
        <li>
              <div className="skill-item">
                <span>Adobe Photoshop</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>HTML & CSS</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>.Net</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>C#</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>React</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Java Script</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>SQL</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </li>
          
        </ul>
      </div>
      <div className="skill-category">
        <h3>Soft Skills</h3>
        <ul>
        <li>
              <div className="skill-item">
                <span>Communication</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Team Work</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Attention to Details</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Customer Service</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Critical Thinking</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Creative Problem-Solving</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </li>
          
        </ul>
      </div>
      <div className="skill-category">
        <h3>Other Skills</h3>
        <ul>
        <li>
              <div className="skill-item">
                <span>MS Office</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </li>
          
            <li>
              <div className="skill-item">
                <span>Digital Marketing</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Affiliate Marketing</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span>Administration</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </li>
            
         
        </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}



  

export default Skills;