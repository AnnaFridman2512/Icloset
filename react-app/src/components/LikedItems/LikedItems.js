// import "./LikedItems.css";
// import Carousel from "react-bootstrap/Carousel";

// import React, { useState, useEffect } from "react";
// import { useParams, Link, useHistory } from "react-router-dom";
// import CollectionCard from "./CollectionCard";

// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// // todos = [{label: 'dasdas',id: 1, date: ''}]

// export default function LikedItems() {
//   const [collections, setCollections] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const deleteBtn = (id) => {
//     setCollections(
//       collections.filter((collection) => {
//         return collection.id !== id;
//       })
//     );
//      if (collections.length -1 == currentIndex ){
//        setCurrentIndex(currentIndex - 1)
//      }
//   };

//   // Get one item
//   useEffect(() => {
//     fetch(`http://localhost:8080/likedItems/`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("collection data", data);
//         setCollections(data);
//       });
//   }, []);

//   console.log("p", collections, currentIndex);

//   return (
//     //     <div>
//     //     <Carousel >
//     //         <Carousel.Item>
//     //                 {collection.length > 0 && <CollectionCard collection={collection} setCollection={setCollection} key={id} />}
//     //         </Carousel.Item>
//     //     </Carousel>
//     // </div>

//     <div className="liked-items">
//       <div className="carusel">
//         <div className="caruselInner">
//           <div className="left">
//             <ArrowBackIosIcon
//               onClick={() => {
//                 setCurrentIndex(
//                   currentIndex - 1 < 0
//                     ? collections.length - 1
//                     : currentIndex - 1
//                 );
//               }}
//             />
//           </div>

//           <div className="center">
//             {collections.length > 0 && (
//               <CollectionCard
//                 deleteBtn={deleteBtn}
//                 id={collections[currentIndex].id}
//                 combination={collections[currentIndex].combination}
//               />
//             )}
//           </div>

//           <div className="right">
//             <ArrowForwardIosIcon
//               onClick={() => {
//                 setCurrentIndex(
//                   currentIndex + 1 <= collections.length - 1
//                     ? currentIndex + 1
//                     : 0
//                 );
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
