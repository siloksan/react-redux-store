const booksLoader = (state, action) => {
	console.log(state.list);
	console.log(action);
	state.list = action.payload
}

export {booksLoader}