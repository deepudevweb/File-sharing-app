import React from 'react'
import { LuMenu } from "react-icons/lu";
import Image from 'next/image';

function Topheader() {
  return (
    <div className='flex p-6 border-b-2 items-center justify-between md:justify-end'>
      <LuMenu className='md:hidden' />
      <Image src='/logo.svg' width={150} height={100} className='md:hidden' />
    </div>
  )
}

export default Topheader
