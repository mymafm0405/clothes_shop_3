import {CartTypes} from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utiles'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
            default:
                return state;
    }
}

export default cartReducer;