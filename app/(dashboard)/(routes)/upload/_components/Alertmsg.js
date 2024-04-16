import React from 'react'
import { IoAlertCircleOutline } from "react-icons/io5";

function Alertmsg({msg}) {
  return (
    <div className='bg-red-400 p-4 m-2 flex items-center rounded-md text-white gap-5'>
      <IoAlertCircleOutline size={23} />
      {msg}
    </div>
  )
}

export default Alertmsg
