import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component.jsx';
import Banner from "./components/banner/banner.component";
import HomePage from './pages/homepage/homepage.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Footer from './components/footer/footer.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Banner />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;