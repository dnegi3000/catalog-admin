import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class Category extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome .............</h1>
        </header>
            
        <div class="navbar">
         <a href="">Catalog</a>
         <a href="">Category</a>
         <a href="">Add Brand</a>
         <a href="">Add Product</a>
         <a href="">Add SKUs</a>
       </div> 

       
      </div>
     
    );
  }
}

export default Category;
