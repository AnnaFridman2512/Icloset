import React from 'react'
import { Link } from 'react-router-dom'
// import Carusel from './Carusel.js'

import BgImage from '../../Helpers/CarouselImage/homePage_bg.jpg';
import '../HomePage/HomePage.css'


function HomePage() {
    return (
        <div className='home' style={{backgroundImage: `url(${BgImage})`}}>
            <div className="container" >
                <Link to='/items' >
                {/*<button className='getStartedBtn'>Get Started!</button>*/}
                </Link>
            </div>
       
           {/* <Carusel /> */}
      
        </div>
    )
}

export default HomePage
