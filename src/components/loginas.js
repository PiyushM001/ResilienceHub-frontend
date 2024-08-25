import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Loginas() {
    const signupplayerfun=()=>{

    }
    const signuporgfun=()=>{
        toast("Can't sign up as Counsellor now")
       
    }
  return (
    <section class="bg-[#131515] h-[100vh] flex items-center"><ToastContainer/>
  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full bg-[#2b2c28] border-[#696b6b] rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form class="space-y-4 md:space-y-6 " action="#">
                  <Link to="/signup" className='mt-[5rem]'>
                  <button type="submit"  class="w-full bg-[#339989] text-[#0c0c0c] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mary-600 bg-primary-700 ring-primary-800 border-[2px] ">Register as NGO</button>
                  </Link>
                  <div>
                  <button type="submit" onClick={signuporgfun} class="w-full bg-[#339989] text-[#0c0c0c]  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mary-600 bg-primary-700 ring-primary-800 border-[2px] ">Register as Counsellor</button>
                  </div>
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline rimary-500">Forgot password?</a> */}
                  </div>

                  <p class="text-sm font-light text-[#339989] ray-400">
                      Already have an account? <Link to="/login" class="font-medium text-[#339989] hover:underline rimary-500">Log in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
