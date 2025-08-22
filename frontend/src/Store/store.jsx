import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from './Reducers/userSlicer'
import ProductSlice from "./Reducers/productSlicer"
import CartSlice from './Reducers/cartSlicer'

export const store = configureStore({
  reducer: {
    userReducer: UserSlice,
    productReducer: ProductSlice,
    cartReducer: CartSlice
  },
})