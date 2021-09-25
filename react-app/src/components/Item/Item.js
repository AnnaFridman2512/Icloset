import './Item.css';
//import React, { useState } from "react";



export default function Item( {
    _id,
    filePath,
    type,
    productType

}){
    
const deleteFromCloset = _id =>{
    console.log("deleted");

}

    return(
       <div className="item">
           {_id}
           <br></br>
           {filePath}
          { /*<img src={filePath} className="item-image" alt="item-img"/>*/}
           {/*<span>{type}</span>*/}
           <span>{productType}</span>
         {<button onClick={() => deleteFromCloset()}>Delete from closet</button>}
       </div>
    );
}

