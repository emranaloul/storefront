import './App.scss';
import React from 'react'

import Category from './component/categories';
import Product from './component/products'
import Header from './component/header';
import Footer from './component/footer'
import Checkout from './component/checkout';
import ViewDetails from './component/view-details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
    <Header/>
    <Switch>
<Route exact path="/">
   <Category/>
   <Product/>
</Route>
<Route path="/cart"><Checkout/></Route>
<Route path="/product/:id">
  <ViewDetails/>
</Route>
    </Switch>
   <Footer/>

      </Router>
    </React.Fragment>
  );
}

export default App;
