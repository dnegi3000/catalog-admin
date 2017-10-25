import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Catalog from './Catalog'

class App extends Component {

  componentDidMount() {

    console.log(Catalog);

  }
  render() {
    return (
      
      <Router>
        <div>
           <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">CatalogSer</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Catalog
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to="/Catalog">Create</Link></li>
                    <li><a href="#">Page 1-2</a></li>
                    <li><a href="#">Page 1-3</a></li>
                  </ul>
                </li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <h3>Main content </h3>
            <p>This is the main COntent area </p>
          </div>
          <Route path="/Catalog" component={Catalog} />
            </div>
    </Router>
  
     

    );
  }
}

export default App;
