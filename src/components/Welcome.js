import React from 'react';
import {Carousel} from "react-bootstrap";
import "../styles/Welcome.css"
// import { auth, provider } from "../service/firebase";

import 'bootstrap/dist/css/bootstrap.min.css';





function Welcome() {
//   const signIn= () => {
//     auth.signInWithPopup(provider).catch((error) => alert(error.message));//.catch .. is a callback function
//  };
  return (
    <div className='Welcome'>
      <div className='carousel'>
       
        <Carousel>
        <Carousel.Item interval={1900}>
        <h3>Find your Perfect Plan</h3>
        <p>Ring.</p>
        </Carousel.Item>
        <Carousel.Item interval={1900}>
        <h2>Build your E-Commerce business</h2>
        <p>work smart. Earn fast</p>
        </Carousel.Item>
        <Carousel.Item interval={1900}>  
        <h2>Are you a vendor?</h2>
        <p>Sign up on AlfMbrok to reach more couples and book more weddings!</p>
        </Carousel.Item>
        </Carousel>
      </div>

      <div className='welcomeMessage'>
          <h4>Hello !</h4>
          <p>Welcome to <strong>AlfM'brouk</strong>. Get offers from service providers for your Wedding</p>
          
          <button   type="button" class="btn btn-outline-dark " size="lg">Sign up for free</button>
          {/* onClick={signIn} */}
          
       </div>            
    </div>
  )
}

export default Welcome;

            

           