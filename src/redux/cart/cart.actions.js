import {CartTypes} from './cart.types'

export const toggleCartDropdown = () => ({
    type: CartTypes.TOGGLE_CART_DROPDOWN
})

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export const clearItem = item => ({
    type: CartTypes.CLEAR_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
})