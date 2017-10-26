import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CreateCatalog from './CreateCatalog'

class App extends Component {

  componentDidMount() {

    console.log(CreateCatalog);

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
                    <li><Link to="/CreateCatalog">Create</Link></li>
                    <li><a href="#">Update</a></li>
                    <li><a href="#">Browse</a></li>
                  </ul>
                </li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">SKUs</a></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <h3>Main content </h3>
            <p>This is the main COntent area </p>
          </div>
          <Route path="/CreateCatalog" component={CreateCatalog} />
            </div>
    </Router>
  
     

    );
  }
}

export default App;
