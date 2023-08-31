import React from 'react'
import { Link } from 'react-router-dom'
const AltHeadr = (props) => {
  return (
    <div className='alt_headr'>
      <div className='container'>
        <h3>
          <Link to='/'>home </Link>
          <Link to='/products'>{props.name}</Link>
          {/* {' / products '} */}
        </h3>
      </div>
    </div>
  )
}

export default AltHeadr
