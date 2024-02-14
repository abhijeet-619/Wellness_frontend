import React from 'react'
import Header from '../../component/header/Header'
import mainImage from "/main.svg";
function Home() {
  return (
    <>
    <Header/>
            <div>
                <div className='homepage'>
                    <div className='homepageExternal'>
                        <p >Because Health</p>
                        <p >Matters.</p>
                    </div>
                    <div>
                        <img className='imgmain' src={mainImage} alt='exercise img' />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Home