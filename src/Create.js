import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import CreateFormRender from './CreateFormRender';
class Create extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    let attributes = this.props.location;
    console.log(".............");
    console.log(this.props.location);
    if (this.props.location.details === undefined ||
      this.props.location.details === "" || this.props.location.details == null) {
      return <div> Click to do the action </div>
    }
    else {
      return (
        <div>
          Create {attributes.details.name}
          <CreateFormRender data={attributes.details} />
         
        </div>

      );
    }
  }
}

export default Create;
