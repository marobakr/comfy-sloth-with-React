import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaUserPlus, FaBars } from 'react-icons/fa'
import NavMopile from './navMoplie'

const Nav = () => {
  // const [show, hidden] = useState(false)
  return (
    <nav>
      <div className='container'>
        <div className='img_nav'>
          <Link to='/'>
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg'
              alt=''
            />
          </Link>
        </div>
        <div className='nav_links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </div>
        <div className='nav_icons'>
          <div className='bars_icon'>
            {/* i was convert click on bars icons to Link routes */}
            {/* <FaBars size={25} onClick={() => hidden(!show)} />
            {show && <NavMopile />} */}
            <Link to='/NavLinksMopile'>
              <FaBars size={25} />
            </Link>
          </div>
          <div className='icon'>
            <p>cart</p>
          </div>
          <div className='icon'>
            <p>login</p>
            <FaUserPlus size={25} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
