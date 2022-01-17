import React,{useState} from 'react';
import './style.css';
import Memesdata from './Memesdata';
function MainForm() {


    const[source,setSource]=React.useState("")
    function getImage(){

        const img_sources=Memesdata.data.memes
        const random_number=Math.floor(Math.random()*img_sources.length)
const url=img_sources[random_number].url;

setSource(url);

    }
    return (
       
       <>
    <main>
           <div className="forms">
               <input type="text" className="f-input" placeholder="top-text">

               </input>
               <input type="text" className='f-input' placeholder="bottom-text"></input>



               <button type="submit" className='f-button' onClick={getImage}>Get a New Memes :)</button>
         
          <img src={source} alt="Memes_img" className='memes_img'></img>
           </div>
           </main>
       </>

    )
}

export default MainForm
