const booksLoader = (state, action) => {
	state.list = action.payload
}

export {booksLoader}