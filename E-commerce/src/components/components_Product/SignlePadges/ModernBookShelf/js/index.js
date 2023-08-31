import React from 'react'
// Main Padge
import ModernBookshelf from './ModernBookShefl'
/* our components */
import Nav from '../../../../components_Home/nav'
import Footer from '../../../../components_Home/footer'
import HeadrModernBookShelf from '../Headr_ModernBookShelf'

const Index = () => {
  return (
    <>
      <HeadrModernBookShelf />
      <ModernBookshelf />
    </>
  )
}

export default Index
