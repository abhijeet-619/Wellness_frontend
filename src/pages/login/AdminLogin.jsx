import React from 'react'
import Header from '../../component/header/Header'
import Loginlayout from '../../component/layout/Loginlayout'
import image from '/Orthopedic-amico.svg'

function AdminLogin() {
  return (
    <>
     <Header/>
      <Loginlayout placeholder='Email' imageSource={image} loginFor='admin'/>
    </>
  )
}

export default AdminLogin



