import React ,{useState} from 'react'

 import Button from "@material-ui/core/Button";

import './text.css'



 function TextForm() {
    const [text,setText]=useState("");
    // text='sujs'
    //free me event milta hai
    const upperCase=()=>{
       // console.log('clicked');
        let newtext=text.toUpperCase();
        setText(newtext);
        
    }
    const handleonChange=(e)=>{
        
        setText(e.target.value);
    }
    const lowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>{
       
            setText('')
        
    }
    const removeExtraSpace=()=>{
        let newText= text.replace(/\s+/g,' ').trim();
        setText(newText);
    }
    const fToUC=()=>{
const words=text.split(" ");
for(let i=0; i<words.length;i++)
words[i]=words[i][0].toUpperCase()+words[i].slice(1);
let newW=words.join(" ");
setText(newW);

    }
    const copyText=()=>{
        if(text!==''){
        let val=document.getElementById('texta');
        val.select();
        navigator.clipboard.writeText(val.value)
        .then(() => {
            alert("successfully copied");
          })
          .catch(() => {
            alert("something went wrong");
          });
        }

    }
    return (
<>

<h1>Enter Text Here</h1>

  
      <textarea className='text' id="texta" placeholder="Enter your text here" value={text} onChange={handleonChange}>
 
</textarea>
<div id='button'>
<Button variant="outlined" color="primary" onClick={upperCase}>UpperCase</Button>

&nbsp; &nbsp;
<Button variant="outlined" color="primary" onClick={lowerCase}>LowerCase</Button>
&nbsp; &nbsp;
<Button variant="outlined" color="primary" onClick={fToUC}>LetterToUC</Button>
&nbsp; &nbsp;
<Button variant="outlined" color="primary"  onClick={copyText}>CopyText</Button>
&nbsp; &nbsp;
<Button variant="outlined" color="primary"  onClick={removeExtraSpace}>Remove Spaces</Button>
&nbsp; &nbsp;
<Button variant="outlined" color="primary" onClick={clearText}>ClearText</Button>
&nbsp; &nbsp;
</div>
<div className='container'>
    <h1> Your Text Summary</h1>
    {/* //text.split(" ")->split sentence int words sepearted by spaces and it is array */}

    <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
    <p> It can be read in <b>{0.008 * text.split(" ").length}</b> Minutes</p>
</div>
      
</>
    )
}
export default TextForm;
