import React, {  useContext,useState} from 'react';

import profile from '../Images/profile2.png'
// import postimg from '../Images/profile_bg.png'
import likeicon from '../Images/like.svg'
import commenticon from '../Images/comment.svg'
import { pContext } from "../context/profilecontext";
import './components.css'
export default function Post(props) {
  const infoid = localStorage.getItem("infoid");
  const a = useContext(pContext);
  const { like} = a;
  const [imageLoaded2, setImageLoaded2] = useState(false);

const likefun=()=>{
  like(infoid,props.postid)
}
const handleImageError2 = () => {
  setImageLoaded2(false);
};
  return (
    <div className='mt-3 '>
      <div className=' bg-[#040d10] w-[100vw] '>




        <div className='flex'>
          <div className='w-[3rem] h-[3rem] ml-3 mr-3 mt-2 rounded-[100%] pro3'>            <img className='w-[3rem] rounded-[100%] ' src={props.profile}  style={{ display: imageLoaded2 ? 'block' : 'none' }}  onError={handleImageError2}  alt="img" ></img>
</div>
            <div className='flex flex-col justify-center '>
                <div className='text-[#ffffff] font-mochiy-pop text-[0.9rem] font-thin mt-3'>{props.name}</div>
                <div className='font-medium text-[0.8rem] h-[30%] flex items-center font-teachers  text-[#656565]'>{props.realname}</div>
            </div>
            </div>




            <div className='text-[#959595] ml-3  font-thin text-[0.8rem]  font-teachers p-2 '>
                {props.description}
            </div>
       
       

<img className='w-full ' src={props.postimg}  alt="img" ></img>





<div className='w-[100%] h-[2.5rem]  flex items-center'>

    <div className='w-[30%] flex justify-evenly'>
    <div className='text-[0.7rem] rounded-[100%] font-teachers text-[#c1c1c1] '>    <img  src={likeicon} onClick={likefun}  alt="img" ></img> Like</div>
    {/* <div className='text-[2.5vw] flex  flex-col justify-center items-center'>    <img className='w-[0.8rem]' src={commenticon}></img>Comment  </div> */}
    </div>

<div className='w-[70%] flex justify-end h-[60%]'>
    <div className='w-[60%] flex justify-evenly'>
<div className='text-[0.8rem] font-teachers text-[#d5d5d5]'>{props.likes} <span className='m-1'> Likes</span> </div>
{/* <div className='text-[3vw]' > 2 Comments</div> */}
</div>
</div>



</div>




      </div>
    </div>
  )
}
