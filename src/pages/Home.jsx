import React from 'react'
import Header from '../components/Header/Header'
import Ijarachi from '../components/Ijarachi/Ijarachi'
import Navbar from '../components/Navbar/Navbar'
import Cards from '../components/cards/cards'
import CardBlock from '../components/Card_Block/CardBlock'
import SimilarProduct from '../components/SimilarProduct/SimilarProduct'
import Ad from '../components/Ad/Ad'
import Image from '../components/Imagee/Image'
import Footer from '../components/footer/footer'
import Slider from '../components/Slider/Slider'
import Financial from '../components/Financial step/Financial'
import Zakaz from '../components/Zakaz/Zakaz'

const Home = () => {
  return (
    <>
  <Header />
      <Ijarachi />
      <Navbar />
      <Slider />
      <Cards />
      {/* <CardBlock /> */}
      <SimilarProduct />
      <Ad />
      <Image />
      <Financial/>
      <Zakaz/>
      <Footer />
    </>
  )
}

export default Home