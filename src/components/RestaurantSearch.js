import React, { Component } from 'react'

export default class RestaurantSearch extends Component {
  constructor()
    {
      super();
      this.state={
        searchData:null,
        noData:false,
      }
    }
    search(key)
    {
      fetch(`https://64786ff4362560649a2dc442.mockapi.io/api/restaurants/?q=${key}`,{
     }).then((result)=>{
       result.json().then((resp)=>{
         console.log(resp);
         if(resp.length>0)
         {
           this.setState({searchData:resp,noData:false});
         }
         else{
          this.setState({noData:true,searchData:null});
         }
       })
     })
   }
  render() {
    
  
    return (
      <div className='mt-5'>
        <input
          type="text"
          onChange={(event) => this.search(event.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4"
          placeholder="Search"
        />
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.searchData.map((item) => {
                console.log("item", item);
                return <div className="mb-2">{item.name}</div>;
              })}
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <div className="text-red-500">No found</div> : null}
        </div>
      </div>
    );
    
  }
}
