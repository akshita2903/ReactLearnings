import React from 'react'
import { user,context2 } from '../App'
export default function C2(){
  
  return (
    <div>
          <user.Consumer>
          {
            name =>{
return (
    <context2.Consumer>{
        val=> {
            return (<>Two friends {name} and {val}</>)
        }
    }
    </context2.Consumer>
)

            }
          }
         

    </user.Consumer>
    </div>
  )
}

