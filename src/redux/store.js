import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import userReducer from "./userSlice"

const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer
    }
})

export default store