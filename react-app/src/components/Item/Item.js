import './Item.css';
//import React, { useState } from "react";



export default function Item( {
    _id,
    filePath,
    type,
    productType

}){
    
const deleteFromCloset = _id =>{

     fetch(`/api/viewAll/${_id}`,{
            method: 'DELETE',
            header:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }

    })
}

    return(
       <div className="item">
           {_id}
           <br></br>
           {filePath}
          { /*<img src={filePath} className="item-image" alt="item-img"/>*/}
           {/*<span>{type}</span>*/}
           <span>{productType}</span>
         {<button onClick={() => deleteFromCloset(_id)}>Delete from closet</button>}
       </div>
    );
}

