import './item.css';
import React, { useContext, } from "react";
import { ViewAllContext } from '../viewAll/ViewAllContext.js';
import { LikedItemsContext } from '../LikedItems/LikedItemsContext.js';

export default function Item({
    _id,
    filePath,
    type,
    productType

}) {

    const { getItems } = useContext(ViewAllContext);
    const { likedCombinationArr, combinationsList, deleteLikedCombination } = useContext(LikedItemsContext);

    const deleteFromCloset = _id => {


        //Cheking if there is an item with the same _id in likedcombinations
        likedCombinationArr.map(combObj => {
            combObj.combination.map(item => {
                if (item._id === _id) { //if there is such item 

                    deleteLikedCombination(combObj._id)
                }
            })
        })

        fetch(`/api/viewAll/${_id}`, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200)
                    getItems();
                combinationsList();
            });
    }

    return (
        <div className="item">
            <img src={`${filePath}`} className="item-image" alt="item-img" />
            {<button onClick={() => deleteFromCloset(_id)}><span>Delete from closet</span></button>}
        </div>
    );
}

