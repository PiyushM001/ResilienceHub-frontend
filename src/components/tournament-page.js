import React from 'react'
import Tournament from './tournament'
import Footer from './footer'
import Header from './header'
import orgimg from '../Images/org3.png'
export default function Tournamentpage() {
  const information=[
{
  id:"0",
  org:"name_of_organisation",
  orgimg:{orgimg},
  description:"description",
  entryfee:"free",
  prizepool:"5k",
  registrations:"67",
  time:"5 days left",
  game:"BGMI",
  solo:"team",
  map:"erangle",
  info:"info"
},
{
  id:"1",
  org:"name_of_org222",
  description:"description",
  entryfee:"free",
  prizepool:"5k",
  registrations:"67",
  time:"5 days left",
  game:"BGMI",
  solo:"team",
  map:"erangle",
  info:"info"
},
{
  id:"2",
  org:"name_of_organisation",
  description:"description",
  entryfee:"free",
  prizepool:"5k",
  registrations:"67",
  time:"5 days left",
  game:"BGMI",
  solo:"team",
  map:"erangle",
  info:"info"
},
{
  id:"3",
  org:"name_of_organisation",
  description:"description",
  entryfee:"free",
  prizepool:"5k",
  registrations:"67",
  time:"5 days left",
  game:"BGMI",
  solo:"team",
  map:"erangle",
  info:"info"
},
{
  id:"4",
  org:"name_of_organisation",
  description:"description",
  entryfee:"free",
  prizepool:"5k",
  registrations:"67",
  time:"5 days left",
  game:"BGMI",
  solo:"team",
  map:"erangle",
  info:"info"
},
{
  id:"5",
  org:"name_of_organisation",
  description:"description",
  entryfee:"free",
  prizepool:"5k",
  registrations:"67",
  time:"5 days left",
  game:"BGMI",
  solo:"team",
  map:"erangle",
  info:"info"
},
  ]
  return (
    <div className='flex flex-col h-[100svh] w-full'>
      <Header/>
     
      <div className='flex w-full h-[100vh] flex-col items-center bg-[#000000] overflow-y-scroll '>
      <div className='w-full bg-[#000000]'>
        <div className='border-[2px] border-[#5e5e5e] flex justify-center items-center w-[20%] rounded-[10px] bg-[#ff000000] ml-4 mt-2 mb-2 text-[#8e8e8e]'>Filter</div>
      </div>
     
      {information.map((value) => (
                      <Tournament 
                        key={value.id}
                        orgimg={orgimg}
                        org={value.org}
                        description={value.description}
                        entryfee={value.entryfee}
                        prizepool={value.prizepool}
                        registrations={value.registrations}
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
