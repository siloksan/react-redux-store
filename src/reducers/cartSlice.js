import {createSlice} from "@reduxjs/toolkit";
import {bookAddedToCart} from "../actions";

const initialState = {
	cartItems: [
		{
			id: 1,
			name: 'Book 1',
			count: 3,
			total: 32,
		},
		{
			id: 2,
			name: 'Book 2',
			count: 1,
			total: 45,
		}
	],
	orderTotal: 210
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	bookAddedToCart
})

export default cartSlice