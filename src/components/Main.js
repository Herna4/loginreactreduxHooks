import React from 'react';
import { Route, Switch } from 'react-router-dom'
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage'


const Main = () => (  
         <Switch>
           {/* <Route exact path='/' component={Home}/> */}
           <Route path='/signup' component={RegisterPage}/>
           <Route path='/login' component={LoginPage}/>
         </Switch>
    );

export default Main;