import React from 'react'

function ObjectState() {
const[about,setnewAbout]=React.useState({

    first_name:"",
    last_name:"",
    contact:"",
    comments:"",
    isAgree:false,
    employment:"",
    favColor:""
});

// function handleFName(e){
//    setnewAbout((f) => ({
// ...f,first_name:e.target.value,

//    }))
// }
// function handleLName(e){
//     setnewAbout((f) => ({
//  ...f,last_name:e.target.value,
 
//     }))
//  }
//  function handleC(e){
//     setnewAbout((f) => ({
//  ...f,contact:e.target.value,
 
//     }))
//  }
function newHandleCh(e){
const{name,value,type,checked}=e.target;
    setnewAbout((prev)=>{
return {
        ...prev,
        [name]:type==="checkbox"?checked:value
    }
    console.log(prev);
    })
}
 function handleSubmit(){
     setnewAbout({
         first_name:"",
         last_name:"",
         contact:"",
         comments:"",
         checked:false,
         employment:"Student",
         favColor:""
     })
 }
    return (
        <div>
          <div className='c_form'>

          <label htmlFor="fname">FirstName:</label>
              {/* <input type="text" placeholder='enter' value={about.first_name} onChange={handleFName}  >
{/* ${about.first_name} 
              </input> */}
              <input  id="fname" type="text" name="first_name" value={about.first_name} onChange={newHandleCh}></input>
              <br></br>
              <label htmlFor="lname">LastName:</label>
              {/* <input type="text" placeholder='enter' value={about.last_name} onChange={handleLName}></input> */}
            <input type="text" id="lname" name="last_name" value={about.last_name} onChange={newHandleCh}></input>
              <div>
              <label htmlFor="contact_detail">Contact</label>
              {/* <input type="text" placeholder="contact" value={about.contact} onChange={handleC}></input> */}
              <input type="text" id="contact_detail" name="contact" value={about.contact} onChange={newHandleCh}></input>
             <textarea placeholder='Type ur text' 
                 value={about.comments} name="comments"
                 onChange={newHandleCh}
             />
              </div>

              <div>
              <label htmlfor="check">
                  <input type="checkbox"
                  name="isAgree"
                   checked={about.isAgree}
                  onChange={newHandleCh}
                  ></input>
                  Agree 
              </label>
</div><div>
<legend>Are you currently ?</legend>
        <input type="radio" id="Student" name="employment" value="Student" checked={about.employment === "Student"} onChange={newHandleCh}></input>
        <label htmlFor='Student'>Student</label>
        <input type="radio" id="Teacher" name="employment" value="Teacher" 
        checked={about.employment === "Teacher"} onChange={newHandleCh}></input>
        <label htmlFor='Teacher'>Teacher</label>
        <input type="radio" id="p" name="employment" value="Principal"
        checked={about.employment === "Principal"} onChange={newHandleCh}></input>
        <label htmlFor='Principal'>Principal</label>
              </div>
              <div>
                  <select id="favColor" value={about.favColor}
                  onChange={newHandleCh} name="color">
                  <option value="">Choose--</option>
                      <option value="red">Red</option>

                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="pink">Pink</option>
                      <option value="Violet">Violet</option>


                  </select>
              </div>


              <button type="submit"  onClick={handleSubmit}>Submit</button>
          </div>  
        </div>
    )
}

export default ObjectState
