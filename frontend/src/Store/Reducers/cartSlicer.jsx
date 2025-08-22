import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: null
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state, action) => {
        state.cart = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadCart } = CartSlice.actions

export default CartSlice.reducer;