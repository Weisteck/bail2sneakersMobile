import { createSlice } from "@reduxjs/toolkit";
import getAllOrders from "../../../api/bail2sneakersDbApi";

export const fetchCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: getAllOrders
  },
})

export default  fetchCartSlice