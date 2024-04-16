import React from 'react'
import Sidenav from './Component/Sidenav'
import Topheader from './Component/Topheader'
import UploadForm from './(routes)/upload/_components/UploadForm'

function Layout({ children }) {
  return (
    <div>
      <div>
        <Sidenav />
      </div>
    </div>
  )
}

export default Layout
