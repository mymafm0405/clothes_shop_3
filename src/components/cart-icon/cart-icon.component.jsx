import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selecotrs'

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartDropdown, cartCount }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown} />
    <span className="item-count">{cartCount}</span>
  </div>
);

const mapStateToProps = state => ({
  cartCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
