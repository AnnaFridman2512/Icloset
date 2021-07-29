import './App.css';

import React from 'react';
import Nav from '../Nav';
import AddItem from '../AddItem';
import Search from '../Search';
import Liked from '../Liked';
import Login from '../Login';

function App() {
  
    return(
      <>
      <Nav />
      <AddItem />
      <Search />
      <Liked />
      <Login />
      </>
    );
}

export default App;
