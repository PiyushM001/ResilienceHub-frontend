// import React from 'react'

// export default function Speakup() {
//   return (
//     <div>

      
//     </div>
//   )
// }

import React, { useState,useEffect } from 'react';
import loadinggif from '../Images/loading.gif';
import './components.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Speakup({ userId }){
  const navigate = useNavigate();

  
  const [loading, setLoading] = useState(false);
const [description,setdescription]=useState("");
 
  const port = "http://localhost:5000";
  // const port = "https://thrive-backend-o6k3.onrender.com"

  const infoid = localStorage.getItem("infoid");


  const funp = async () => {
    setLoading(true);
    const response = await fetch(`${port}/speakup/pos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
      },
      body: JSON.stringify({ description }),
    })
      .then(async (response) => {
        const x = await response.json();

        if (response.ok) {
          setLoading(false)
          navigate('/speakups')
          console.log("sdgf");
          toast.success("submission Successful");
        } else {
          toast.error("sdgds");
        }
      })
      .catch((err) => {
        toast(err);
      });
  };
  return (
<>
    {loading && (
      <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000] font-teachers text-[#ffffff]'>
        <div className='h-[30svh] bg-[#000000]'></div>
        <img className='w-[100vw]' src={loadinggif} alt='Loading' />
        <div className='h-[30svh] bg-[#000000]'></div>
      </div>
    )}
   
        <label htmlFor="description " className='text-[#c7c7c7] h-[5rem] font-teachers mt-2 mb-2'>Post Description:</label>
      <textarea className='w-[100%] font-teachers bg-[#797979] rounded-[10px] text-[#ffffff] p-2'
        id="description"
        name="description"
        value={description}
        onChange={e=>setdescription(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter the description of your post here"
      ></textarea>
          
      

      
      <button className='w-[30%] glass3 rounded-[10px] pt-2 pb-2 font-mochiy-pop text-[#d1d1d1]'  onClick={funp} >Post</button>
    
    </>
  );
};

// import React, { useState,useEffect } from 'react';

// export default function Speakup() {
//   const [description,setdescription]=useState("");
//   const fun=()=>{
//   console.log("chal rha");
// }
//   return (
//     <div>
//        <button className='w-[30%] rounded-[10px] pt-2 pb-2 font-mochiy-pop text-[#d1d1d1]'  onClick={fun} >Post</button>
      
//     </div>
//   )
// }
