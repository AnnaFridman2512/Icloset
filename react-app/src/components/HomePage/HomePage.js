import React from 'react'
// import Carusel from './Carusel.js'
import './HomePage';
import BgImage from '../../Helpers/CarouselImage/homePage_bg.jpg';
import '../HomePage/HomePage.css'
import MainComponent from '../MainComponent/MainComponent';


function HomePage() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BgImage})` }}>
            <h1 className="header">Nothing To Wear?</h1>
            <div className="container" >
                {/* <h1>Here MainComponent should be rendered</h1> */}
                <MainComponent />
            </div>

            {/* <Carusel /> */}

        </div>
    )
}

export default HomePage
