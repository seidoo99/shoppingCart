import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
 import ProductDetail from './components/ProductDetail';

import submission from "./components/submission";
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


function App() {
 
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
    {/* <Route path='/contact' exact component={Contact}/> */}
    <Route path='/submission' exact component={submission}/>
    <Route path='/api/products' exact component={Products}/>
    <Route path='/cart/:id?' exact component={Cart}/>
    <Route path='/checkout' exact component={Checkout}/>
    <Route path='/products/:id' exact component={ProductDetail}/>
    <Route path='/signin' exact component={Login}/>
    <Route path='/register' exact component={Register}/>
    <Route path='/profile' exact component={Profile}/>
    
    </div>
    </Router>
  );
}

export default App;
