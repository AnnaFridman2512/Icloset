import './App.css';

import React from 'react';
import Nav from '../Nav';
import Main from '../Main';
import AddItems from '../AddItems';
import Search from '../Search';
import LikedItems from '../LikedItems';
import Login from '../Login';

function App() {
  
    return(
      <>
      <Nav />
      <Main />
      <AddItems />
      <Search />
      <LikedItems />
      <Login />
      </>
    );
}

export default App;
