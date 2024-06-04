import React from 'react'
import { Link, useParams } from "react-router-dom";
export default function Othersprofile() {
    const {_id} = useParams();
  return (
    <div className='h-[100vh] w-full bg-[red]'>
      sdgsdgds{_id}
    </div>
  )
}
