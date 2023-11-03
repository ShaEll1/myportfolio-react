import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import {FaBriefcase} from 'react-icons/fa'
import "./Experience.css";


function Experience() {
  return (
    <div className="experience-container">
      <Navbar />
      <div className="experience" style={{ paddingTop: '100px' }}>
        <VerticalTimeline lineColor="black"> 
    
      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2008"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
        Institute of Bankers of Sri Lanka &
        IFS School of Finance UK </h3>
          <p className='custom-timeline-element'>Certificate in Banking and Finance</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2005-2010"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
          Commercial Bank of Ceylon Plc </h3>
          <p className='custom-timeline-element'>Junior Executive - Banking</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2013"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
          Umeå University </h3>
          <p className='custom-timeline-element'>Web Designing Basics</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2014"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
          Blekinge Institute of Technology </h3>
          <p className='custom-timeline-element'>Bachelors in digital culture and communication</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education c"
      date="2017"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
         Stockholms University </h3>
          <p className='custom-timeline-element'>Masters in System Sciences</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2017"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
         Komvux Karlskrona </h3>
          <p className='custom-timeline-element'>Health and Social Care Programme (Vård och Omsorg)</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2017-2019"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
        Äldreförvaltningen- Karlskrona Kommun </h3>
          <p className='custom-timeline-element'>Nursing Assistant</p>
      </VerticalTimelineElement>

     

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2021-2021"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
          ArbetsFörmedlingen </h3>
          <p className='custom-timeline-element'>Employment Officer</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2022"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
        University of Skövde </h3>
          <p className='custom-timeline-element'>Introduction to Digital Marketing </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element-education "
      date="2023"
      iconStyle={{background: "black", color:"gray"}}
      icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title custom-timeline-element">
          Lexicon Malmö </h3>
          <p className='custom-timeline-element'>. NET Full Stack</p>
      </VerticalTimelineElement>

      
      </VerticalTimeline>
     
      <Footer />
    </div>
    </div>
  )
}

export default Experience;