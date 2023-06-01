import React, { Component } from 'react'
import withRouter from './withRouter';
import Home from './Home';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:""
        }
    }
    componentDidMount() {
      if(localStorage.getItem('login')){
        this.props.router.navigate('/');
        return null
      } 
    }
  
    login(){
      
        if(this.state.name!=="")
        fetch(`http://localhost:3000/login/?q=${this.state.name}`,{
            // method:"POST",
            // headers:{
            //   'Content-Type':"application/json"
            // },
            // body:JSON.stringify(this.state)
          }).then((result)=>{
            result.json().then((resp)=>{
              console.log("resp",resp);
              if(resp.length>0){
                localStorage.setItem("login",JSON.stringify(resp))
                 this.props.router.navigate("/list")
              }
              else{
                console.log("Please Enter Correct Credentials")
              }
             
            })
          })
    }
  render() {
    return (
      !localStorage.getItem("login")?
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
            type="password"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>
        
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>this.login()}>Login</button>
      </div>:<Home/>
    )
  }
}
export default withRouter(Login)