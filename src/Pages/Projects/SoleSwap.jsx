import React from 'react';
import './SoleSwap.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import createAccountImage from '../../assets/CreateAccountPage.png'; 
import MenShoesIMG from '../../assets/MensShoesPage.png';
import HomePageIMG from '../../assets/HomePage.png';
import AboutUsPage from '../../assets/AboutUsPage.png';
import ProductDescriptionIMG from '../../assets/ProductDescription.png';
import ContactPageIMG from '../../assets/ContactPage.png';
import LoginPageIMG from '../../assets/LoginPage.png';

function SoleSwap() {
  const handleCheckItOutClick = () => {
    window.open('https://github.com/MoraceA/Sole-Swap'); 
  };

  return (
    <div>
      <div className="back-button">
        <a href="/projects" className="link">&larr;</a><br />
      </div>

      <div className="sole-swap-container">
        <div className="sole-swap">
          <h1>Sole Swap</h1>
          <img className="about-us-img" src={AboutUsPage} alt="Sole Swap" />
        </div>
        <div className="sole-swap-description">
          <p>ABOUT</p>
          <p>Sole Swap was designed to empower sneaker enthusiasts to collect, trade, and elevate their sneaker collections. The platform is designed exclusively for facilitating exchanges without purchases.</p>
          <p>The goal of Sole Swap is to encourage sneaker enthusiasts to recycle and trade their unwanted sneakers instead of letting them collect dust, or throwing them away in the trash. This is extremely crucial in the modern day since many resources are scarce.</p>
        </div>
        <div className="my-role">
          <p>MY ROLE</p>
          <p> My duties in this project included...</p>
          <ul>
            <li>UI: I designed an intuitive UX/UI design for every page of the site utilizing figma. Then, implemented the figma design into CSS code.</li>
            <li>Authentication: I utilized Firebase to handle a secure login and create account authentication.</li>
            <li>Database: I utilized the Firestore database to facilitate the upload, storage, and search functionality for shoes on the website.</li>
            <li>ReactJS: Implemented React DOM, ensuring dynamic rendering of components.</li>
          </ul>
        </div>
        <div className="carousel-container">
          <Carousel 
            autoPlay 
            interval={3000} 
            infiniteLoop 
            showThumbs={false} 
            showIndicators={false} 
            showStatus={false} 
            showArrows={true}
          >
            <div>
              <img src={createAccountImage} alt="Create Account Page" />
            </div>
            <div>
              <img src={MenShoesIMG} alt="Men's Shoes Page" />
            </div>
            <div>
              <img src={ProductDescriptionIMG} alt="Product Description Page" />
            </div>
            <div>
              <img src={ContactPageIMG} alt="Contact Page" />
            </div>
            <div>
              <img src={LoginPageIMG} alt="Login Page" />
            </div>
          </Carousel>
        </div>
        <button className="check-it-out-btn" onClick={handleCheckItOutClick}>Check it out</button>
      </div>
    </div>
  );
}

export default SoleSwap;
