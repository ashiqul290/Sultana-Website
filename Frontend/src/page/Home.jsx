import React from 'react'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Services from '../Components/ServiceGrid'
import BusinessSVG from '../Components/BusinessSVG'
import AboutSection from '../Components/AboutSection'
import MarkentingSeciton from '../Components/MarkentingSeciton'

const Home = () => {
  return (
    <>
    <Banner />
    <Features />
    <AboutSection />
    <Services />
    <BusinessSVG />
    <MarkentingSeciton />
    </>
  )
}

export default Home