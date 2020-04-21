import React, {Component} from 'react';
import './App.css';
import Calculator from './screens/calculator';
import axios from 'axios';
import SignUpForm from './Screens';
import Login from './Screens';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ReactScript from 'react-script';



 const App = () => (
  <div>

   <h4> TipMe Calculator </h4>
   <Login />
     <Calculator />

  </div> 
 ); 

export default App;
