import React from 'react'
import Sidenav from '../../Component/Sidenav'
import Topheader from '../../Component/Topheader'
import Uploadpage from '../../Component/Uploadpage'

function File() {
  return (
    <div>
      <div className='h-full md:w-64 flex-col fixed inset-y-0 md:flex hidden'>
        <Sidenav />
      </div>
      <div className='md:ml-64'>
         <Topheader /> 
         <Uploadpage />
      </div>
 </div>
     )
} 

export default File
