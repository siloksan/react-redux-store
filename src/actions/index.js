const booksLoader = (state, action) => {
	state.list = action.payload
	state.loading = false
}

const booksRequested = (state) => {
	state.list = []
  state.loading = true
}

const booksError = (state, action) => {
	state.list = []
	state.loading = false
	state.error = action.payload
}

const bookAddedToCart = (state, action) => {
	const bookId = action.payload
	const book = state.list.find((book) => book.id === bookId)
	const newItem = {
		id: book.id,
		name: book.title,
		count: 1,
		total: book.price,
	}
	state.cartItems.push(newItem)
}

export {booksLoader, booksRequested, booksError, bookAddedToCart}