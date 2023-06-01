import React, { Component } from 'react'
import withRouter from './withRouter'

class Home extends Component {
  constructor(props)
  {
    super(props);
    console.log("I AM HOME")
  }
  render() {
    return (
      <div>Home</div>
    )
  }
}
export default withRouter(Home)
