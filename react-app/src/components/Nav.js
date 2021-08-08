import './Nav.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useState} from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Login from './Login';


export default function Nav() {
    const [showLinks,
        setShowlinks] = useState(false);
    return ( 
    <>
    <Router>
     <div className="header">
        <h2 className='logo'>
            I CLOSET
        </h2>
        <nav className='Navbar' id={showLinks
            ? 'hidden'
            : ""}>
            <ul>
                <li onClick = {(e) => <Login />}>
                    <a> <AccountCircleOutlinedIcon />Log in</a>
                </li>
                <li>
                    <a> <ControlPointOutlinedIcon /> Add Item</a>
                </li>
                <li>
                    <a> <FavoriteBorderOutlinedIcon /> Liked Item</a>
                </li>
               
            </ul>
        </nav>
        <button className="menu-btn" onClick={() => setShowlinks(!showLinks)}>
           < MenuOutlinedIcon  fontSize="large"/>
        </button>
     
    </div> 
    </Router>
    </ >);
}