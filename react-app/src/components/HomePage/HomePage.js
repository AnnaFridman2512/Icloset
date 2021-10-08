import React, {useContext } from "react";
import "./HomePage";
import BgImage from "../../Helpers/CarouselImage/homePage_bg.jpg";
import "../HomePage/HomePage.css";
// import MainComponent from "../MainComponent/MainComponent";
import {Link} from "react-router-dom";
import { ViewAllContext } from "../viewAll/ViewAllContext";




function HomePage() {

  const { items } = useContext(ViewAllContext);

  return (
    <div className="home" style={{ backgroundImage: `url(${BgImage})` }}>
      <h1 className="header">Nothing To Wear?</h1>
      {/* <div className="container">
        <MainComponent />
      </div> */}
      <Link to={ items.lengs > 0 ? '/addItems'  : '/mainComponent'} 
      className="getStartedBtn">Lets Get Started!</Link>
    </div>
  );
}

export default HomePage;
