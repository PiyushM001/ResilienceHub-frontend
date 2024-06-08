import React from 'react'
import Tournament from './tournament'
import { pContext } from "../context/profilecontext";
import { useContext,useState,useEffect } from "react";
import Footer from './footer'
import Header from './header'
import orgimg from '../Images/profile2.png'
import loadinggif from "../Images/loading.gif";


export default function Tournamentpage() {
  const a = useContext(pContext);
  const {gettour,tourarray}=a;
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
        await  gettour()
     

    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("chal rha")
    fetchData();
   
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
// {
//   id:"1",
//   org:"name_of_org222",
//   description:"description",
//   entryfee:"free",
//   prizepool:"5k",
//   registrations:"67",
//   time:"5 days left",
//   game:"BGMI",
//   solo:"team",
//   map:"erangle",
//   info:"info"
// },
// {
//   id:"2",
//   org:"name_of_organisation",
//   description:"description",
//   entryfee:"free",
//   prizepool:"5k",
//   registrations:"67",
//   time:"5 days left",
//   game:"BGMI",
//   solo:"team",
//   map:"erangle",
//   info:"info"
// },
// {
//   id:"3",
//   org:"name_of_organisation",
//   description:"description",
//   entryfee:"free",
//   prizepool:"5k",
//   registrations:"67",
//   time:"5 days left",
//   game:"BGMI",
//   solo:"team",
//   map:"erangle",
//   info:"info"
// },
// {
//   id:"4",
//   org:"name_of_organisation",
//   description:"description",
//   entryfee:"free",
//   prizepool:"5k",
//   registrations:"67",
//   time:"5 days left",
//   game:"BGMI",
//   solo:"team",
//   map:"erangle",
//   info:"info"
// },
// {
//   id:"5",
//   org:"name_of_organisation",
//   description:"description",
//   entryfee:"free",
//   prizepool:"5k",
//   registrations:"67",
//   time:"5 days left",
//   game:"BGMI",
//   solo:"team",
//   map:"erangle",
//   info:"info"
// },
  
  return (
    <div className='flex flex-col h-[100svh] w-full'>
      <Header/>
      {loading && (
        <div className="absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]">
          <div className="h-[50vh] bg-[#00000000]"></div>
          <img className="w-[100vw]" src={loadinggif} alt="Loading" />
          <div className="h-[20vh] bg-[#000000]"></div>
        </div>
      )}
      <div className='flex w-full h-[100vh] flex-col items-center bg-[#020808] overflow-y-scroll '>
      <div className='w-full bg-[#a45858]'>
        <div className='border-[2px] border-[#5e5e5e] flex justify-center items-center w-[20%] rounded-[10px] bg-[#ff000000] ml-4 mt-2 mb-2 text-[#8e8e8e]'>Filter</div>
      </div>
     <div className='w-[100%] h-[5svh]'>df</div>
      {tourarray.map((value) => (
                      <Tournament 
                        key={value.id}
                      id={value._id}
                        orgimg={orgimg}
                        org={value.org}
                        description={value.description}
                        entryfee={value.entryfee}
                        prizepool={value.prizepool}
                        registrations={value.registrationcount}
                        timeleft={value.time }
                        game={value.game }
                        solo={value.solo }
                        map={value.map }
                         info={value.info }

                      />
                    ))}
    
      </div>
     
      
      <Footer/>
    </div>
  )
}
