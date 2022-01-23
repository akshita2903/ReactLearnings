import React from 'react';

export default function SignUpForm() {
    const[formDetail,setfromDetail]=React.useState({
        email:"",
        password:"",
        confirmation:"",
        isAgree:false
    });
    function handleChange(e){
        const{name,value,type,checked}=e.target
setfromDetail((prevDetail)=>{
    return {    //yeh to object hua
        ...prevDetail,
        [name]:type === "checkbox"?checked:value
};
})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(formDetail.password === formDetail.confirmation){
          
            if(formDetail.isAgree)
            {
                console.log("Good");
            
            console.log("Successfully Sign Up!");
            alert("Sign Up successfully :)");
            }
            else{
                console.log("Click")
                alert("Please click on checkbox");
            }
        }
        else{
            console.log("Invalid Password");
            alert("PassWord do not match");
        }
    
        

       setfromDetail({
        email:"",
        password:"",
        confirmation:"",
        isAgree:false
       })
    }
  return <>

<form>
  <div>
  <input type="email"  name="email" placeholder='Type ur email'
    value={formDetail.email} onChange={handleChange}></input>
  <br></br>
  </div>
<div><input type="password" name="password"placeholder='password'
value={formDetail.password} onChange={handleChange} /></div>
<div><input type="password" name="confirmation" placeholder='confirm password'
value={formDetail.confirmation} onChange={handleChange} /></div>
<div>
<input type="checkbox" name="isAgree" checked={formDetail.checked}onChange={handleChange}></input><label htmlFor='cbox'>I agree with terms and conditions</label>
</div>

<button type="button" onClick={handleSubmit}>Submit</button>
</form>

  </>
}
