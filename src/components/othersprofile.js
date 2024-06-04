import React from 'react'
import { Link, useParams } from "react-router-dom";
import loadinggif from '../Images/loading.gif';
export default function Othersprofile() {
    const {_id} = useParams();
    const [loading, setLoading] = useState(true);

  return (
    <div className='h-[100svh] w-full bg-[red]'>
         sdgsdgds{_id}
         {loading && (
            <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'>
              <div className='h-[30vh] bg-[#000000]'></div>
              <img className='w-[100vw]' src={loadinggif} alt="Loading" />
              <div className='h-[30vh] bg-[#000000]'></div>
            </div>
          )}
     
    </div>
  )
}
