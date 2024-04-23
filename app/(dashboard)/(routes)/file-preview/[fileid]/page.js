'use client'
import React, { useEffect } from 'react'

function FilePreview(params) {
    useEffect(() => {
        console.log(params?.fileId);
    }, [])
  return (
    <div>
      <h1>File Preview</h1>
    </div>
  )
}

export default FilePreview
