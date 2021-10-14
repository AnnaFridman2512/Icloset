import React, {useContext} from "react";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./CollectionCard.css";
import {LikedItemsContext} from '../LikedItems/LikedItemsContext.js';



export default function CollectionCard() {
    const {combination, deleteCombination, currentIndex} = useContext(LikedItemsContext);
  
  return (
    <>
      <div className="collection-card">
        <div className="Collection_Item">
          {/*For each card that is at the current index, for each item show me the item*/}
          {combination[currentIndex].combination.map(({ productType, filePath, type, _id }) => (
            <img
              key={_id}
              className={`liked-${type}`}
              src={'api/' + filePath}
              alt={productType}

            />
          ))}
        </div>

      </div>
      <DeleteOutlineOutlinedIcon
        className="delete_icon"
        onClick={() => deleteCombination(combination[currentIndex]._id)}

      />
    </>
  );
}

