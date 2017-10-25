import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import axios from 'axios';

class Catalog extends Component {

  componentDidMount() {
  }
  componentWillUpdate() {
    console.log("Component Is updating .............")
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      longDescription: '',
      successMessage:''
    };
  }

  handleChange(e) {
    console.log("Before change ............");
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
    console.log("After change ............");
    console.log(this.state);
  }


  createCatalog(event, data) {
   axios(
      {
        url: 'http://localhost:8080/createCatalog',
        method: 'post',
        headers: {},
        params: {
          name: this.state.name,
          description: this.state.description,
          longDescription: this.state.longDescription
        }
      }).then((responce, error) => {
        console.log(responce);
        console.log(responce.status);
        if (responce.status == '200') {
          console.log("Success : Status code " + responce.status);
          this.state.catalogId = responce.data;
          this.setState({
                      name: '',
                      description: '',
                      longDescription: '',
                      successMessage: 'Item Create Created Successfully'
                     })
        }
      }).catch((error) => {
        console.log("Error ");
        console.log(error);
      });

  }



  render() {
    return (
      <div>
        <div >
          <p className="error">{this.state.successMessage} </p>
          <form onSubmit={(event) => {
            console.log(".event..........");
            event.preventDefault();
            this.createCatalog(event);
          }}
            method="post">

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={(event) => {
                this.handleChange(event);
              }} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="Desciption">Desciption:</label>
              <input type="text" name="description" value={this.state.description} onChange={(event) => { this.handleChange(event) }} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="longDescrtion">longDescrtion:</label>
              <input type="text" name="longDescription" value={this.state.longDescription} onChange={(event) => { this.handleChange(event) }} className="form-control" />
            </div>
            <div className="form-group">
              <button className="btn btn-default">Add New </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Catalog;
