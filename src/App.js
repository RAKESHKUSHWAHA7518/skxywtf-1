// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Stock from "./components/Stock";
// import Subscription from "./components/Subscription";
// import Terms from "./components/Terms";
// import About from "./components/About";
// import Footer from "./components/Footer";

// import SignUp from "./components/SignUp";

// import SignIn from "./components/SignIn";


// function App() {
  
//   return (
//     <div className=" bg-slate-800 h-full w-full  text-white">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Main />}></Route>
//         <Route path="/stock" element={<Stock />}></Route>
//         <Route path="/subscription" element={<Subscription />}></Route>
//         <Route path="/terms" element={<Terms />}></Route>
//         <Route path="/about" element={<About />}></Route>
//          <Route Path="/signup" element={<SignUp/>}> </Route>
//          <Route Path="/signin" element={<SignIn/>}> </Route>
//       </Routes>
//        {/* <Signup /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Stock from "./components/Stock";
import Subscription from "./components/Subscription";
import Terms from "./components/Terms";
import About from "./components/About";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";

function App() {
const  [user,setUser]= useState();
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    setUser(user);
  })
})

  return (
    <div className="bg-slate-800 h-full w-full text-white">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={user? <Navigate to ='/'/>:<SignIn />} />

        {/* https://skxywtf-20700.firebaseapp.com/__/auth/handler */}
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
