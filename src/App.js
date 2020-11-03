import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfile } from './firebase/firebase.utiles';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
// import TestComp from './test'

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async authUser => {
      if (authUser) {
        const userRef = await createUserProfile(authUser)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state.currentUser)
          })
          setCurrentUser(authUser)
        })
      } else {
        setCurrentUser(authUser)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <TestComp/> */}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)
          } />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
