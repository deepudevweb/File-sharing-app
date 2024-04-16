"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { GiArmorUpgrade } from "react-icons/gi";

function Sidenav() {

 const [activeIndex, setactiveIndex] = useState(0)
  
  return (
    <div className='shadow-sm border-r-8 h-full'>
      <div className='p-5 border-b-2'>
        <Image src="/logo.svg" width={150} height={100} alt='app-logo'/>
      </div>
       <div className='flex flex-col'>
        <div className='flex items-center hover:text-primary hover:bg-gray-400 px-6'><MdOutlineFileUpload style={{ scale:'2' }} /><button className= 'flex p-4 gap-2 px-6 '>Upload</button></div>
        <div className='flex  items-center hover:text-primary hover:bg-gray-400 px-6'><MdOutlineInsertDriveFile style={{ scale:'2' }}  /> <button className='flex p-4 gap-2 px-6 hover:bg-gray-400'>Files</button> </div>
        <div className='flex items-center hover:text-primary hover:bg-gray-400 px-6'><GiArmorUpgrade style={{ scale:'2' }}  /><button className='flex p-4 gap-2 px-6 hover:bg-gray-400'>Upgrade</button></div>

       </div>
    </div>
  )
}

export default Sidenav
