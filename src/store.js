import {configureStore} from "@reduxjs/toolkit";
import {booksSlice, cartSlice} from "./reducers";

const store = configureStore({
	reducer: {
		books: booksSlice.reducer,
		cart: cartSlice.reducer
	}
})

export default store