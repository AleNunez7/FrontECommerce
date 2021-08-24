function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM": {
      cart.map((item) => {
        if (item.id !== action.payload.id) {
          return [...cart, action.payload];
        } else {
          return cart;
        }
      });
    }
    case "REMOVE_ITEM": {
      return cart.filter((item) => item !== action.payload);
    }

    default:
      return cart;
  }
}

export default cartReducer;
