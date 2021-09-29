import React from "react";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./CollectionCard.css";

function CollectionCard({ combination, setCollection, id , deleteBtn}) {
  

  return (
    <>
      <div className="collection-card">
        <div className="Collection_Item">
          {combination.map(({ productType, filePath, type }) => (
            <img
              key={type}
              className={`liked-${type}`}
              src={'http://localhost:8080/api/'+filePath}
              alt={productType}
              // width='70%'
              // height='70%'
            />
          ))}
        </div>

        {/* {collection.length === 0 ? 'Loading...' : collection.map((item) => <Combination key={collection.id} {...item}/>)} */}
      </div>
      <DeleteOutlineOutlinedIcon
        className="delete_icon"
        onClick={() => deleteBtn(id)}
      />
    </>
  );
}

export default CollectionCard;
