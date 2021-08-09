import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,} from 'react-router-dom'

import React from 'react';
import HomePage from '../Home/HomePage';
import Nav from '../Navbar/Nav.js'
import Item from '../Add-Item/Item.js';
import Likes from '../Likes/Likes.js';
import Login from '../Login/Login.js';
import Footer from '../Home/Footer';


function App() {
  
    return(
      <>
      <Router>
          <Nav />

          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/items' exact component={Item} />
            <Route path='/likes' exact  component={Likes}/>
            <Route path='/users' exact component={Login}/>
          </Switch>

          <Footer />

      </Router>
      </>
    );
}

export default App;
