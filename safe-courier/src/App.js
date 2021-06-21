import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
     <React.Fragment>
       <Home />
       <Switch>
          <Route  path="/" exact component={Home} />
          <Route path="/Signup" component={Signup} />
          <Route  path="/Login" component={Login}/>
          </Switch>
          
        </React.Fragment>
    </BrowserRouter>
    
  );
}

export default App;
