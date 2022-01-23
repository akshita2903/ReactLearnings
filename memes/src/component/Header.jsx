import React from 'react'
import './style.css';
function Header() {
    return (
        <div>
     
          <div className='headers'>
      
             
             
              <p className="h-title">Memes Generator</p>
        
         <h3 className='h-text'>Memes</h3>

       
        
          <img src={require("./images/jeery.png")} className="h-image"></img>
          </div>  
        </div>
    )
}

export default Header
