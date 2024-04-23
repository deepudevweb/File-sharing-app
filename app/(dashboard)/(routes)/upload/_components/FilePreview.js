import React from 'react'
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx";

function FilePreview({ file, removeFile }) {
  return (
    <div className='flex items-center justify-between gap-2 mt-5 border rounded border-blue-400'>
      <div className='flex items-center p-2'>
        <Image src='/file.jpeg' width={50} height={50} alt='file' />
        <div className='text-left'>
          <h2>{file.name}</h2>
          <h2 className='text-[12px] text-gray-500'>{file.type} / {(file.size/1024/1024).toFixed(2)}MB</h2>
        </div>
      </div>
      <RxCross2 className='cursor-pointer text-red-500' size={20} onClick={() => removeFile()} /> 
    </div>
  );
}

export default FilePreview;
