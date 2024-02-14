import React from 'react'
import Header from '../../component/header/Header'
import Loginlayout from '../../component/layout/Loginlayout'
import image from '/Doctors-rafiki.svg'

function HospitalLogin() {
  return (
    <>
    <Header/>
    <Loginlayout placeholder='User Id' imageSource={image} loginFor='hospital'/>
    </>
  )
}

export default HospitalLogin