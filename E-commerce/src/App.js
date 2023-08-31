import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainHome from './our_padges/mainhome/MainHome'
import AboutPadge from './our_padges/about/about_padge'
import NavLinksMopile from './components/components_Home/nav/navMoplie'
import ProductPage from './our_padges/product/product_page'
import CartPadge from './our_padges/cart/'
import Progress from './progressbar/index'
import Nav from './components/components_Home/nav'
import Footer from './components/components_Home/footer'
/* Start import Single Padges */
import ModernPoster from './components/components_Product/SignlePadges/ModerbPoster/js'
import Armchair from './components/components_Product/SignlePadges/Armchair/js'
import SuedeArmchair from './components/components_Product/SignlePadges/SuedeArmchair/js'
import LeatherChair from './components/components_Product/SignlePadges/LatherChair/js'
import EmperorBed from './components/components_Product/SignlePadges/EmperorBed/js'
import AccentChair from './components/components_Product/SignlePadges/AccentChair/js'
import Shelf from './components/components_Product/SignlePadges/Shelf/js'
import ModernBookShelf from './components/components_Product/SignlePadges/ModernBookShelf/js'
import HighBackBench from './components/components_Product/SignlePadges/HighBackBench/js'
import WoodenDesk from './components/components_Product/SignlePadges/WoodenDesk/js'
import DiningTable from './components/components_Product/SignlePadges/DinigTable/js'
import EntertainmentCenter from './components/components_Product/SignlePadges/EntertainmentCenter/js'
import UtopiaSofa from './components/components_Product/SignlePadges/UtopiaSofa/js'
import LeatherSofa from './components/components_Product/SignlePadges/LeatherSofa/js'
import AlbanySectional from './components/components_Product/SignlePadges/AlbanySectional/js'
import SimpleChair from './components/components_Product/SignlePadges/SimpleChair/js'
import VaseTable from './components/components_Product/SignlePadges/VaseTable/js'
import SofaSet from './components/components_Product/SignlePadges/SofaSet/js'
import WoodenTable from './components/components_Product/SignlePadges/WoodenTable/js'
import WoodenBed from './components/components_Product/SignlePadges/WoodenBed/js'
import AlbanyTable from './components/components_Product/SignlePadges/AlbanyTable/js'

/* End import Single Padges */
const App = () => {
  return (
    <div className='App'>
      <Progress />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<MainHome />}></Route>
          <Route path='/about' element={<AboutPadge />}></Route>
          <Route path='/NavLinksMopile' element={<NavLinksMopile />}></Route>
          <Route path='/products' element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPadge />}></Route>

          {/* Start Routes For Single Padges In Product */}
          <Route
            path='/products/Modern_Poster'
            element={<ModernPoster />}
          ></Route>
          <Route
            path='/products/Accent_Chair'
            element={<AccentChair />}
          ></Route>

          <Route
            path='/products/Albany_Sectional'
            element={<AlbanySectional />}
          ></Route>
          <Route
            path='/products/Albany_Table'
            element={<AlbanyTable />}
          ></Route>
          <Route path='/products/Armchair' element={<Armchair />}></Route>
          <Route
            path='/products/Dining_Table'
            element={<DiningTable />}
          ></Route>
          <Route path='/products/Emperor_Bed' element={<EmperorBed />}></Route>
          <Route
            path='/products/Entertainment_Center'
            element={<EntertainmentCenter />}
          ></Route>
          <Route
            path='/products/High_Back_Bench'
            element={<HighBackBench />}
          ></Route>
          <Route
            path='/products/Leather_Chair'
            element={<LeatherChair />}
          ></Route>
          <Route
            path='/products/Leather_Sofa'
            element={<LeatherSofa />}
          ></Route>
          <Route
            path='/products/Modern_Bookshelf'
            element={<ModernBookShelf />}
          ></Route>
          <Route path='/products/Shelf' element={<Shelf />}></Route>
          <Route
            path='/products/Simple_Chair'
            element={<SimpleChair />}
          ></Route>
          <Route path='/products/Sofa_Set' element={<SofaSet />}></Route>
          <Route
            path='/products/Suede_Armchair'
            element={<SuedeArmchair />}
          ></Route>
          <Route path='/products/UtopiaSofa' element={<UtopiaSofa />}></Route>
          <Route path='/products/Vase_Table' element={<VaseTable />}></Route>
          <Route path='/products/Wooden_Bed' element={<WoodenBed />}></Route>
          <Route path='/products/Wooden_Desk' element={<WoodenDesk />}></Route>
          <Route
            path='/products/Wooden_Table'
            element={<WoodenTable />}
          ></Route>
          {/* End Routes For Single Padges In Product */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWithStore
