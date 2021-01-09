import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component.jsx';
import Banner from "./components/banner/banner.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;