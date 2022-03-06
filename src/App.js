import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';







const App = () => {
  return (
    <>
      <BrowserRouter>

        <div className="container">
          <Routes>

            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />



          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;