import React,{useReducer, useState} from 'react'
const initialState={
    firstCounter:0,
    secondCounter:2
};
const reducer=(currentState,action)=>{
    switch(action.type){
        case 'increment':
            return {firstCounter:currentState.firstCounter+action.value};
        case 'decrement': return{firstCounter: currentState.firstCounter-action.value};
        case 'reset' : return initialState;
        case 'double': return {secondCounter: currentState.secondCounter * action.value}
        default: return currentState 
    }
}


export default function () {
  const[count,dispatch]=  useReducer(reducer,initialState)
  const [val,setval]=useState();
  const setT=(e)=>{
    setval(e.target.value);
  }
  return (
    <div>
    <h1>COMPLEX REDUCER </h1>
    ComplexReducerCounter : {count.firstCounter}

    
    <br></br>
    <input type="text"  value={val} onChange={setT}/>
         <button onClick={()=> dispatch({type:'increment',value:1})} >Increment</button>
    <button onClick={()=> dispatch({type:'decrement',value:1})}>Decrement</button>
    <button onClick={()=> dispatch({type:'reset'})} >Reset</button>
    <br></br>
Multiply : {count.secondCounter}
    <button onClick={()=> dispatch({type:'increment',value:5})} >IncrementBy5</button>
    <button onClick={()=> dispatch({type:'decrement',value:5})}>DecrementBy5</button>
    <button onClick={()=>dispatch({type:'double',value:val})}>Multiply By {val}</button>
    <button onClick={()=> dispatch({type:'reset'})} >Reset</button>
    </div>
  )
}
