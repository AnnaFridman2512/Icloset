import "./LikedItems.css";

import React, { useState, useEffect } from "react";
import CollectionCard from "./CollectionCard";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


export default function LikedItems() {

  const [ collection, setCollection ] = useState([]);
  const [id, setId] = useState(3)


  // Get one item
   useEffect (() => {
    
       fetch(`http://localhost:8080/likedItems/${id}`)
       .then((response)=>response.json())
       .then((data)=>{
        console.log('collection data',data);
        setCollection(data)
      });
  },[id])
 
// useEffect(() => {
//     setCollection(likedItems)
// })
console.log(collection)

  return (
    <div className="liked-items">
        <div className="carusel">
            <div className="caruselInner">

                <div className="left" onClick={() => { id > 0 && setId(id-1)  }}>
                   {/* currImg > 0 && setCurrImg(currImg - 1); */}
               
                    <ArrowBackIosIcon />
                </div>
                <div className="center">


                   {collection.length > 0 && <CollectionCard collection={collection} setCollection={setCollection} key={id} />}
                   
                
                </div>
                <div className="right" onClick={() => {id > collection.length && setId(id + 1)  
                    // currImg < images.length - 1 && setCurrImg(currImg + 1);
                }}>
                    <ArrowForwardIosIcon />
                </div>

            </div>
        </div>

      
    </div>
  );
}
