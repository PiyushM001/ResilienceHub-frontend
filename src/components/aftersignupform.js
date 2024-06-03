import React,{useState} from 'react';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import loadinggif from '../Images/loading.gif'
import { ToastContainer, toast } from 'react-toastify';
function Aftersignupform() {
    const [IngameName, setIngameName]=useState("")
    const [RealName, setRealName]=useState("")
    const [game, setgame]=useState("")

    const a=useContext(pContext);
  const {createinfo}= a;



  const [loading, setLoading] = useState(false);

  const handleaftersignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      await createinfo(IngameName,RealName,game)
      // Do something after team creation
    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false); // Stop loading
    }
  };
// export const navigationfun = () => {

//     navigate("/");
// }

const localtoken = localStorage.getItem("token");


  return (
    <section class="bg-gray-50 dark:bg-gray-900 h-[100vh] flex items-center"><ToastContainer/>
   {loading && <div className='absolute w-full inset-0 opacity-90 fill-neutral-950'><div className='h-[30vh] bg-[#000000]'></div><img className='' src={loadinggif}></img><div className='h-[30vh] bg-[#000000]'></div></div>}
  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="IngameName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Ingame Name</label>
                      <input type="IngameName" name="IngameName" id="IngameName" value={IngameName} onChange={e => setIngameName(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="RealName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                      <input type="RealName" name="RealName" id="RealName" value={RealName} onChange={e => setRealName(e.target.value)} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="game" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the Game you play</label>
                      <input type="game" name="game" id="game" value={game} onChange={e => setgame(e.target.value)} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot RealName?</a> */}
                  </div>
                  <button type="submit" onClick={handleaftersignup} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] ">Submit</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  );
}

export default Aftersignupform;