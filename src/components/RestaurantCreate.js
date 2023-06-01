import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
import withRouter from "./withRouter"
class RestaurantCreate extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:null,
      email:null,
      ratings:null,
      address:null,
    }
    this.create = this.create.bind(this)
  }


  create()
  {
     fetch("http://localhost:3000/restaurants",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp,this.props);
        this.props.router.navigate("/list")
      })
    })
  }
  render() {
    return (
      <div className="space-y-4 mt-5">
      <div>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter Name"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter Email"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter Ratings"
          onChange={(e) => {
            this.setState({ ratings: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter Address"
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.create}>Add Restaurant</button>
    </div>
    

    )
  }
}

export default withRouter(RestaurantCreate)