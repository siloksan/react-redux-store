import {createSlice} from "@reduxjs/toolkit";
import {booksLoader} from "../actions";

const initialState = {
	list: []
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		booksLoader
	}
})

export default booksSlice