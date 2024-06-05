import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {auth,db} from './firebase'
import {doc,getDoc}from 'firebase/firestore'
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [userDetails,setUserDetails]= useState(null)

  const navigate= useNavigate()

   const fetchUserData= async()=>{
    auth.onAuthStateChanged(async(user)=>{
      console.log(user);
      if(user){
      const docRef= doc(db,'user',user.uid)
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setUserDetails(docSnap.data());

      }else{
        console.log("user not login");
      }
    }
    })

   }




   

  useEffect(()=>{
    fetchUserData();
  },[])

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });


  async function handleLogout(){
    try {
      await auth.signOut();
      signOut(auth).then(() => {
        console.log('logged out')
        navigate('/signin')
        window.location.reload();

      }).catch((error) => {
        // An error happened.
      });
      
      
      
      
    } catch (error) {

      toast.error(error.message)
      
    }
  }

  // const [value ,setValue]= useState('')
  const handleNav = () => {
    setNav(!nav);
  };

const logout=()=>{
  localStorage.clear();
  window.location.reload();
  // navigate('/signin')
   

   
  


}
 

 

  return (
    <div className="fixed w-full z-20">
      <div className="flex justify-between w-full px-20 py-5 bg-slate-900">
        <Link className="text-3xl" to="/">
          SKXYWTF
        </Link>
        <div className="flex justify-center items-center gap-5">
          <FaSearch className="cursor-pointer" size={20} />
          
          {/* <button className="px-2 py-1 rounded-lg bg-orange-500 text-center">
            signup
          </button> */}

{/* <Link onClick={logout} className="px-2 py-1 rounded-lg bg-orange-500 text-center" to="/signin">Login </Link> */}

 


 
 { localStorage.getItem('email') ?"":
          <Link
            onClick={handleLogout}
            className="px-2 py-1 rounded-lg bg-orange-500 text-center"
            to={userDetails ? "/" : "/signin"}
          >
            {userDetails ? "Logout" : "Login"}
          </Link>

 }

         { userDetails? " ":

          <Link
            onClick={logout}
            className="px-2 py-1 rounded-lg bg-orange-500 text-center"
            to={localStorage.getItem('email') ? "/" : "/signup"}
          >
            {localStorage.getItem('email')? "Logout" : "Signup"}
          </Link>

         }

          {/* <Link onClick={logout} className="px-2 py-1 rounded-lg bg-orange-500 text-center" to="/signup">{localStorage.getItem('email')?"Logout":"signup"}  </Link> */}


          <div onClick={handleNav}>
            {nav ? (
              <IoClose size={24} className="menu-icon cursor-pointer" />
            ) : (
              <IoMenu size={24} className="menu-icon cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div
        className="menu-bar "
        style={{
          width: "100%",
          height: "50%",
          position: "fixed",
          top: 75,
          right: nav ? 0 : "-100%",

          backgroundColor: "white",
          color: "black",
          transition: "right 0.3s ease-in-out",
          display: nav ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center w-full  ">
          <div className="my-4 py-1  hover:bg-gray-200">
            <Link to="/about"> About Us</Link>
          </div>
          <div className="my-4 py-1  hover:bg-gray-200">
            <Link to="/subscription">Subscription</Link>
          </div>
          <Link className="my-4 py-1  hover:bg-gray-200">
            <Link to="/terms">Terms & Conditions</Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { IoClose, IoMenu } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, db } from './firebase';
// import { doc, getDoc } from 'firebase/firestore';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const navigate = useNavigate();

//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const docRef = doc(db, "user", user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setUserDetails(docSnap.data());
//         } else {
//           console.log("User document not found");
//         }
//       } else {
//         console.log("No user is logged in");
//       }
//     });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       navigate('/');
//     } catch (error) {
//       console.error("Error signing out: ", error);
//     }
//   };

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="fixed w-full z-20">
//       <div className="flex justify-between w-full px-20 py-5 bg-slate-900">
//         <Link className="text-3xl" to="/">
//           SKXYWTF
//         </Link>
//         <div className="flex justify-center items-center gap-5">
//           <FaSearch className="cursor-pointer" size={20} />

//           <Link
//             onClick={handleLogout}
//             className="px-2 py-1 rounded-lg bg-orange-500 text-center"
//             to={userDetails ? "/" : "/signin"}
//           >
//             {userDetails ? "Logout" : "Login"}
//           </Link>

//           <Link
//             className="px-2 py-1 rounded-lg bg-orange-500 text-center"
//             to="/signup"
//           >
//             {localStorage.getItem('email') ? "Logout" : "Signup"}||{userDetails ? "Logout" : "Login"}
//           </Link>

//           <div onClick={handleNav}>
//             {nav ? (
//               <IoClose size={24} className="menu-icon cursor-pointer" />
//             ) : (
//               <IoMenu size={24} className="menu-icon cursor-pointer" />
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         className="menu-bar"
//         style={{
//           width: "100%",
//           height: "50%",
//           position: "fixed",
//           top: 75,
//           right: nav ? 0 : "-100%",
//           backgroundColor: "white",
//           color: "black",
//           transition: "right 0.3s ease-in-out",
//           display: nav ? "flex" : "none",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="text-center w-full">
//           <div className="my-4 py-1 hover:bg-gray-200">
//             <Link to="/about">About Us</Link>
//           </div>
//           <div className="my-4 py-1 hover:bg-gray-200">
//             <Link to="/subscription">Subscription</Link>
//           </div>
//           <div className="my-4 py-1 hover:bg-gray-200">
//             <Link to="/terms">Terms & Conditions</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


