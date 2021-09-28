import './ViewAll.css'; 
import React, {useContext, useEffect } from "react";
import { ViewAllContext } from './ViewAllContext.js';
import Item from '../Item/Item.js';


export default function ViewAll(){

  const {items, getItems} = useContext(ViewAllContext);

  useEffect(() => {
getItems()
  },[]);


    return (

 <div className="view-all">

        {items.length > 0 //if 'items' array is not empty (after fetch filled the array)
        ? items.map(item => <Item key={item.filePath} {...item} />)  //...product - pass all elements of iterableObj as arguments to function
                                                               //key -> some value that is uniqe fo each product, in this case its the id
                                                               //onAddToCart is the function that adds to cart on click
        :"Loading..."}
  </div>  
                                                                 
    );

    }                                     