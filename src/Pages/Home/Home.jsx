import React from 'react';
import './Home.css';

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
        <img src="../src/assets/SelfProtrait.jpg" alt="Ariana Morace" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Home;
