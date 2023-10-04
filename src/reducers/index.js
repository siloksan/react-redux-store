import {createSlice} from "@reduxjs/toolkit";
import {booksError, booksLoader, booksRequested} from "../actions";

const initialState = {
	list: [],
	loading: true,
	error: null,
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		booksLoader,
		booksRequested,
		booksError
	}
})

export default booksSlice