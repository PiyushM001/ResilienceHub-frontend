import React, { useState,useEffect } from 'react';
import loadinggif from '../Images/loading.gif';
import './components.css'
import { useNavigate } from "react-router-dom";


export default function Postpost ({ userId }){
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
const [description,setdescription]=useState("");
  const [preview, setPreview] = useState('');
  // const port = "http://localhost:5000";
  const port = "https://thrive-backend-o6k3.onrender.com"

  const infoid = localStorage.getItem("infoid");


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();
    if (!selectedFile) return;
console.log("cha")
    const formData = new FormData();
    formData.append('profilePicture', selectedFile);
    formData.append('_userid', infoid);
    formData.append('description',description);

    try {
      const response = await fetch(`${port}/cloud/post`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/");
                setLoading(false)

        console.log('File uploaded successfully', data);
      } else {
        console.error('Error uploading file', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
<>
    {loading && (
      <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000] font-teachers text-[#ffffff]'>
        <div className='h-[30svh] bg-[#000000]'></div>Posting
        <img className='w-[100vw]' src={loadinggif} alt='Loading' />
        <div className='h-[30svh] bg-[#000000]'></div>
      </div>
    )}
    <div className='bg-[#0c0c0c] h-[100vh] w-full flex flex-col justify-center items-center overflow-y-scroll '>
      <div className='w-[90%] h-[90vh]'>
      <form onSubmit={handleSubmit} className=' text-[#b0b0b0]'>
        <input type="file" onChange={handleFileChange} />
        {preview && <div> <img src={preview} className='mt-5 border-[1px] border-[#838383]' alt="Profile Preview" width="100%" />
        
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
       <div className='w-full flex justify-center items-center h-[5rem]'  >      <button className='w-[30%] glass3 rounded-[10px] pt-2 pb-2 font-mochiy-pop text-[#d1d1d1]' type="submit" onclick={handleSubmit} >Post</button>
</div></div>  }      </form>
      

      </div>
    </div>
    </>
  );
};