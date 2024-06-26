// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { auth } from './firebase';
// import { useNavigate } from 'react-router-dom';

// export default function SignIn() {

//     const [email, setEmail] = useState('')

//     const [password, setPassword] =  useState('')

//     const navigate = useNavigate()

//     const handleLogin = async(e)=>{
//         e.preventDefault();
//         try {
//            await signInWithEmailAndPassword(auth,email,password)
//            console.log("user login successful");
//            toast.success('user successful' ,{
//             position:'top-center'
//           })

//           navigate('/')
//         } catch (error) {
//             console.log(error.message);
//             toast.error(error.message )

            
//         }


//     }

   

//   return (
//     <div className='py-20 '>
//     <div className="relative mx-auto  w-full max-w-md bg-white  pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
//       <div className="w-full p-10">
//         <div className="text-center">
//           <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
//           <p className="mt-2 text-gray-500">Sign in below to access your account</p>
//         </div>
//         <div className="mt-5">
//           <form onSubmit={handleLogin} action="">
//             <div className="relative mt-6">
//               <input 
//                 type="email" 
//                 name="email" 
//                 id="email" 
//                 placeholder="Email Address" 
//                 className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
//                 autoComplete="email" 
//                 value={email}
//                 onChange={(e)=>setEmail(e.target.value)}
//               />
//               <label 
//                 htmlFor="email" 
//                 className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
//               >
//                 Email Address
//               </label>
//             </div>
//             <div className="relative mt-6">
//               <input 
//                 type="password" 
//                 name="password" 
//                 id="password" 
//                 placeholder="Password" 
//                 className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
//                 autoComplete="current-password" 
//                 value={password} 
//                 onChange={(e)=>setPassword(e.target.value)} 
//               />
//               <label 
//                 htmlFor="password" 
//                 className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
//               >
//                 Password
//               </label>
//             </div>
//             <div className="my-6">
//               <button 
//                 type="submit"  
//                 className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
//               >
//                 Sign in
//               </button>
//             </div>
//             <p className="text-center text-sm text-gray-500">
//               Don&apos;t have an account yet?
//               <a 
//                 href="/signup" 
//                 className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
//               >
//                 Sign up
//               </a>.
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }




import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User login successful");
      toast.success('User logged in successfully', {
        position: 'top-center'
      });
      navigate('/');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'top-center'
      });
    }
  };

  return (
    <div className="py-20">
      <div className="relative mx-auto w-full max-w-md bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full p-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleLogin}>
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 text-black border-gray-300 px-0 py-1 placeholder-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder-transparent text-black focus:border-gray-500 focus:outline-none"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Don't have an account yet?{' '}
                <Link
                  to="/signup"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Sign up
                </Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

