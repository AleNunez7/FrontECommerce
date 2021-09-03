function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemToAdd = cart.find((item) => item._id === action.payload._id);

      if (itemToAdd) {
        itemToAdd.quantity++;
        return [...cart];
      } else {
        return [...cart, action.payload];
      }
    }

    case "SUBSTRACT_ITEM": {
      const itemToSustract = cart.find(
        (item) => item._id === action.payload._id
      );

      if (itemToSustract) {
        itemToSustract.quantity--;
        return [...cart];
      } else {
        return [...cart, action.payload];
      }
    }

    case "REMOVE_ITEM": {
      return cart.filter((item) => item !== action.payload);
    }

    case "RESET_CART": {
      return (cart = []);
    }

    default:
      return cart;
  }
}

export default cartReducer;
