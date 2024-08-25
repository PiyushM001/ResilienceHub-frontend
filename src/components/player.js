import React from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { FaHandsHelping, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profilebg from '../Images/profile_bg.png';
import './components.css';

export default function Ngo(props) {
  return (
    <Link to={`/other/${props.id}`} className="block w-[11.4rem] mt-4">
      <div className="relative w-full h-[16rem] rounded-lg border bg-[#1b1b1b] border-[#2c2c2c] shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="relative">
          <img
            className="rounded-t-lg w-full h-[4.5rem] object-cover"
            src={profilebg}
            alt="Background"
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[4rem] h-[4rem] border-2 border-[#787878] rounded-full bg-white overflow-hidden">
            <img
              className="w-full h-full rounded-full object-cover"
              src={props.porfileimg}
              alt="Profile"
            />
          </div>
        </div>

        <div className="mt-10 text-center px-2">
          <div className="text-white font-semibold text-[1rem]">
            {props.player}
          </div>
          <div className="text-[#b3b3b3] text-[0.8rem]">
            {props.realname}
          </div>
        </div>

        <div className="mt-1 px-2 text-[#828282] text-[0.8rem]">
          <div className="flex items-center justify-center">
            <MdPersonOutline className="text-[#656565] mr-1" />
            Director:
            <span className="ml-1 text-[#b3b3b3] font-medium">
              {props.director}
            </span>
          </div>
          <div className="mt-1">
            <div className="flex items-center justify-center mb-1">
              <FaHandsHelping className="text-[#656565] mr-1" />
              Followers:
              <span className="ml-1 text-[#b3b3b3] font-medium">
                {props.followersCount}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <FaRegHeart className="text-[#656565] mr-1" />
              Appreciations:
              <span className="ml-1 text-[#b3b3b3] font-medium">
                {props.followingCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
