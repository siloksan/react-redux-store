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

export {booksLoader, booksRequested, booksError}