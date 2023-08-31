import React from 'react'
import { Link } from 'react-router-dom'

const AltHeadr = (props) => {
  console.log()
  return (
    <div className='alt_headr'>
      <div className='container'>
        <h3>
          <Link to='/'> Home</Link>
          <Link to='/products'> / products</Link>
          {' / Accent Chair'}
        </h3>
      </div>
    </div>
  )
}

export default AltHeadr
