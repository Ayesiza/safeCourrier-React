import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import DeliveryOrder from './components/DeliveryOrder';
import Orders from './components/Orders';
import Order from  './components/Order';

function App() {
  return (
    <BrowserRouter>
     <React.Fragment>
       <Header />
       <Switch>
          <Route  path="/" exact={true} component={Home} />
          <Route path="/signup" component={Signup} />
          <Route  path="/login" component={Login}/>
          <Route  path="/DeliveryOrder" component={DeliveryOrder}/>
          <Route  path="/order/:id" component={Order}/> 
           <Route  path="/orders" component={Orders}/> 
          
          </Switch>
          <Footer />
        </React.Fragment>
    </BrowserRouter>
    
  );
}

export default App;
