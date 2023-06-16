import {React,useContext} from 'react'
import { user,context2 } from '../App'
export default function WithCAPI() {
    const user1=useContext(user);
    const user2=useContext(context2);
  return (
    <div> 
   {user1} was playing with {user2} 
    </div>
  )
}
