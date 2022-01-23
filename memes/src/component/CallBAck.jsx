import React from 'react'

 function CallBAck() {
/*
if u ever need the old values of state to help u determine
new value of state.u shoukd pass a callback funct to ur state
setter funct instead of using state directly.This callback
funct will receive old value of state as its  parameter,which u can
then use to determibe your newvalus of state
*/




    const[ar1,newar]=React.useState(["t1","t2"])
    //const[c1,c2]=React.useState(2);
function addi(){

//len=ar1.length;
      newar(pa => {
      
       return  [...pa,`t ${pa.length + 1}`]
      });
    }
    function display(title){
return <p> {title} </p>
    }
    const things=ar1.map(display)
    return (
        <div>
         <button onClick={addi}>Add Items</button>   
         {things}
        </div>
    )
}
export default CallBAck
