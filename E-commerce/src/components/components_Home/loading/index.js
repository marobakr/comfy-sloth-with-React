import React, { useEffect, useRef } from 'react'

const Loding = () => {
  const preloader = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      preloader.current.style = [
        `display:none;
      `,
      ]
    }, 800)
  }, [])
  return (
    <div ref={preloader} className='preloader'>
      <div className='loader-wrapper'>
        <div className='loader'></div>
      </div>
    </div>
  )
}

export default Loding
