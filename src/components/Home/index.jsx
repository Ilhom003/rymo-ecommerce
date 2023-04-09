import React from 'react'
import Hero from '../../components/Hero'
import Brands from '../../components/Brands'
import NewArrivals from '../../components/NewArrivals'
import Collection from '../../components/Collection'
import Watches from '../../components/Watches'
import Shoes from '../../components/Shoes'
import Footer from '../../components/Footer'
// import { Modal, Drawer, Space, Dropdown } from 'antd';


const Home = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <NewArrivals />
            <Collection />
            <Watches />
            <Shoes />
            <Footer />
        </div>
    )
}

export default Home