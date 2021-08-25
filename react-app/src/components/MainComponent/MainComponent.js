//MainComponent is rendered in HomePage.js
import './MainComponent.css';

import { useRef, useState, useEffect } from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AutorenewIcon from '@material-ui/icons/Autorenew';



export default function MainComponent() {
    const [collection, setCollection] = useState([]);

    // const [type, setType] = useState('')
    // const typeRef = useRef();
    // const setTypeFun = (e) => {
    //     setType(e.target.value)

    // }
    // const findClothes = (type) => {
    //     fetch(`/items/?type=${type}`)
    //         .then
    // }
    const [on, setOn] = useState(false)
    useEffect(() => {
        if (on)
            fetch('/collection')
                .then(res => res.json())
                .then(data => {
                    setCollection([...data])
                    console.log('collection', data)

                })
        setOn(false)
    }, [on])


    return (
        <>
            {/* <h2>I'm looking for  </h2>
            <form>
                <input ref={typeRef} onChange={(e) => setTypeFun(e)} type="radio" value="skirt" name="clothes" /> Skirt
                <input ref={typeRef} onChange={(e) => setTypeFun(e)} type="radio" value="t-shirt" name="clothes" /> Shirt
                <input ref={typeRef} onChange={(e) => setTypeFun(e)} type="radio" value="pants" name="clothes" /> Pants
                <input ref={typeRef} onChange={(e) => setTypeFun(e)} type="radio" value="shorts" name="clothes" /> Shorts
                <input ref={typeRef} onChange={(e) => setTypeFun(e)} type="radio" value="dress" name="clothes" /> Dress
                <button onClick={() => console.log(type)} type="button"> Find me something </button>
            </form> */}
            {!collection.length > 0 ?
                <button className='findMeButton' onClick={() => setOn(true)}>FIND ME SOMETHING! </button>
                :
                <div className={collection[0].productType !== 'dress' ? 'main-component' : 'main-component-dress'}>

                    <img className={collection[0].productType !== 'dress' ? "first" : 'dress'} src={collection[0].imageUrl} alt="top item image" />
                    {
                        collection[0].productType !== 'dress' ?
                            <img className="third" src={collection[1].imageUrl} alt="buttom item image" />
                            : null
                    }
                    <img className='second' src={collection[2].imageUrl} alt="shoes item image" />
                    <div className="buttons">
                        <button className='findMeButton likeButton' > <FavoriteBorderOutlinedIcon /> </button>
                        <button className='findMeButton likeButton' onClick={() => setOn(true)}><AutorenewIcon /> </button>
                    </div>



                </div>
            }



        </>
    );
}