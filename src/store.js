import {configureStore} from "@reduxjs/toolkit";
import booksSlice from "./reducers";

const store = configureStore({
	reducer: {
		books: booksSlice.reducer
	}
})

export default store