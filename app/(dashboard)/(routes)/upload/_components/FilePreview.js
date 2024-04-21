import React from 'react'
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx";

function FilePreview(file, removeFile) {
  return (
    <div className='flex items-center gap-2 mt-5 border rounded border-blue-400'>
      <div className='flex items-center p-2'>
      <Image src='/file.jpeg' width={50} height={50} alt='file' />
      <div >
        <h2 className='text-2xl text-black'>{file.name}</h2>
        <h2 className='tet-gray-400'>{file?.type} / {(file.size/1024/1024)}MB</h2>
      </div>
      </div>
      <RxCross2 className='text-red-500 cursor-pointer' onClick={()=> removeFile()}/>
    </div>
  )
}

export default FilePreview
