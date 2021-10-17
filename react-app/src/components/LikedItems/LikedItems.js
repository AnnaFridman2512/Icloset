import "./LikedItems.css";

import React, { useContext } from "react";
import CollectionCard from "./CollectionCard";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { LikedItemsContext } from "../LikedItems/LikedItemsContext.js";

export default function LikedItems() {
  
  const {likedCombinationArr, swipeLeft, swipeRight} = useContext(LikedItemsContext);




  return (
    <div className="liked-items">
      <div className="carusel">
        <div className="caruselInner">
          <div className="left">
            <ArrowBackIosIcon onClick={swipeLeft}/>
          </div>

          <div className="center">
            {likedCombinationArr.length > 0 && (
              <CollectionCard />
            )}

          </div>

          <div className="right">
            <ArrowForwardIosIcon onClick={ swipeRight }/>
          </div>
        </div>
      </div>
    </div>
  );
}
