import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function CaruselLikedItem({collection,setcollection}) {

    return (
      
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              
            {collection.map(({productType,imageUrl,type}) => <img key={type} className={`liked-${type}`} src={imageUrl} alt={productType} />)} 
              
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
     </div>
   
    )
}

export default CaruselLikedItem
