const { createSlice } = require("@reduxjs/toolkit");

const cardSlice = createSlice({
  name: "card",
  initialState: {
    isShowMinicard: false,
    cartItems: [],
  },
  reducers: {
    showMiniCard(state, action) {
      // action
      return {
        ...state,

        isShowMinicard: true,
      };
    },
    hideMiniCard(state, action) {
      return {
        ...state,
        isShowMinicard: false,
      };
    },
    addToCart(state, action) {
      state.isShowMinicard = true;
      state.cartItems = [...state.cartItems, action.payload];
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      const newState = { ...state };
      return {
        ...state,
        cartItems: newState.cartItems.filter(
          (product) => product.id !== idNeedToRemove
        ),
      };
    },
  },
});

export const { showMiniCard, hideMiniCard, addToCart, removeFromCart } =
  cardSlice.actions; // named export
export default cardSlice.reducer;
