import React, { Component } from 'react'
import withRouter from './withRouter';

 class RestaurantUpdate extends Component {
  constructor(props){
    super(props);
    this.state={
      name:null,
      email:null,
      ratings:null,
      address:null,
    }
  }
  componentDidMount()
  {
    fetch(`https://64786ff4362560649a2dc442.mockapi.io/api/restaurants/${this.props.router.params.id}`).then((response)=>{
      response.json().then((result)=> {
        // this.setState({list:result})
        console.warn(result)
        this.setState({
          name:result.name,
          email:result.email,
          id:result.id,
          ratings:result.ratings,
          address:result.address,
        })
      })
    })
    
  }
  update(){
       fetch(`https://64786ff4362560649a2dc442.mockapi.io/api/restaurants/${this.state.id}`,{
        method:"PUT",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(this.state)
      }).then((result)=>{
        result.json().then((resp)=>{
          //console.log(resp,this.props);
          this.props.router.navigate("/list")
        })
      })
    }
  render() {
    console.warn(this.props.router.params.id)
    return (
      <div className="space-y-4 mt-5">
      <div>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter Name"
          value={this.state.name}
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
          value={this.state.email}
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
          value={this.state.ratings}
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
          value={this.state.address}
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>this.update()}>Update Restaurant</button>
    </div>
    )
  }
}
export default withRouter(RestaurantUpdate)