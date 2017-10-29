import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class Create extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    let attributes;

    console.log(this.props);
    return (
    <div>ddddddddddddddd
    {/* attributes.forEach(
      function(element) {
           <div className="form-group">
              <label htmlFor={element.name}> Id:</label>
              <input type="text" name={element.name} className="form-control" />
           </div>
           
          
        }, this
    );   */}
       
    </div>
     
    );
  }
}

export default Create;
