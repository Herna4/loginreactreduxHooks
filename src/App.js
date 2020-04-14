import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Content } from 'react-mdl'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Main from './components/Main';
import './App.css';

 class App extends Component {
   render() {
    return (
        <div className="demo-big-content">
            <Layout>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">LBH</Link>} scroll>
                <Navigation>               
                    <Link to="/login">Sign In</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/logout'>log Out</Link>
                    <Link to="/">FirstName</Link>
                </Navigation>
            </Header>
            </Layout>
            <Content>
            <div className="page-content" />
              <Main />
            </Content>
        </div>    
  
    )
 } 
}
 
 
export default App;