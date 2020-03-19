import React, { Component } from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage'


class App extends Component {
  render() {
    return (
      <div>
        <RegisterPage />
        <LoginPage />
      </div>
    );
  }
}

export default App;
