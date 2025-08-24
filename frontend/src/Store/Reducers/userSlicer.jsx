import { createSlice } from '@reduxjs/toolkit'

const savedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: savedUser
}


export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state, action) => {
      state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadUser, removeUser } = UserSlice.actions

export default UserSlice.reducer