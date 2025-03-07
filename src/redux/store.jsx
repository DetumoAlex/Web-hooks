import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/cartSlice'
// import userSlice from './slices/userSlice'
import authSlice from './slices/authSlice'

const store = configureStore({
    reducer:{
        cart:cartSlice,
        // user:userSlice.reducer,
        auth:authSlice
    }
})


export default store