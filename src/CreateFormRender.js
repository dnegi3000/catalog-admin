
import React, { Component } from 'react';
import axios from 'axios';


class CreateFormRender extends Component {

    handleChange(e) {
    console.log("Before change ............");
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
    console.log("After change ............");
    console.log(this.state);
  }

constructor(props) {
    super(props);
    this.state = {}
  }



  createItem(event, data,itemName) {
      console.log("inside the create item method ");
      console.log("Printing parameters data..");
      console.log(data);
      console.log("Printing parameters item name");
      console.log(itemName);
      var param = {};
      data.map((item)=>{
        console.log( item);      
        console.log(param[item.name]);
          param[item.name] = this.state[item.name];
      })
    
    console.log("parameter ......");
    console.log(param);
   axios(
      {
        url: 'http://localhost:8080/create'+itemName,
        method: 'post',
        headers: {},
        params: param

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
        console.log(error.response);
        this.setState({
          successMessage:'Error Occurred : '+ error.response.data.message
        })
      });

  }


    render() {
        console.log("Render CreateFormReder.........");
        return (
            <div >

          <form onSubmit={(event) => {
            console.log(" On form Submit");
            event.preventDefault();
            this.createItem(event,this.props.data.attributes,this.props.data.name);
          }}
            method="post">
          
                {
                    this.props.data.attributes.map((item) => (
                    <div className="form-group" key={item.name}>
                        <label htmlFor={item.name}> {item.name}:</label>
                        <input type="text" name={item.name} className="form-control" 
                        value={this.state[item.name]} onChange={(event) => { this.handleChange(event) }}/>
                    </div>
                )
                )
                }
            <div className="form-group">
            <button className="btn btn-default">Add New </button>
            </div>
            </form>
            </div>

        );
    }

}

export default CreateFormRender;
