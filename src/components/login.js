import React, { useState } from 'react';
import { sContext } from "../context/signcontext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Login() {

    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const a=useContext(sContext);
    const {login}= a;

    const handlelogin=(e)=>{
        e.preventDefault();
       
         login(email,password)
      }
    
  return (
    <section class=" bg-[#131515] h-[100vh] flex items-center"><ToastContainer/>
  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-[#2b2c28] border-[#696b6b]">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-[#7de2d1] md:text-2xl ">
                  Log in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-[#7de2d1]  ">Your email</label>
                      <input type="email" name={email}  id="email" value={email} onChange={e => setemail(e.target.value)} class="bg-[#2b2c28] border-[1px] border-[#7de2d1] border-gray-300 text-[#f3f3f3] 0sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-[#7de2d1] ">Password</label>
                      <input type="password" name={password} id="password" value={password} onChange={e => setpassword(e.target.value)}  placeholder="••••••••" class="bg-[#2b2c28] border-[1px] border-[#7de2d1] text-[#eeeded] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline text-primary-500">Forgot password?</a> */}
                  </div>
                  <button onClick={handlelogin} type="submit" class="w-full  bg-[#339989] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 border-[2px] ">Log in</button>
                  <p class="text-sm font-light  text-gray-400">
                      Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline text-[#339989]">Register</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  );
}

export default Login;