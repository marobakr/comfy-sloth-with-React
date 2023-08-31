import React from 'react'
import AltHeadr from '../../components/components_Product/alt_headr'
import Product from '../../components/components_Product/product'
import Loding from '../../components/components_Home/loading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutpadge from '../about/about_padge'
const productPage = () => {
  return (
    <>
      <AltHeadr name={window.location.pathname} />
      <Loding />
      <Product />
    </>
  )
}

export default productPage
