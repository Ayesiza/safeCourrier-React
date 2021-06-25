import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer'
import DeliveryOrder from './components/DeliveryOrder';
import Orders from './components/Orders';

function App() {
  return (
    <BrowserRouter>
     <React.Fragment>
       <Header />
       <Switch>
          <Route  path="/" exact component={Home} />
          <Route path="/Signup" component={Signup} />
          <Route  path="/Login" component={Login}/>
          <Route  path="/DeliveryOrder" component={DeliveryOrder}/>
           <Route  path="/Orders" component={Orders}/> 
          </Switch>
          <Footer />
        </React.Fragment>
    </BrowserRouter>
    
  );
}

export default App;
