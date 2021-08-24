function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log("entre aca ", action.payload);
      return [...cart, action.payload];
    }

    default:
      return cart;
  }
}

export default cartReducer;
