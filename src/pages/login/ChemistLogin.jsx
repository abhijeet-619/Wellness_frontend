import React from 'react'
import Header from '../../component/header/Header'
import Loginlayout from '../../component/layout/Loginlayout'
import image from '/chemist.svg'

function ChemistLogin() {
  return (
   <>
    <Header/>
    <Loginlayout placeholder='Email' imageSource={image} loginFor='chemist'/>

    </>
  )
}

export default ChemistLogin