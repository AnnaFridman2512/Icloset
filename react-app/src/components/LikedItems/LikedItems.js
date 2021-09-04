import "./LikedItems.css";

import React, { useState, useEffect } from "react";
import CollectionCard from "./CollectionCard";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const likedItems = [{id: 1 , combination: [ 
    {
        "type": "shoes",
        "productType": "shoes",
        "imageUrl": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380353/01/sv01/fnd/IND/fmt/png"
    },
    {
        "type": "buttom",
        "productType": "pants",
        "imageUrl": "https://op1.0ps.us/original/opplanet-black-diamond-alpine-light-climbing-pants-womens-wild-rose-extra-small-apo9m86012xsm1-main"
    },
    {
        "type": "top",
        "productType": "t-shirt",
        "imageUrl": "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540"
    },]}]

export default function LikedItems() {

  const [ collection, setCollection ] = useState(0);

  React.useEffect (() => {
      setCollection(likedItems[0].combination)


  },[])
 



  return (
    <div className="liked-items">
        <div className="carusel">
            <div className="caruselInner">

                <div className="left" onClick={() => {
                    // currImg > 0 && setCurrImg(currImg - 1);
                }}>
                    <ArrowBackIosIcon />
                </div>
                <div className="center">


                    <CollectionCard collection={likedItems[0].combination} />
                   
                
                </div>
                <div className="right" onClick={() => {
                    // currImg < images.length - 1 && setCurrImg(currImg + 1);
                }}>
                    <ArrowForwardIosIcon />
                </div>

            </div>
        </div>

      
    </div>
  );
}
