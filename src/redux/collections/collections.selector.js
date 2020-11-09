import {createSelector} from 'reselect'

const selectShop = state => state.collections

export const selectCollections = createSelector(
    [selectShop],
    collection => collection.collections
)