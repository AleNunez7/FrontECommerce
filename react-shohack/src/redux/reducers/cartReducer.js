function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      const checkItem = cart.find((item) => item._id === action.payload._id);
      {
        if (checkItem) {
          checkItem.quantity++;
          return [...cart];
        } else {
          return [...cart, action.payload];
        }
      }
    case "REMOVE_ITEM": {
      return cart.filter((item) => item !== action.payload);
    }

    default:
      return cart;
  }
}

export default cartReducer;
