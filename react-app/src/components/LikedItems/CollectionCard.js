import React, { useState, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./CollectionCard.css";

function CollectionCard({ collection }) {
  const [likedcollection, setCollection] = useState([]);

  // useEffect(() => {
  //     fetch('http://localhost:8080/collection')
  //     .then(res => {
  //         return res.json();
  //     })
  //     .then(data => {
  //         setlikedCollection(data)
  //     })
  // }, [])

  const deletebtn = (id) => {
    //   const newCollection = likedcollection.filter(likedcollection => likedcollection.id !== id);
    //   setLikedCollection(newCollection)
  };

  return (
    <div>
      <div className="collection-card">
        <div className="Collection_Item"></div>
        <DeleteOutlineOutlinedIcon
          className="delete_icon"
          onClick={deletebtn}
        />
      </div>

      <div
        className={
          collection[0].productType !== "dress"
            ? "main-component"
            : "main-component-dress"
        }
      >
        <img
          className={collection[0].productType !== "dress" ? "first" : "dress"}
          src={collection[0].imageUrl}
          alt="top item "
        />
        {collection[0].productType !== "dress" ? (
          <img
            className="third"
            src={collection[1].imageUrl}
            alt="buttom item "
          />
        ) : null}
        <img
          className="second"
          src={collection[2].imageUrl}
          alt="shoes item "
        />
      </div>
    </div>
  );
}

export default CollectionCard;
