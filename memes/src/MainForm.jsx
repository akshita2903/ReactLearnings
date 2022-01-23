import React,{useState} from 'react';
import './style.css';
import Memesdata from './Memesdata';
function MainForm() {


    // const[source,setSource]=React.useState("");

    const[meme_detail,set_meme_detail]=React.useState({
        top_text:"",
        bottom_text:"",
        img_url:"https://i.imgflip.com/1g8my4.jpg"
    })
    function getImage(){

        const img_sources=Memesdata.data.memes
        const random_number=Math.floor(Math.random()*img_sources.length)
const url=img_sources[random_number].url;


set_meme_detail(
    (prev_detail) => ({
        ...prev_detail,img_url:url
    })
)
// function handleC(e){
//     setnewAbout((f) => ({
//  ...f,contact:e.target.value,
 
//     }))
//  }

    }
    // function handleTopText(e){
    //     set_meme_detail(
    //         (prev_detail) => ({
    //             ...prev_detail,top_text:e.target.value
    //         })
    //     )
    // }
    // function handleBottomText(e){
    //     set_meme_detail(
    //         (prev_detail) => ({
    //             ...prev_detail,bottom_text:e.target.value
    //         })
    //     )
    // }
    function handleText(e){
        set_meme_detail((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    return (
       
       <>
    <main>
           <div className="forms">
               <input type="text" className="f-input" placeholder="top-text"  name="top_text" onChange={handleText}>

               </input>
               <input type="text" className='f-input' placeholder="bottom-text" name="bottom_text" onChange={handleText}></input>



               <button type="submit" className='f-button' onClick={getImage}>Get a New Memes :)</button>
         
          <img src={meme_detail.img_url} alt="Memes_img" className='memes_img'></img>
           </div>
           </main>
       </>

    )
}

export default MainForm
