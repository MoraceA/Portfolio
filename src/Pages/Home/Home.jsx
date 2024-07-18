import React from 'react';
import './Home.css';
import portrait from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/SelfProtrait.jpg';

function Home() {
  return (
    <div>
      <h2 className="full-name" style={{ fontSize: '35px' }}>Ariana Morace</h2>
      <h3 className="bio" style={{ fontSize: '23px' }}>Software Developer</h3>

      <div className="container-2">
        <a href="/projects" className="link">WORK</a><br />
        <a href="/about" className="link">ABOUT</a><br />
        <a href="contact" className="link">CONTACT</a><br />
      </div>

      <div className="polaroid">
      <img src={portrait} alt="unity" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Home;
