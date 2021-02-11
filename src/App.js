import React, { useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component.jsx';
import Banner from './components/banner/banner.component';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import AboutUsPage from './pages/about-us/about-us.component';
import Footer from './components/footer/footer.component';
import Modal from "./ui/modal/modal.component";

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };
  
  render(){
    return (
      <div className="App">
        <Modal />
        <Header />
        <Banner />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
};

const mapSTP = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDTP = (dispatch) => {
  return ({
    checkUserSession: () => dispatch(checkUserSession())
  })
}

export default connect(
  mapSTP,
  mapDTP
)(App);