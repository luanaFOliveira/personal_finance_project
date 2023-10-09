import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Users/listUsers';
import AddUser from './Users/addUser';

const App = () => {

    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<UserList/>}/>
          <Route path='/newUser' element={<AddUser/>}/>
        </Routes>
      </Router>
    )
}

export default App;
