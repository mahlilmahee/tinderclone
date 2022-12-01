import React, { useState } from 'react';
import Authmodal from '../Components/Authmodal';
import Navbar from '../Components/Navbar';

const Home = () => {
    const authToken=false;
    const [modal,setModal]=useState(false)
    const [isSignup,setIsSignup] = useState(true)
    const handclick=()=>{
        setModal(true);
        setIsSignup(true);
    }

    return (
    <div className="overlay">
  <Navbar setIsSignup={setIsSignup} minimal={false} setModal={setModal} authToken={authToken} ></Navbar>
        <div className="home">
           <h1> Swipe Right</h1>
           <button onClick={handclick} className="primary-button">
            {
                authToken ? 'Sign-out' :'Create Account'
            }
           </button>
        </div>
      {
        modal &&   <Authmodal isSignup={isSignup} setIsSignup={setIsSignup} setModal={setModal} />
      }

    </div>
    )
     
};

export default Home;