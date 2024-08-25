import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUserTie } from 'react-icons/fa';
import Footer from './footer';
import Header from './header';

const ConsultantCard = ({ name, title, phone, email, image }) => {
    return (
        <>
         <Header/>
        <div className="w-[80%] rounded-lg overflow-hidden shadow-xl bg-[#292929] m-4 transform hover:scale-105 transition-transform duration-300">
           
            <img className="w-full h-48 object-cover" src={image} alt={name} />
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <FaUserTie className="text-3xl text-[#949494] mr-4" />
                    <div>
                        <div className="font-bold text-2xl text-[#ffffff]">{name}</div>
                        <p className="text-[#979797]">{title}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="flex items-center text-[#949494]">
                        <FaPhoneAlt className="text-xl mr-3" /> {phone}
                    </p>
                    <p className="flex items-center text-[#949494] mt-2">
                        <FaEnvelope className="text-xl mr-3" /> {email}
                    </p>
                </div>
            </div>
           
        </div> <Footer/></>
    );
};

export default ConsultantCard;
