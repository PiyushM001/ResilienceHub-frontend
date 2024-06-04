import React,{useState} from 'react'
import { ToastContainer } from "react-toastify";
import './components.css'
import loadinggif from '../Images/loading.gif';

// import { styled } from '@material-ui/core';
export default function Profile_page_common(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };
  const [imageLoaded2, setImageLoaded2] = useState(false);

  const handleImageLoad2 = () => {
    setImageLoaded2(true);
  };

  const handleImageError2 = () => {
    setImageLoaded2(false);
  };
  return (
    <div>
        <ToastContainer />


<div>
  <div className='pro2 w-full h-[6rem]'>
    <img className="w-[100vw] h-[6rem]"  onLoad={handleImageLoad2}
        onError={handleImageError2}
        style={{ display: imageLoaded2 ? 'block' : 'none' }} src={props.profilebg}  alt="Profile Background" ></img>
  </div>


  <div className="flex h-[4rem] relative items-center justify-end">
    <div className="absolute left-0 bottom-0 border-[#838383] border-[1px] w-[7rem] h-[7rem] rounded-[100%] ml-4 pro  ">
      <img className="w-[7rem] rounded-[100%] " src={props.profilePictureUrl}    onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: imageLoaded ? 'block' : 'none' }}  alt="img" ></img>
    </div>
    <div className="w-[35%]"></div>
    <div className="flex w-[60%] justify-start ">

    {/* <div className="w-[20%] border-[red] border-[2px] flex justify-center items-center rounded-[5px] ml-1 mr-8 font-mochiy-pop text-[2.5vw] text-[#ffffff] ">live</div> */}
<div className='w-[40%]'></div>
      <div
        onClick={props.handlec}
        className="flex  justify-center items-center text-[#000000] bg-[#B4FF16] w-[30%] h-[1.8rem] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[6px] relative"
      >
       {props.loading2 &&  <img className=' absolute w-[110%] opacity-80 rounded-[10px]' src={loadinggif} alt="Loading" />}
        {props.checkfollowstate}
      </div>
      
      <div  onClick={props.handleinvite}  className="flex mr-4 justify-center items-center text-[#ffffff] border-[#B4FF16] border-[1px] w-[30%] h-[1.8rem] font-medium rounded-[10px] text-[3vw] relative p-[3px]">
      {props.loading3 &&  <img className=' absolute w-[110%] opacity-80 rounded-[10px]' src={loadinggif} alt="Loading" />}

      TeamUp
      </div>
    </div>

    <div>
    </div>
  </div>
</div>

<div className="">
  <div>
    <div className="text-[#ffffff] font-mochiy-pop text-[5vw] font-thin ml-[2rem]">
      {props.IngameName}
    </div>
    <div className=" font-medium text-[3vw] h-[30%] flex items-center text-[#656565] ml-[2rem]">
      {props.RealName}
    </div>
  </div>

  <div className="flex h-[5rem] justify-evenly items-center">
    <div className="flex w-[94%] h-[4rem] justify-evenly items-center">
      <div  onClick={props.handleClickToOpenFollowers} className=" border-[1px] border-[#00fbff23] bg-[#00fbff09] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
        <div>Followers</div>
        <div>{props.followersCount}</div>
      </div>

      <div onClick={props.handleClickToOpenAllies}  className="  border-[1px] border-[#00fbff23] bg-[#00fbff09] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
        <div>Allies</div>
        <div>{props.followingCount}</div>
      </div>

      <div className=" w-[30%] h-[3rem] border-[1px] border-[#00fbff23] bg-[#00fbff09] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
        <div>Tournaments</div>
        <div>0</div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
