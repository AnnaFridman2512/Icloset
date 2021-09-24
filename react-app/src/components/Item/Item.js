import './Item.css';

export default function Item({
    id,
    filePath,
    type,
    productType

}){

    return(
       <div className="item">
           {filePath}
           <img src={filePath} className="item-image" alt="item-img"/>
           {/*<span>{type}</span>*/}
           <span>{productType}</span>
           <button >Delete from closet</button>
       </div>
    );
}

{/*<button {/*onClick={() => deleteFromCloset(_id)}>Delete from closet</button>**/}