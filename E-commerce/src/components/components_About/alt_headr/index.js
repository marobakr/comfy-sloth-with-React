import React from 'react'
import { Link } from 'react-router-dom'

const AltHeadr = () => {
  return (
    <div className='alt_headr'>
      <div className='container'>
        <h3>
          <Link to='/'>Home</Link>
          {' / About '}
        </h3>
      </div>
    </div>
  )
}

export default AltHeadr
