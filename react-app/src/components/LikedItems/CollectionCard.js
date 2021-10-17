import React, {useContext} from "react";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./CollectionCard.css";
import {LikedItemsContext} from '../LikedItems/LikedItemsContext.js';



export default function CollectionCard() {

    const {combination, deleteLikedCombination, currentIndex, likedCombinationArr, combinationsList} = useContext(LikedItemsContext);


  return (
    <>
      <div className="collection-card">
        <div className="Collection_Item">
          
          {/*For each card that is at the current index, for each item show me the item*/}
           {likedCombinationArr[currentIndex].combination.map( item => (
            <img
              key={item._id}
              className={`liked-${item.type}`}
              src={'api/' + item.filePath}
              alt={item.productType}

            />
          ))} 
        </div>

      </div>
      <DeleteOutlineOutlinedIcon
        className="delete_icon"
        onClick={() => deleteLikedCombination(likedCombinationArr[currentIndex]._id)}

      />
    </>
  );
}

