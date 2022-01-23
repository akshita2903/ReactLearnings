import React from 'react';

function TernaryFlip(){
const[isGoing,setisGoing]=React.useState("Yes");

function changeMind(){

    setisGoing((prev)=>{
        prev=!prev;
        return prev;
    })
}

    return(<>
        <h1>Would u like to go out</h1>


        <div >
            <button onClick={changeMind}>
              Guess
            </button>
            <span>{isGoing?"Yes":"No"}</span>
        </div>
    </>);
}
export default TernaryFlip;