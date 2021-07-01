// import { configureStore } from "@reduxjs/toolkit";
// import fetchCartSlice from "./features/fetchCart/fetchCartSlice";
//
// const store = Redux.createStore()
// export default configureStore({
//   reducer: {
//     carts: fetchCartSlice
//   }
// })

import { createStore } from "@reduxjs/toolkit";
import cartsReducer from "./features/fetchCart/fethCartReducer";

const store = createStore(cartsReducer)

export default store;