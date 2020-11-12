import SHOP_DATA from "./shop.data";
console.log(SHOP_DATA);

const INITIAL_STATE = {
  collections: SHOP_DATA
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionsReducer;
