import React from 'react'
import { Link } from 'react-router-dom'
import imageMain from './../../../images/store.a876f19f.jpeg'
const Landing = () => {
  return (
    <div className='landing_padge'>
      <div className='container'>
        <div className='right_section'>
          <h1>Design Your Comfort Zone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to='/products'>
            <button>shop now</button>
          </Link>
        </div>
        <div className='left_section'>
          <div
            data-aos='fade-left'
            data-aos-anchor='#example-anchor'
            data-aos-offset='500'
            data-aos-duration='500'
          >
            <img src={imageMain} alt='main_image' />
          </div>
          <div
            data-aos='fade-right'
            data-aos-anchor='#example-anchor'
            data-aos-offset='500'
            data-aos-duration='500'
            className='alt_img'
          >
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
