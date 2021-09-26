//MainComponent is rendered in HomePage.js
import './MainComponent.css';
//import {useRef} from 'react';
import {useState, useEffect, useContext} from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {ViewAllContext} from '../viewAll/ViewAllContext';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export default function MainComponent() {
    // const [collection, setCollection] = useState([]); const [type, setType] =
    // useState('') const typeRef = useRef(); const setTypeFun = (e) => {
    // setType(e.target.value) } const findClothes = (type) => {
    // fetch(`/items/?type=${type}`)         .then } const [on, setOn] =
    // useState(false) useEffect(() => {     if (on)         fetch('/api/viewAll')
    //         .then(res => res.json())             .then(data => {
    // setCollection([...data])                 console.log('collection', data)
    //    })     setOn(false) }, [on])

    const {items} = useContext(ViewAllContext);
    const {setItems} = useContext(ViewAllContext);
    const [combination,setCombination] = useState([])
    const [isLikedItem, setIsLikedItem] = useState(false)
    const [favorites, setFavorites] = useState([])

    const getrandomCombination = () => {
        const findTop = items.filter(item => item.type === "top");
        const theTop = findTop[Math.floor(Math.random() * findTop.length)];
        console.log(theTop)

        const findBottom = items.filter(item => item.type === "bottom");
        const theBottom = findBottom[Math.floor(Math.random() * findBottom.length)];

        const findShoes = items.filter(item => item.type === "shoes");
        const theShoes = findShoes[Math.floor(Math.random() * findShoes.length)];

        // const findElse = items.filter(item => item.type === "else"); const theElse =
        // findElse[Math.floor(Math.random() * findElse.length)];
        return setCombination([theTop, theBottom, theShoes])
    }
    console.log('combin', combination)

    const addlikedItem = (combination) => {
        const favoriteItemsList = [...favorites, combination]
        setFavorites(favoriteItemsList)
        setIsLikedItem(true)            
        }

    
    console.log('isLikedItem', isLikedItem)

    return (
        <>
        <button className='findMeButton' onClick={getrandomCombination}>FIND ME SOMETHING!</button>
        <div  className='main-component'>
            

            {combination.map(({productType, _id, type }) => (
                
                    <img key={_id} className={type} src={_id} alt={productType}/>

             ))}

            
            <div className="buttons">
                    <button className='findMeButton likeButton' onClick={()=>addlikedItem(combination)}>
                        {isLikedItem === false ? <MdFavoriteBorder size= '1.5em'/>  : <MdFavorite size= '1.5em'/>}
                        {/* <FavoriteBorderOutlinedIcon/> */}
                    </button>
    
                    <button className='findMeButton likeButton' onClick={getrandomCombination}>
                        <AutorenewIcon/>
                    </button>
                </div>

        </div>
        </>

        
        //         !items.length > 0         ?             // <button
        // className='findMeButton' onClick={() => setOn(true)}>FIND ME SOMETHING!
        // </button>             < button className = 'findMeButton' > FIND ME SOMETHING
        // !</button>             : <div
        // className={combination[0].productType !== 'dress'                     ?
        // 'main-component'                     : 'main-component-dress'}>
        //       <img                         className={combination[0].productType !==
        // 'dress'                         ? "first"                         : 'dress'}
        //                        src={items[0].imageUrl}
        // alt="top item "/> {combination[0].productType !== 'dress'
        //     ? <img className="third" src={combination[1].imageUrl} alt="buttom item
        // "/>                         : null }                     <img
        // className='second' src={combination[2].imageUrl} alt="shoes item "/>
        //            <div className="buttons">                         <button
        // className='findMeButton likeButton'>
        // <FavoriteBorderOutlinedIcon/>                         </button>
        //           {/* <button className='findMeButton likeButton' onClick={() =>
        // setOn(true)}><AutorenewIcon /> </button> */}                         <button
        // className='findMeButton likeButton'
        // onClick={getrandomCombination}><AutorenewIcon/></button>
        //    <button className='findMeButton likeButton'><AutorenewIcon/></button>
        //                </div>                 </div>     } < />
        )
    }