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

export const fetchBooks = (bookServiceContext, dispatch) => () => {
	const { booksLoader, booksRequested, booksError } = booksSlice.actions
	dispatch(booksRequested())
	let canceled = false
	bookServiceContext.getBooks()
		.then(data => {
			!canceled && dispatch(booksLoader(data))
		})
		.catch((err) => dispatch(booksError(err)))

	return () => canceled = true
}

export default booksSlice