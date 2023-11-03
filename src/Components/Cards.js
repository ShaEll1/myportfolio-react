
import poster from '../Assets/20231024_132830.jpg'
import poster2 from '../Assets/poster 2.webp'
import React from 'react';
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards-container">

       
        <div className="cards-border">
          <h3>Poster -ExitArt</h3>
          <span className="bar"></span>
          <img className="posterimg" src={poster} alt="Poster" />
          <p></p>
        </div>

        <div className="cards-border">
          <h3>Poster - Guitar Lessons</h3>
          <span className="bar"></span>
          <img className="posterimg" src={poster2} alt="Poster" />
          <p></p>
        </div>

        <div className="cards-border">
          <h3>Project 3</h3>
          <span className="bar"></span>
          <p></p>
          </div>
      </div>

       
      <div className="publications">
        <h3>Publications</h3>
        <div className="publication-item">
        <h3 className="hover-text">
          <a href="https://directory.eliterature.org/individual-work/2442" target="_blank" rel="noopener noreferrer">
              Grafik Dynomo
            </a>
            
            </h3> 
          <p>Exploring the intersection of art, technology, and storytelling, Grafik Dynamo stands as a captivating net artwork crafted 
            by Kate Armstrong and Michael Tippett. This dynamic triptych continuously pulls images from the realm of social media, displaying 
            them on a retro halftone blue background reminiscent of comic book aesthetics. The narrative unfolds nonlinearly through ever-shifting 
            images and enigmatic text, challenging the viewer to navigate a tapestry of unexpected juxtapositions. Created as part of a Language Studies
             course at Blekinge Institute of Technology, this insightful entry delves into the unique fusion of organic and technological elements that
              define Grafik Dynamo, offering a glimpse into the boundless possibilities of digital narrative and art.</p>
        </div>

        <div className="publication-item">
        <h3 className="hover-text">
          <a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A833038&dswid=-1119" target="_blank" rel="noopener noreferrer">
              Online News Distribution Methods and Changing Journalism Practices
            </a>
            
            </h3> 
          <p>My thesis explores how digital culture, particularly through social media and open data, has revolutionized the news industry. 
            I analyze the transformation of traditional news distribution in terms of flexibility, trustworthiness, authority, and the role of 
            journalists. Examining the impact of participatory and machine-made journalism, I question whether these new methods complement or displace 
            traditional practices. By studying reactions during key events like 9/11 and the Egyptian revolution, I demonstrate that technology has fundamentally
             altered the industry—reshaping the journalist's role, breaking down barriers between producers and consumers, and allowing real-time, 
             consumer-controlled news delivery. Moreover, I highlight the integration of artificial intelligence, showcasing how journalists use machines
              for instantaneous and unbiased reporting to meet evolving consumer needs.</p>

        </div>
      </div>
    </div>
  );
}



export default Cards;
