import './Item.css';

export default function Item({
    filePath,
    type,
    productType

}){
    return(
       <div className="item">
           <img src={filePath} className="item-image" />
           <span>{type}</span>
           <span>{productType}</span>
           <button >Delete from closet</button>
       </div>
    );
}

{/*<button {/*onClick={() => deleteFromCloset(_id)}>Delete from closet</button>**/}