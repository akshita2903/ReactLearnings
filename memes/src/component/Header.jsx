import React from 'react'
import './style.css';
function Header() {
    return (
        <div>
          <header className='headers'>
      <img src={require("./images/jeery.png")} className="h-image"></img>
             
             
              <h2 className="h-title">Memes Generator</h2>
         
         <h5 className='h-text'>Memes</h5>
         
          </header>  
        </div>
    )
}

export default Header
