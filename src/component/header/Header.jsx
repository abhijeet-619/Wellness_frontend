import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <header>
 <div className="navbar">
    <Link to={'/'} style={{ flex:"1 1 0%",marginLeft:"1rem"}}><span className='title'> Mywellness</span></Link>
    <ul className="navbar-nav">
        <li className="nav-item"><Link to={'/login/admin'}>Login as Admin</Link></li>
        <li className="nav-item"><Link to={'/login/chemist'}>Login as Chemist</Link></li>
        <li className="nav-item"><Link to={'/login/hospital'}>Login as Hospital</Link></li>
    </ul>
</div>
</header>
  )
}

export default Header