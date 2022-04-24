import React from 'react';
// ,{useEffect}
import '../src/styles/styles.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import NavbarSignUp from "./components/NavbarSignUp"
import Messages from "./components/Messages";
import Offer from "./components/Offer";
// import {useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

// import { auth } from './service/firebase';
// import {login, logout} from "./features/userSlice";

import {BrowserRouter, Routes, Route} from "react-router-dom";







  function App() {

  //   const user =useSelector(selectUser);
  //   const dispatch= useDispatch();
   
  //  useEffect(()=>{ 
  //   auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       dispatch(
  //         login({
  //           uid:authUser.uid,
  //           photo:authUser.photoURL,
  //           email:authUser.email,
  //           displayName:authUser.displayName 
  //         }) 
  //       )
  //     }else{
  //       dispatch(logout());
  //     }
  //   })
  // },[dispatch]);
 
  
  //   console.error();

  return (
    <div className="App">
        {/* {user==null ? <Navbar/>:} */}
        <NavbarSignUp/>
        
        <BrowserRouter>                     
                <Routes>
                  <Route path="/messages" element={<Messages />} />                        
                  <Route path="/" element={ <Home />} /> 
                  <Route path="/Offer" element={<Offer />} />                    
                </Routes>     
        </BrowserRouter>
        <Footer />


    </div>
  );
}

export default App;