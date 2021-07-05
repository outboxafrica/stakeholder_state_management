export const initialState = {
  cart: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.name
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Product (id: ${action.id} not in cart)`);
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export default reducer;
