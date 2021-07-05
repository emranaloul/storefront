import './App.scss';
import React from 'react'

import Category from './component/categories';
import Product from './component/products'
import Header from './component/header';
import Footer from './component/footer'

function App() {
  return (
    <React.Fragment>
    <Header/>
   <Category/>
   <Product/>
   <Footer/>
    </React.Fragment>
  );
}

export default App;
