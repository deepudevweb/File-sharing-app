"use client"
import React from 'react'
import UploadForm from '../(routes)/upload/_components/UploadForm'

function Uploadpage() {
  return (
    <div className='p-5 px-8 md:px-28'>
         <h2 className='text-[20px] text-center m-5'> Start <strong className='text-primary'>uploading</strong> file and <strong className='text-primary'>share</strong> it  </h2>
      <UploadForm />
    </div>
  )
}

export default Uploadpage
