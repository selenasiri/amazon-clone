import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img 
          className='home_image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
          alt='banner' 
        />
        <div className='home_row'>
          <Product 
            title='The lean startup' 
            price={29.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
            rating={5} 
          />
          <Product />
        </div>

        <div className='home_row'>
          
          <Product />
          <Product />
          <Product />
        </div>

        <div className='home_row'>
          <Product /> 
        </div>
      </div>
    </div>
  )
}

export default Home
