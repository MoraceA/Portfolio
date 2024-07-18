import React from 'react';
import './Projects.css'; 

function Projects() {
    return(

        <div>
        
            <p className="description" style={{  fontFamily: 'Inter', fontSize: '15px' }}>PROJECTS <br /> Technology is an endlessly growing and evolving field, and it is important to always keep up. This is a showcase of my previous work that helped me learn new skills in software development. I am still in the process of learning since there are always in skills to acquire.  </p>

    
<div className="right-side">
<a href="/soleswap" class="link2">SOLE SWAP</a><br />
        <a href="https://github.com/MoraceA/Day-At-The-Park-" class="link2">DAY AT THE PARK</a><br />
        <a href="https://github.com/MoraceA/GamerShowcase" class="link2">GAMER SHOWCASE</a><br />
        
</div>

<div className="back-button">
        <a href="/" className="link">&larr;</a><br />
      </div>



</div>



    )
}

export default Projects;