import React, { useState, useEffect } from 'react'; // Importing useState and useEffect
import './About.css'; // Assuming you have specific styling for your home page

import reactLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/react.jpg';
import cssLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/css.png';
import javaLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/java.png';
import pythonLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/python.png';;
import sqlLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/SQL.png';
import linuxLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/Linux.jpg';
import nodeJs from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/node.jpg';
import nextJs from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/next.jpg';
import tailWind from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/tailwind.jpg';
import msServer from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/mssql.jpg';
import pandasLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/pandas.jpg';
import tensorFlow from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/tensorflow.jpg';
import numpyLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/numpy.jpg';
import agileLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/agile.jpg';
import gitLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/git.jpg';
import figmaLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/figma.jpg';
import intelLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/intelij.jpg';
import pycharmLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/pycharm.jpg';
import vsLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/vscode.jpg';
import unityLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/unity.jpg';
import blenderLogo from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/blender.jpg';
import selfie from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/me.png';


function About() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.about, .skills, .projects');

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const triggerPosition = window.innerHeight - 200;

        if (sectionTop < triggerPosition && sectionBottom > 0) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <h3 className="page-title">Ariana Morace</h3> 
      <header>
        <div className="top">
          <h1>Hi, I'm Ariana! </h1>
          <p style={{ fontSize: '30px', fontWeight: 'bold'  }}> Join me in my journey of software development </p>
        </div>
      </header>

      <div className="profile-pic">
      <img src={selfie} style={{ width: '250px', height: '250px', borderRadius: '50%' }} />

      </div>

      <section id="about" className={`about ${activeSection === 'about' ? 'active' : ''}`}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>Let's Break the Ice</h2>
        <p style={{ fontFamily: 'Inter', fontSize: '18px' }}>
      The blend of art and technology has always caught my eye. Software development enabled me to channel my creative outlet. From something as simple as writing code to distinguish even and odd numbers, to something as complex as designing a matrix, creativity is a need in being a good developer. A good developer is a good problem solver who is able to develop multiple approaches to one solution. Creativity shines through a good developer by crafting numerous methods to tackle challenges.
    </p>
        <p style={{  fontFamily: 'Inter', fontSize: '18px' }}>
          What I really enjoy about software development is how it makes life easier for people. By creating software, we make technology better and more helpful in everyday life.
        </p>
      </section>

      <section id="skills" className={`skills ${activeSection === 'skills' ? 'active' : ''}`}>
        <h2 style={{ fontSize: '35px' }}>Languages</h2>
        <div className="skill-icons">
  
          <img src={cssLogo} alt="CSS" />
          <img src={javaLogo} alt="Java" />
          <img src={pythonLogo} alt="Python" />
          <img src={sqlLogo} alt="SQL" />
          <img src={linuxLogo} alt="Linux" />
          {/* Add more images for your skills */}
        </div>
      </section>


      <section id="skills" className={`technologies ${activeSection === 'technologies' ? 'active' : ''}`}>
        <h2 style={{ fontSize: '35px' }}>Technologies</h2>
        <div className="skill-icons">
          <img src={reactLogo} alt="React" />
          <img src={nodeJs} alt="NodeJS" />
          <img src={nextJs} alt="nextJs" />
          <img src={tailWind} alt="tailwind" />
          <img src={msServer} alt="SQL" />
          <img src={pandasLogo} alt="pandas" />
          <img src={tensorFlow} alt="tensorFlow" />
          <img src={numpyLogo} alt="numpy" />

        </div>
      </section>



      <section id="skills" className={`tools ${activeSection === 'tools' ? 'active' : ''}`}>
        <h2 style={{ fontSize: '35px' }}>Tools</h2>
        <div className="skill-icons">
        <img src={agileLogo} alt="agile" />
          <img src={gitLogo} alt="git" />
          <img src={figmaLogo} alt="figma" />
          <img src={intelLogo} alt="intelij" />
          <img src={pycharmLogo} alt="pyCharm" />
          <img src={vsLogo} alt="vsCode" />
          <img src={blenderLogo} alt="blender" />
          <img src={unityLogo} alt="unity" />
          
 

        </div>
      </section>

      <div className="back-button">
        <a href="/" className="link">&larr;</a><br />
      </div>












      <footer>
        <p>© 2024 Ariana Morace</p>
      </footer>
    </div>
  );
}

export default About;
