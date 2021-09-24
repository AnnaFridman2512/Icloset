import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,} from 'react-router-dom'
import React from 'react';


import HomePage from '../HomePage/HomePage';
import Nav from '../Nav/Nav.js'
import AddItems from '../AddtIems/AddItems';
//import MainComponent from '../MainComponent/MainComponent';
//import LikedItems from '../LikedItems/LikedItems';
import ViewAll from '../viewAll/ViewAll';
import Login from '../Login/Login.js';
import Footer from '../HomePage/Footer';


function App() {
  
    return(
      <Router>
      <>
          <Nav />

          <Switch>
            <Route path='/' exact >
              <HomePage />{/*MainComponent is rendered in HomePage*/}
            </Route>
            <Route path="/addItems">
              <AddItems />
            </Route>
            <Route path='/likedItems'>
              {/*<LikedItems />**/}
            </Route>
            <Route path='/view-all'>
              <ViewAll />
            </Route>
            <Route path='/logIn'>
              <Login />
            </Route>
          </Switch>

          <Footer />
         
 
      </>
    </Router>
    );
}

export default App;

