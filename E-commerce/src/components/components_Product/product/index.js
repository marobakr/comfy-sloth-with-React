import React, { useState, useEffect, useRef } from 'react'
import { OurData } from './our_data'
import { BsGridFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

// animation function to make animation when happing change in the padge
const CreateAnimation = () => {
  useEffect(() => {
    let myDiv = document.querySelector('.our_info_cadr')
    let getContainer = document.querySelector('.single_padge .container')
    let animatedDiv = document.createElement('div')
    animatedDiv.setAttribute('data-aos', 'zoom-in-up')
    animatedDiv.appendChild(myDiv)
    getContainer.append(animatedDiv)
  }, [])
  return false
}
export { CreateAnimation }

const Product = () => {
  const [info, setInfo] = useState(OurData)
  const [column, setColumn] = useState(false)
  const [input, setInput] = useState(3099)
  const [valueText, setValue] = useState('')
  const [active, setAcive] = useState('defult')
  const [selectedClient, setSelectedClient] = useState('lowest')
  const [brand, setBrand] = useState('all')
  const [checked, setChecked] = useState(true)

  // i does used it to get setState value
  const defultValueInput = useRef(null)
  const defultTextSearch = useRef(null)
  const BrandValue = useRef(null)
  const OptionValue = useRef(null)

  /* click an option Category to filter data to show its up to you ^_^ */
  // i was done resolve the bug >>>  explation how to resolve it ... i hade bas a pramter in setSate and also make fillter on the same pram for reason fillter creating new array and put the items insert new array ... when i make filter on another option to get the defrance data --- the function raturn null becuse not found data you wanna to get him and to reslove the bug using another method but is not use case .. i was make setState of initail state after even i trigger the functoin ... fainaly the resolve > i make fillter on inital state "ourData"

  const LivingRoom = () => {
    // this function will be delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('living-room')
    setInfo(() => {
      let newCard = OurData.filter((item) => item.type === 'living')
      return newCard
    })
  }
  console.log(info)
  const Kitchen = () => {
    // this function will br delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('kitchen')
    setInfo(() => {
      let newCard = OurData.filter((info) => info.type === 'kitchen')
      return newCard
    })
  }
  const Office = () => {
    // this function will br delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('office')
    setInfo(() => {
      let newCard = OurData.filter(
        (info) => info.price <= input && info.type === 'office'
      )
      return newCard
    })
  }
  const Bedroom = () => {
    // this function will br delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('bedroom')
    setInfo((item) => {
      let newCard = OurData.filter((info) => info.type === 'bedroom')
      return newCard
    })
  }
  // when i will resolve price function ... i will make tow condationes >> 1- get any items equal to the value of price
  // >> 2- get any items.type equal your type
  const Dining = () => {
    // this function will br delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('dining')
    setInfo(() => {
      let newCard = OurData.filter((info) => info.type === 'dining')
      return newCard
    })
  }
  const Kids = () => {
    // this function will br delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('kids')
    setInfo(() => {
      let newCard = OurData.filter((info) => info.type === 'kids')
      return newCard
    })
  }
  const All = () => {
    // this function will br delete when i cretea a dyanmic function
    DontUseCaseClearCategory()
    setAcive('defult')
    setInfo(OurData)
  }
  // dispaly column card when i selected this option from setings
  const DisplayColumn = () => {
    return (
      <div className='our_card'>
        {info.map((box) => {
          const { id, img, icon, title, price, type } = box
          if (id % 2 === 0) {
            return (
              <div style={{ width: '100%' }} data-aos='zoom-in-down'>
                <div className='card' key={id}>
                  <div
                    className='img'
                    onClick={() => {
                      switchRoutes(id)
                    }}
                  >
                    <img src={img} alt='' />
                    <div className='icnos'>{icon}</div>
                  </div>
                  <div className='title__info'>
                    <p>{title}</p>
                    <p>$ {price}</p>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div style={{ width: '100%' }} data-aos='zoom-in-left'>
                <div className='card' key={id}>
                  <div
                    className='img'
                    onClick={() => {
                      switchRoutes(id)
                    }}
                  >
                    <img src={img} alt='' />
                    <div className='icnos'>{icon}</div>
                  </div>
                  <div className='title__info'>
                    <p>{title}</p>
                    <p>$ {price}</p>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
  //  dispaly row card when i selected this option from setings
  const DisplayRow = () => {
    return (
      <div className=' our_card_row'>
        {info.map((box) => {
          const { id, img, icon, title, price, type } = box
          if (id % 2 === 0) {
            return (
              <div
                style={{ width: '100%' }}
                data-aos='fade-up'
                data-aos-easing='linear'
                data-aos-duration='800'
              >
                <div className='card_row' key={id}>
                  <div
                    className='img_row'
                    onClick={() => {
                      switchRoutes(id)
                    }}
                  >
                    <img src={img} alt='' />
                    <div className='icnos_row'>{icon}</div>
                  </div>
                  <div className='title__info_row'>
                    <h4>{title}</h4>
                    <p className='price_row'>$ {price}</p>
                    <p className='lorem_row'>
                      Cloud bread VHS hell of banjo bicycle rights jianbing
                      umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist
                      yr dreamcatcher waistcoat, authentic ...
                    </p>
                    <button
                      onClick={() => {
                        switchRoutes(id)
                      }}
                    >
                      details
                    </button>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='800'
                key={id}
              >
                <div className='card_row' key={id}>
                  <div
                    className='img_row'
                    onClick={() => {
                      switchRoutes(id)
                    }}
                  >
                    <img src={img} alt='' />
                    <div className='icnos_row'>{icon}</div>
                  </div>
                  <div className='title__info_row'>
                    <h4>{title}</h4>
                    <p className='price_row'>$ {price}</p>
                    <p className='lorem_row'>
                      Cloud bread VHS hell of banjo bicycle rights jianbing
                      umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist
                      yr dreamcatcher waistcoat, authentic ...
                    </p>
                    <button
                      onClick={() => {
                        switchRoutes(id)
                      }}
                    >
                      details
                    </button>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }

  // fnction Switch to handle Routes
  const switchRoutes = (id) => {
    switch (id) {
      case 1:
        window.location = '/products/Modern_Poster'
        break
      case 3:
        window.location = '/products/Armchair'
        break
      case 4:
        window.location = '/products/Suede_Armchair'
        break
      case 5:
        window.location = '/products/Leather_Chair'
        break
      case 6:
        window.location = '/products/Emperor_Bed'
        break
      case 7:
        window.location = '/products/Accent_Chair'
        break
      case 8:
        window.location = '/products/Shelf'
        break
      case 9:
        window.location = '/products/Modern_Bookshelf'
        break
      case 10:
        window.location = '/products/High_Back_Bench'
        break
      case 11:
        window.location = '/products/Wooden_Desk'
        break
      case 12:
        window.location = '/products/Dining_Table'
        break
      case 13:
        window.location = '/products/Entertainment_Center'
        break
      case 14:
        window.location = '/products/UtopiaSofa'
        break
      case 15:
        window.location = '/products/Leather_Sofa'
        break
      case 16:
        window.location = '/products/Albany_Sectional'
        break
      case 17:
        window.location = '/products/Simple_Chair'
        break
      case 18:
        window.location = '/products/Vase_Table'
        break
      case 19:
        window.location = '/products/Sofa_Set'
        break
      case 20:
        window.location = '/products/Wooden_Desk_2'
        break
      case 21:
        window.location = '/products/Wooden_Table'
        break
      case 22:
        window.location = '/products/Wooden_Bed'
        break
      case 23:
        window.location = '/products/Albany_Table'
        break
      default:
        window.location = '/'
    }
  }

  /* notes 
  - if you use an function components like this... "const name = () => {}" ! when you called this function to triger --- use event {() => name of function}
    also.. 
  - if you use an named function like this... "function name() {}" ! when you called this function to triger --- use event { just name of function}
  - once i called this function "getConslo()" wehout eny action to tragier a function --- the function well tragier forever ---- for that,  you should put a function in event same onClick={your function}
   notse 
*/

  // update the state of a function when i selected value of option

  function handleSelectChangeOption() {
    let currentValueOption = OptionValue.current.value
    setSelectedClient(currentValueOption)
  }
  // check of the value of state to make sort as price or alphapitic
  const SelectOptionBox = () => {
    handleSelectChangeOption()
    DontUseCaseClearSort()
    if (selectedClient === 'za') {
      setInfo(() => {
        let newArr = OurData.sort((a, b) => (a.title > b.title ? 1 : -1))
        return newArr
      })
    } else if (selectedClient === 'az') {
      setInfo(() => {
        let newArr = OurData.sort((a, b) => (a.title > b.title ? -1 : 1))
        return newArr
      })
    } else if (selectedClient === 'lowest') {
      setInfo(() => {
        let newArr = OurData.sort((a, b) => b.price - a.price)
        return newArr
      })
    } else if (selectedClient === 'highest') {
      setInfo(() => {
        let newArr = OurData.sort((a, b) => a.price - b.price)
        return newArr
      })
    }
  }
  const handleOnChangeInput = () => {
    // DontUseCaseClearPrice()
    let currentValueInput = defultValueInput.current.value
    // to update new value of input
    setInput(currentValueInput)
    // do filtter when value equal or lowest list of price
    setInfo(() => {
      return OurData.filter((list) => currentValueInput >= list.price)
    })
  }
  // update the state of a function when i selected value of option brand
  function UpdateState() {
    let currentValueBrand = BrandValue.current.value
    setBrand(currentValueBrand)
  }
  // check of the value of state to make sort as brand
  const SelectBrandBox = () => {
    DontUseCaseClearCompany()
    if (brand === 'marcos') {
      handleOnChangeInput()
      setInfo(() => {
        let newArr = info.filter((list) => list.brand === 'marcos')
        return newArr
      })
    } else if (brand === 'ikea') {
      handleOnChangeInput()
      setInfo(() => {
        let newArr = info.filter((list) => list.brand === 'ikea')
        return newArr
      })
    } else if (brand === 'lidy') {
      setInfo(() => {
        let newArr = OurData.filter((list) => list.brand === 'liddy')
        return newArr
      })
    } else if (brand === 'careesa') {
      setInfo(() => {
        let newArr = OurData.filter((list) => list.brand === 'caressa')
        return newArr
      })
    } else if (brand === 'all') {
      setInfo(OurData)
    }
  }
  // when the client ensert worning data --- this massge will be appear
  const NotFonudProduct = () => {
    return (
      <h5
        style={{
          fontSize: '1rem',
          letterSpacing: '0.1rem',
          lineHeight: '1.25',
          marginBottom: '0.75rem',
        }}
      >
        Sorry, no products matched your search.
      </h5>
    )
  }
  // when the client change the input price radio as son  you will show any product fit with your price

  // when the client insert any word on input search  as son you will show any product fit with your word search
  const handleOnChangeSearch = (e) => {
    let currentTextOfSearch = defultTextSearch.current.value
    // To Update New TextValue of Search
    setValue(currentTextOfSearch)
    // do filtter when text containe any words
    // DontUseCaseClearSearch()
    let newCard = OurData.filter((list) =>
      list.title.toLowerCase().startsWith(currentTextOfSearch.toLowerCase())
    )
    setInfo(newCard)
  }
  // clear all optin at card category
  const Clear = () => {
    console.log('clear')
    setInfo(OurData)
    setColumn(false)
    setInput(3099)
    setValue('')
    setAcive('defult')
    setBrand('all')
    setChecked(!false)
  }
  // thi method not use case but i will found another method in anothre time
  const DontUseCaseClearSearch = () => {
    setAcive('defult')
    setBrand('all')
    setInput(3099)
    setSelectedClient('lowest')
    setChecked(!false)
  }
  const DontUseCaseClearCategory = () => {
    setValue('')
    setBrand('all')
    setInput(3099)
    setSelectedClient('lowest')
    setChecked(!false)
  }
  const DontUseCaseClearCompany = () => {
    setAcive('defult')
    setValue('')
    setInput(3099)
    setSelectedClient('lowest')
    setChecked(!false)
  }
  const DontUseCaseClearPrice = () => {
    setValue('')
    setBrand('all')
    setAcive('defult')
    setSelectedClient('lowest')
    setChecked(!false)
  }
  const DontUseCaseClearSort = () => {
    setValue('')
    setBrand('all')
    setInput(3099)
    setAcive('defult')
    setChecked(!false)
  }
  const DontUseCaseClearFree = () => {
    setValue('')
    setBrand('all')
    setInput(3099)
    setAcive('defult')
  }
  const handleClick = () => {
    DontUseCaseClearFree()
    setChecked(!checked)
    console.log(checked)
    // this condation i not understand it
    if (checked) {
      setInfo(() => {
        let myArr = OurData.filter((list) => list.state === 'free')
        return myArr
      })
    } else if (!checked) {
      setInfo(OurData)
    }
  }
  return (
    <div className='product'>
      <div className='container'>
        <div className='left_card_category'>
          <input
            style={{ textTransform: 'lowercase' }}
            type='search'
            placeholder='Search'
            value={valueText}
            ref={defultTextSearch}
            onInput={handleOnChangeSearch}
          />
          <div className='our_category'>
            <h4>Category</h4>
            <div className='our_button'>
              <button
                className={`${active === 'defult' ? 'active' : null}`}
                onClick={() => All()}
              >
                all
              </button>
              <button
                className={`${active === 'office' ? 'active' : null}`}
                onClick={() => Office()}
              >
                office
              </button>
              <button
                className={`${active === 'living-room' ? 'active' : null}`}
                onClick={() => LivingRoom()}
              >
                living room
              </button>
              <button
                className={`${active === 'kitchen' ? 'active' : null}`}
                onClick={() => Kitchen()}
              >
                kitchen
              </button>
              <button
                className={`${active === 'bedroom' ? 'active' : null}`}
                onClick={() => Bedroom()}
              >
                bedroom
              </button>
              <button
                className={`${active === 'dining' ? 'active' : null}`}
                onClick={() => Dining()}
              >
                dining
              </button>
              <button
                className={`${active === 'kids' ? 'active' : null}`}
                onClick={() => Kids()}
              >
                kids
              </button>
            </div>
          </div>
          <div className='our_company'>
            <h4>company</h4>
            <select
              ref={BrandValue}
              value={brand}
              onChange={UpdateState}
              onClick={() => SelectBrandBox()}
              name='company'
              id='company'
            >
              <option value='all'>all</option>
              <option value='marcos'>marcos</option>
              <option value='lidy'>lidy</option>
              <option value='ikea'>ikea</option>
              <option value='careesa'>careesa</option>
            </select>
          </div>
          <div className='our_colors'>
            <h4>color</h4>
            <div className='colors'>
              <button>all</button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='our_price'>
            <h4>price</h4>
            <p>$ {input}</p>
            <input
              min={0}
              max={3099}
              type='range'
              value={input}
              ref={defultValueInput}
              // onInput={() => Change()}
              onInput={() => handleOnChangeInput()}
              step='1'
            />
          </div>
          <div className='selcet'>
            <label htmlFor='title'>free shipping</label>
            <input
              onChange={() => handleClick()}
              id='title'
              className='checkbox'
              type='checkbox'
              checked={!checked}
            />
          </div>
          <div className='clear'>
            <button onClick={() => Clear()}>clear filters</button>
          </div>
        </div>
        <div className='right_card_product'>
          <div className='frist_line_section'>
            <div className='icons'>
              <button
                className={`${column ? 'active_button' : 'notactive'}`}
                onClick={() => setColumn(true)}
              >
                <BsGridFill fontSize={20} />
              </button>
              <button
                className={`${column ? 'notactive' : 'active_button'}`}
                onClick={() => setColumn(false)}
              >
                <FaBars />
              </button>
            </div>
            <div className='title'>{info.length} products found</div>
            <span></span>
            <div className='sortby'>
              <p>sort by</p>
              <select
                ref={OptionValue}
                value={selectedClient}
                onChange={() => SelectOptionBox()}
                name='sort'
                id='sortCompany'
              >
                <option value='lowest'>price (lowest)</option>
                <option value='highest'>price (highest)</option>
                <option value='az'>Name (A-Z)</option>
                <option value='za'>Name (Z-A)</option>
              </select>
            </div>
          </div>
          {info.length === 0 ? <NotFonudProduct /> : null}
          {column && <DisplayColumn />}
          {column || <DisplayRow />}
        </div>
      </div>
    </div>
  )
}
export default Product
