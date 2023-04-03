import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import Collection from '../components/Collection'
import Watches from '../components/Watches'
import Shoes from '../components/Shoes'
import Footer  from '../components/Footer'

const Root = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands/>
      <NewArrivals/>
      <Collection/>
      <Watches/>
      <Shoes/>
      <Footer/>
    </div>
  )
}

export default Root