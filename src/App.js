import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./Cards/cards";
import Card from './Cards/cardUI';
import "./Cards/card-style.css"
import Navbar1 from './Cards/navbar'
function App() {
  return (
    <div>
    <Navbar1/>
    <Cards/>
  </div>    

  );
}

export default App;
