import React from 'react';
import './App.css';

const Calculator = ({ TipMe }) => (

  
  <div>
    <a href="/">TipMe</a>
    <a href="/login">Login</a>
    <a href="/SignUp">SignUp</a>
    <a href="/restaurants">Restaurants</a>
    <h1>{TipMe}</h1>
  </div>

); 


export default Calculator; 