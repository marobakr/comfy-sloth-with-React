import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import productImge1 from '../../../images/product-7.jpeg'
import productImge2 from '../../../images/product-11.jpeg'
import productImge3 from '../../../images/product-8.jpeg'

const Feature = () => {
  return (
    <div className='featured_product'>
      <div className='main-title'>
        <h1>Featured Products</h1>
      </div>
      <div className='container'>
        <div className='rihgt' data-aos='fade-up' data-aos-duration='3000'>
          <Link to='/products/High_Back_Bench'>
            <div className='card'>
              <div className='img'>
                <img src={productImge3} alt='product1' />
                <div className='icnos'>
                  <FaSearch fontSize={25} />
                </div>
              </div>
              <div className='info'>
                <p className='title'>High-Back Bench</p>
                <p className='price'>$399.99</p>
              </div>
            </div>
          </Link>
        </div>
        <div data-aos='zoom-in'>
          <Link to='/products/Entertainment_Center'>
            <div className='card'>
              <div className='img'>
                <img src={productImge1} alt='product2' />
                <div className='icnos'>
                  <FaSearch fontSize={25} />
                </div>
              </div>
              <div className='info'>
                <p className='title'>Entertainment Center</p>
                <p className='price'>$599.99</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='left' data-aos='fade-down' data-aos-duration='3000'>
          <Link to='/products/Modern_Bookshelf'>
            <div className='card'>
              <div className='img'>
                <img src={productImge2} alt='product3' />
                <div className='icnos'>
                  <FaSearch fontSize={25} />
                </div>
              </div>
              <div className='info'>
                <p className='title'>Modern Bookshelf</p>
                <p className='price'>$319.99</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Link to='/products'>
        <button>all Products</button>
      </Link>
    </div>
  )
}

export default Feature
