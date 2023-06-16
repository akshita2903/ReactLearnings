import React ,{useReducer} from 'react'
const initialState=0;
const reducer=(Currentstate,action)=>{
// return newState
switch(action){
    case 'increment':
        return Currentstate+1;
    case 'decrement': return Currentstate-1;
    case 'reset' : return initialState;
    default: return Currentstate 
}
}
export default function 
() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
    Count is:{count}<br/>
    <button onClick={()=> dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
