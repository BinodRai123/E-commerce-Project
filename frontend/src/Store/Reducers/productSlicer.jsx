import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
}

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loadProduct: (state, action) => {
      state.product = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadProduct } = ProductSlice.actions

export default ProductSlice.reducer