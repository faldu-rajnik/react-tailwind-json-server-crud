import logo from './logo.svg';
import './App.css';
import './index.css';
import { Routes,Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Home from "./components/Home"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantUpdate from "./components/RestaurantUpdate"
import NotFound from "./components/NotFound"
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import NavMenu from './components/NavMenu';
const RestaurantList = lazy(() => import('./components/RestaurantList'));
function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    
    <div className="App">
     
      <NavMenu/>

      <Routes>
      <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<RestaurantCreate  />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          
          <Route path="/list" element={  
            <Suspense fallback={renderLoader()}>
              <RestaurantList />
            </Suspense>
          } />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/update/:id"  element={<RestaurantUpdate/>} />
          <Route path="*" element={ <Navigate replace={true}  to="/404"/>} />
          <Route path="/404" element={ < NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
