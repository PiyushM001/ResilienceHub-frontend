import React, { useState, useEffect } from 'react';
// import './components.css';
import { ReactComponent as PersonIcon } from './person.svg'; 
import Header from './header';
import Footer from './footer';
import { BsGraphUp, BsLink45Deg } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const MainPage = () => {
    const totalPeople = 41;
    const [highlightedPeople, setHighlightedPeople] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedPeople(prev => Math.min(prev + 1, totalPeople));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-container bg-[red]">
          
            <Header />
            <div className='h-[100svh] w-full overflow-y-scroll bg-[#202020] mt-[-20px]'>
            <div className="text-center p-4">
                <h1 className="text-4xl mt-[12svh] font-bold text-[#8c97a3] mb-6">Women Assault in India</h1>
                <div className="people-container mb-6 flex justify-center">
                    {Array.from({ length: totalPeople }, (_, index) => (
                        <PersonIcon
                            key={index}
                            className={`person-icon w-6 h-6 mx-1 ${index < highlightedPeople ? 'highlighted' : ''}`}
                        />
                    ))}
                </div>
                <p className="statistic-text text-lg font-semibold text-[#f8f8f8] mb-4">
                    Every 50 Seconds, an Indian Woman is Assaulted.
                </p>
                <p className="description-text text-[#acacac] mb-10">
                    In India, 445,000 women face violence every year. This means every 50 seconds, a woman in India is assaulted. Gender-based violence is a severe issue that needs to be addressed urgently.
                </p>

                {/* New Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Stats Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <BsGraphUp className="text-blue-500 text-3xl mb-4" />
                        <h2 className="text-xl font-bold text-gray-800 mb-2">National Statistics</h2>
                        <p className="text-gray-600">
                            According to the National Crime Records Bureau, cases of domestic violence, dowry deaths, and sexual harassment are alarmingly high in India.
                        </p>
                        <a href="https://ncrb.gov.in" className="text-blue-500 mt-4 inline-block">
                            Learn more <FiExternalLink className="inline" />
                        </a>
                    </div>

                    {/* Government Link Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <BsLink45Deg className="text-green-500 text-3xl mb-4" />
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Government Initiatives</h2>
                        <p className="text-gray-600">
                            The Ministry of Women and Child Development has various initiatives to support and protect women from violence.
                        </p>
                        <a href="https://wcd.nic.in" className="text-blue-500 mt-4 inline-block">
                            Visit WCD <FiExternalLink className="inline" />
                        </a>
                    </div>

                    {/* Graph Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="text-gray-800 text-lg mb-4 font-bold">Violence Against Women Over Time</div>
                        <img src="https://www.indiablooms.com/news_pic/2022/37069bbb5b33ad370c760017cd6b78692.jpg" alt="Graph" className="w-full h-auto" />
                        <p className="text-gray-600 mt-4">
                            This graph shows the increasing cases of violence against women in India over the past decade.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
