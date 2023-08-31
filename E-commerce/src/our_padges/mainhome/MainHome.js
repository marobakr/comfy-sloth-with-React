import React, { useState } from 'react'
import Landing from '../../components/components_Home/landingpadge'
import Feature from '../../components/components_Home/featuredproducts'
import Services from '../../components/components_Home/services'
import Form from '../../components/components_Home/form'
import AltHeadr from '../../components/components_Product/alt_headr'

const MainHome = () => {
  return (
    <div>
      {/* <AltHeadr /> */}
      <Landing />
      <Feature />
      <Services />
      <Form />
    </div>
  )
}

export default MainHome
