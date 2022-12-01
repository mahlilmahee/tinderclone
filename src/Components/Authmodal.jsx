import React, { useState } from 'react';

const Authmodal = ({setModal,isSignup,setIsSignup}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [error,setError]=useState('')
    
    const handclick=()=>{
        setModal(false);
        console.log('hello ami ')
    }


   const  onSubmit=e=>{
        e.preventDefault();

     try{
        if(isSignup && password!==confirmPassword){
            setError('Please match both of the password')
        }
        console.log('make a post request to our database ')
    
     }
     catch(error){
        console.log(error)
     }
    
    }
    return (
        <div className="authmodal" style={{backgroundColor:'white',width:'350px',height:'auto',margin:'20px auto',border:'1px solid black',borderRadius:'10px',padding:'15px'}}>
            <button onClick={handclick} className="auth-button">X</button>
                Auth Modal
                <h2>{isSignup? "Create Account" :'Log in'}</h2>
                <p>By Clicking this you are being agreed with the terms and conditions of our company</p>
       
       <form onsubmit={onSubmit} className="formcreate">

        <input type="text" 
        id="email"
        name="email"
        placeholder='email'
        required="true"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="password" 
        id="password"
        name="password"
        placeholder='password'
        required="true"
        onChange={(e)=>setPassword(e.target.value)}
        />
       {
        isSignup &&  <input type="password" 
        id="ConfirmPassword"
        name="ConfirmPassword"
        placeholder='ConfirmPassword'
        required="true"
        onChange={(e)=>setConfirmPassword(e.target.value)}
        />
       }
       

        <input type="submit" />
       </form>
       <hr />
       <h2>Get Our App</h2>
        </div>
    );
};

export default Authmodal;