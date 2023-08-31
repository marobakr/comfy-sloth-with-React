import React, { useState } from 'react'
import { createBrowserHistory } from 'history'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiStarFill } from 'react-icons/ri'
import { GrFormCheckmark } from 'react-icons/gr'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import { CreateAnimation } from '../../../product'
import {
  decrementAction,
  incrementAction,
  defultImg,
} from '../../../../../redux/action/counterAction'
const AccentChair = (props) => {
  const [activeImge, setActiveImge] = useState('defult')
  const [activeBtn, setActiveBtn] = useState('defultBtn')
  const [loading, setLoding] = useState(true)
  // to make the action called the reducer
  const deispatch = useDispatch()
  // this is arrow function and useSelector get the state insert the reducer
  // const countState = useSelector((state) => state.count)
  const { count } = useSelector((state) => state.counter)
  const Increase = () => {
    deispatch(incrementAction())
  }
  const decrease = (vl) => {
    deispatch(decrementAction(vl))
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
          <div className='defult_img '>
            {activeImge === 'defult' ? (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <img
                  src='https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160'
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
                  src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'
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
                  src='	https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg'
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
                  src='	https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg'
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
                  src='	https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg'
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
              src='https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160'
              alt=''
            />
            <img
              onClick={() => setActiveImge('II_active')}
              className={`${activeImge === 'II_active' ? 'active' : ''}`}
              src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('III_active')}
              className={`${activeImge === 'III_active' ? 'active' : ''}`}
              src='	https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('IV_active')}
              className={`${activeImge === 'IV_active' ? 'active' : ''}`}
              src='	https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('IIV_active')}
              className={`${activeImge === 'IIV_active' ? 'active' : ''}`}
              src='	https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='our_info_cadr'>
          <h2>Accent Chair</h2>
          <div className='vote'>
            <div className='stars'>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            <p>(33 customer reviews)</p>
          </div>
          <h5 className='price'>$259.99</h5>
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
              <p>Infruits Stock</p>
            </div>
            <div className='I'>
              <span>SKU :</span>
              <p>Recd1jIVIEChmiwhe</p>
            </div>
            <div className='I'>
              <span>Brand :</span>
              <p>Marcos</p>
            </div>
          </div>
          <hr className='line'></hr>
          <div className='selected_attintion'>
            <div className='select_color'>
              <p>colors :</p>
              <div className='spanes'>
                <button
                  onClick={() => setActiveBtn('defultBtn')}
                  className={`colorRed ${
                    activeBtn === 'defultBtn' ? 'activeBtn' : ''
                  }`}
                >
                  {activeBtn === 'defultBtn' ? (
                    <i className='icon'>
                      <GrFormCheckmark />
                    </i>
                  ) : (
                    ''
                  )}
                </button>
                <button
                  onClick={() => setActiveBtn('secondBtnArm')}
                  className={`armchair ${
                    activeBtn === 'secondBtnArm' ? 'activeBtn' : ''
                  }`}
                >
                  {activeBtn === 'secondBtnArm' ? (
                    <i className='icon'>
                      <GrFormCheckmark />
                    </i>
                  ) : (
                    ''
                  )}
                </button>
                <button
                  onClick={() => setActiveBtn('thirdBtnArm')}
                  className={`armchair_I ${
                    activeBtn === 'thirdBtnArm' ? 'activeBtn' : ''
                  }`}
                >
                  {activeBtn === 'thirdBtnArm' ? (
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
                  <HiMinusSm onClick={() => decrease(1)} />
                </button>
                <h2>{count}</h2>
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

export default AccentChair
