import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartDropdown} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartDropdown}) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown}/>
        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})
export default connect(null, mapDispatchToProps) (CartIcon);