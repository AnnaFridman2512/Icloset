import './App.css';

import React from 'react';
import Nav from '../Nav';
import AddItems from '../AddItems';
import Search from '../Search';
import Liked from '../Liked';
import Login from '../Login';

function App() {
  
    return(
      <>
      <Nav />
      <AddItems />
      <Search />
      <Liked />
      <Login />
      </>
    );
}

export default App;
