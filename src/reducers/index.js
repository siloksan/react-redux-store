import {createSlice} from "@reduxjs/toolkit";
// import {booksLoader} from "../actions";

const initialState = {
	list: []
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		booksLoader: (state, action) => {
			state.list = action.payload;
		}
	}
})

export default booksSlice