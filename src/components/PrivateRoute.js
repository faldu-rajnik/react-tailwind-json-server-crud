import React, { Component } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import withRouter from './withRouter';

class PrivateRoute extends Component {
  componentDidMount() {
    if (!localStorage.getItem('login')) {
      this.props.router.navigate('/login');
    }
    else {
        this.props.router.navigate('/'); 
      }
  }

  render() {
    if (localStorage.getItem('login')) {
      return <Outlet />;
    } else {
      return null;
    }
  }
}

export default withRouter(PrivateRoute);
