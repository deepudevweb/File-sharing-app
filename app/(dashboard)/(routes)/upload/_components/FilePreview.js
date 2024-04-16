import React from 'react'
import Image from 'next/image'

function FilePreview(file) {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/file.jpeg' width={50} height={50} alt='file' />
      <div >
        <h2 className='text-2xl text-black'>{file.name}</h2>
        <h2 className='tet-gray-400'>{file?.type} /{(file.size/1024/1024).toFixed(5)}MB</h2>
      </div>
    </div>
  )
}

export default FilePreview
