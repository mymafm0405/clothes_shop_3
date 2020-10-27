import {CartTypes} from './cart.types'

const INITIAL_STATE = {
    hidden: true
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;
    }
}

export default CartReducer;