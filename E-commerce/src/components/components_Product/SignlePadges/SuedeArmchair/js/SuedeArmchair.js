import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { RiStarFill } from 'react-icons/ri'
import { GrFormCheckmark } from 'react-icons/gr'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import { CreateAnimation } from '../../../product'

const SuedeArmchair = () => {
  const [activeImge, setActiveImge] = useState('defult')
  const [activeBtn, setActiveBtn] = useState('defultBtn')
  const [countOfProduct, setCountOfProduct] = useState(1)

  const Increase = () => {
    setCountOfProduct(countOfProduct + 1)
  }
  const decrease = () => {
    if (countOfProduct >= 2) {
      setCountOfProduct(countOfProduct - 1)
    }
  }
  // trigner infunction to aplay animation
  CreateAnimation()
  return (
    <div className='single_padge'>
      <div className='container'>
        <div className='our_img'>
          <div className='btn_back'>
            <Link to='/products'>
              <button className='back_to_home'>back to products</button>
            </Link>
          </div>
          <div className='defult_img'>
            {activeImge === 'defult' ? (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <img
                  src='	https://www.course-api.com/images/store/product-16.jpeg'
                  alt='defult'
                />
              </div>
            ) : (
              ''
            )}
            {activeImge === 'II_active' ? (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <img
                  src='https://www.course-api.com/images/store/extra-product-1.jpeg'
                  alt='alt_imge'
                />
              </div>
            ) : (
              ''
            )}
            {activeImge === 'III_active' ? (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <img
                  src='https://www.course-api.com/images/store/extra-product-2.jpeg'
                  alt='alt_imge'
                />
              </div>
            ) : (
              ''
            )}
            {activeImge === 'IV_active' ? (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <img
                  src='https://www.course-api.com/images/store/extra-product-3.jpeg'
                  alt='alt_imge'
                />
              </div>
            ) : (
              ''
            )}
            {activeImge === 'IIV_active' ? (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <img
                  src='https://www.course-api.com/images/store/extra-product-4.jpeg'
                  alt='alt_imge'
                />
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='gallery'>
            <img
              onClick={() => setActiveImge('defult')}
              className={`${activeImge === 'defult' ? 'active' : ''}`}
              src='	https://www.course-api.com/images/store/product-16.jpeg'
              alt=''
            />

            <img
              onClick={() => setActiveImge('II_active')}
              className={`${activeImge === 'II_active' ? 'active' : ''}`}
              src='https://www.course-api.com/images/store/extra-product-1.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('III_active')}
              className={`${activeImge === 'III_active' ? 'active' : ''}`}
              src='https://www.course-api.com/images/store/extra-product-2.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('IV_active')}
              className={`${activeImge === 'IV_active' ? 'active' : ''}`}
              src='https://www.course-api.com/images/store/extra-product-3.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('IIV_active')}
              className={`${activeImge === 'IIV_active' ? 'active' : ''}`}
              src='https://www.course-api.com/images/store/extra-product-4.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='our_info_cadr'>
          <h2>Suede Armchair</h2>
          <div className='vote'>
            <div className='stars'>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>
            <p>(10 customer reviews)</p>
          </div>
          <h5 className='price'>$159.99</h5>
          <p className='lorem'>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className='some_info'>
            <div className='I'>
              <span>Available :</span>
              <p>In Stock</p>
            </div>
            <div className='I'>
              <span>SKU :</span>
              <p>RecroK1VD8qVdMP5H</p>
            </div>
            <div className='I'>
              <span>Brand :</span>
              <p>Caressa</p>
            </div>
          </div>
          <hr className='line'></hr>
          <div className='selected_attintion'>
            <div className='select_color'>
              <p>colors :</p>
              <div className='spanes'>
                <button
                  onClick={() => setActiveBtn('defultBtn')}
                  className={`${activeBtn === 'defultBtn' ? 'colorRed' : ''}`}
                >
                  {activeBtn === 'defultBtn' ? (
                    <i className='icon'>
                      <GrFormCheckmark />
                    </i>
                  ) : (
                    ''
                  )}
                </button>
              </div>
            </div>
            <div className='number_of_your_product'>
              <div className='count'>
                <button>
                  <HiMinusSm onClick={() => decrease()} />
                </button>
                <h2>{countOfProduct}</h2>
                <button onClick={() => Increase()}>
                  <HiPlusSm />
                </button>
              </div>
              <Link to='/cart'>
                <button className='add_to_cart'>ADD TO CART</button>
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuedeArmchair
