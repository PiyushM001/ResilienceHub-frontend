import React,{useState} from 'react';
import { sContext } from "../context/signcontext";
import { useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import loadinggif from '../Images/loading.gif'

import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
function Signup() {
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [confirmpassword, setconfirmpassword]=useState("")

    const a=useContext(sContext);
  const {signin,toasttest }= a;

// export const navigationfun = () => {

//     navigate("/");
// }

const [loading, setLoading] = useState(false);

const handlesignup= async (e) => {
  e.preventDefault();
  setLoading(true); // Start loading

  try {
    await signin(email,password,confirmpassword)
    // Do something after team creation
  } catch (error) {
    // Handle error if necessary
  } finally {
    setLoading(false); // Stop loading
  }
};

//   const handlesignup=(e)=>{
//     e.preventDefault();
   
//      signin(email,password,confirmpassword)
//   }
  return (
    <section class="bg-gray-50 dark:bg-gray-900 h-[100vh] flex items-center"><ToastContainer/>
       {loading && <div className='absolute w-full inset-0 opacity-90 fill-neutral-950'><div className='h-[30vh] bg-[#000000]'></div><img className='' src={loadinggif}></img><div className='h-[30vh] bg-[#000000]'></div></div>}

  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  sign up your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" value={email} onChange={e => setemail(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                      <input type="password" name="password" id="password" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                  </div>
                  <button type="submit" onClick={handlesignup} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] ">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  );
}

export default Signup;