'use client'
import Sidenav from '@/app/(dashboard)/Component/Sidenav'
import Topheader from '@/app/(dashboard)/Component/Topheader'
import React, { useEffect } from 'react'

function Filepreview({ params }) {
    useEffect(() => {
        console.log(params?.fileId);
    }, [])
    return (
        <div> 
            <div className='h-full md:w-64 flex-col fixed inset-y-0 md:flex hidden'>
                <Sidenav />
            </div>
            <div className='md:ml-64'>
                <Topheader />
                <h1>filepreview</h1>
            </div>
        </div>
    )
}

export default Filepreview
