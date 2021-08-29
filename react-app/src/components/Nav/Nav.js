import './Nav.css';
import {Link} from "react-router-dom";
import {useState} from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';



export default function Nav() {
    const [showLinks,setShowlinks] = useState(false); //when setShowLinks change to true, the menu Icon show 
   
    return ( 
    <>
    <nav className='navbar'>
        <div className='logo'>
        <Link to='/'> I CLOSET </Link>

        </div>
        <div className='left' id={showLinks ? 'hidden' : ""}> {/* (changing the id value) */}

            <Link to='/addItems'>
            <ControlPointOutlinedIcon/>
                Add Items
            </Link>
            <Link to='/likedItems'>
                <FavoriteBorderOutlinedIcon/>
                Liked Items
            </Link>
            
            <Link to='/logIn'>
                <AccountCircleOutlinedIcon/>Log in
            </Link>
            
        </div>

            <button className="menu-btn" onClick={() => setShowlinks(!showLinks)}>
                    < MenuOutlinedIcon fontSize="large"/>
            </button>
    </nav> 
    </>
    )
}