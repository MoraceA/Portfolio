import React from 'react';
import './SoleSwap.css';
import createAccountImage from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/CreateAccountPage.png'; 
import MenShoesIMG from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/MensShoesPage.png';
import HomePageIMG from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/HomePage.png';
import AboutUsPage from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/AboutUsPage.png';
import ProductDescriptionIMG from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/ProductDescription.png';
import ContactPageIMG from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/ContactPage.png';
import LoginPageIMG from '/Users/ariana/Desktop/Projects/PersonalSite/arianamorace/src/assets/LoginPage.png';
function SoleSwap (){
  const handleCheckItOutClick = () => {
    window.open('https://github.com/MoraceA/Sole-Swap'); 
  };


  return (
    <div>
       <img className="ss-img" src={HomePageIMG} />
      <div className="sole-swap">
        <h1>Sole Swap</h1>

        <img className="about-us-img" src={AboutUsPage} alt="Sole Swap" />
       
      </div>
      <div className="sole-swap-description">
        <p>ABOUT</p>
        <p>Sole Swap was designed to empower sneaker enthusiasts to collect, trade, and elevate their sneaker collections. The platform is designed exlcusively for facilitating exchanges without purchases.</p>
        <p>The goal of Sole Swap is to encourage sneaker enthusiasts to recycle and trade their unwanted sneakers instead of letting them collect dust, or throwing them away in the trash. This is extremely crucial in the modern day since many resources are scarce. </p>
      </div>
      <div className="my-role" >

     <p>MY ROLE</p>
     <p> My duties in this project included... </p>
     <ul>
        <li>UI: I designed an intuitive UX/UI design for every page of the site utilizing figma. Then, implemented the figma design into CSS code.</li>
        <li>Authentication: I utilized Firebase to handle a secure login and create account authentication </li>
        <li> Database: I utilized the Firestore database to facilitate the upload, storage,and search functionality for shoes on the website.</li>
        <li> ReactJS: Implemented React DOM, ensuring dynamic rendering of components</li>
    </ul>

</div>
<div className="image-collage">
        <img className="collage-img" src={createAccountImage}  />
        <img className="collage-img" src={MenShoesIMG}  />
        <img className="collage-img" src={ProductDescriptionIMG}  />
        <img className="collage-img" src={ContactPageIMG}  />
        <img className="collage-img" src={LoginPageIMG}  />
        {/* Add more images here */}
      </div>

      <button className="check-it-out-btn" onClick={handleCheckItOutClick}>Check it out</button>




    </div>
  );
}

export default SoleSwap;
