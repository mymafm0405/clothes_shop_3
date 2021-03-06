import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utiles';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectHidden} from '../../redux/cart/cart.selecotrs'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className="option" to="/signin">Sign In</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ?
      null :
      <CartDropdown/>
    }
  </div>
);
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectHidden
})

export default connect(mapStateToProps) (Header);
