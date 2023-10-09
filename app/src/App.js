import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Users/listUsers';
import AddUser from './Users/addUser';
import Home from './Home';

const App = () => {

    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="/listUsers" element={<UserList/>}/>
          <Route path='/newUser' element={<AddUser/>}/>
        </Routes>
      </Router>
    )
}

export default App;
