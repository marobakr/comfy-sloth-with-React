import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'

const NavMoplie = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
  }, [])

  if (size >= 992) {
    const pathnameNew = (window.location = '/')
  }

  return (
    <div className={`links_mopile`}>
      <div className='container'>
        <div className='img_nav close_icons'>
          <Link to='/'>
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg'
              alt=''
            />
          </Link>
          <div className='close'>
            <Link to='/'>
              <RiCloseCircleFill fontSize={25} />
            </Link>
          </div>
        </div>
        <div className='links'>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </div>
        <div className='icons_mopile'>
          <div className='icon_mopile'>
            <p>cart</p>
            <FaShoppingCart size={25} />
          </div>
          <div className='icon_mopile'>
            <p>login</p>
            <FaUserPlus size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMoplie
