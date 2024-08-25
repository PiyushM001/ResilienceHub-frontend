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
    const [otp, setotp]=useState("")

    const a=useContext(sContext);
  const {signin,toasttest,otpfun }= a;

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


const handleotp = (e) => {
  e.preventDefault();
otpfun(email);

}

//   }
  return (
    <section class="bg-[#061515] h-[100vh] flex items-center"><ToastContainer/>
       {loading && <div className='absolute w-full inset-0 opacity-90 fill-neutral-950'><div className='h-[30vh] bg-[#000000]'></div><img className='w-[100%]' src={loadinggif}></img><div className='h-[30vh] bg-[#000000]'></div></div>}

  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 bg-[#061d1d] space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
                  sign up your account
              </h1>
              <div class="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">NGO Official mail</label>
                      <input type="email" name="email" id="email" value={email} onChange={e => setemail(e.target.value)}  class=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required=""></input>
                  </div>
                  {/* <button  onClick={handleotp} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 border-[2px] ">Send OTP</button> */}

                  {/* <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">Enter OTP</label>
                      <input type="text" name="otp" id="otp" value={otp} onChange={e => setotp(e.target.value)}  class=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div> */}
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-white">Create Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="••••••••" class=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirmpassword" class="block mb-2 text-sm font-medium text-gray-900 text-white">Confirm Password</label>
                      <input type="password" name="confirmpassword" id="confirmpassword" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline text-primary-500">Forgot password?</a> */}
                  </div>
                  <button  onClick={handlesignup} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 border-[2px] ">Sign in</button>
                  <p class="text-sm font-light text-gray-500 text-gray-400">
                      Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline text-primary-500">Log in</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
  );
}

export default Signup;