import React from 'react';
import "../styles/Navbar.css";
// import { auth, provider } from "./service/firebase";




// import { Avatar } from "@material-ui/core";
// import  { auth } from "./firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
// import Avatar from "./Avatar";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
//   const signIn= () => {
//     auth.signInWithPopup(provider).catch((error) => alert(error.message));//.catch .. is a callback function
//  };

 






  // const user =useSelector(selectUser);
  return (
    <div className='Navbar'>
        <div className='Logo'>
            
            <img alt="" src='../logo1.png'></img>
            <h2>chrono<span>Mariage</span></h2>
        </div>
        
        <div className='Explore'>
            <h6>Explore</h6>
            <h6 className="switch">Become a Seller</h6>
            <button  type="button" class="btn  NavBtn btn-outline-warning">Sign In</button>
            {/* <Avatar onClick={()=>{auth.signOut()}} src={user.photo}/> */}
            {/* <h6>Sign In</h6> */}
            {/* <h6>Orders</h6> */}
            {/* onClick={signIn} */}
        </div>     
        
        {/* <Avatar /> */}
        
        
          
    </div>
  )
}

export default Navbar;