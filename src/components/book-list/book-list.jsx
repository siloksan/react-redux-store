import React, {useEffect} from 'react';
import BookListItem from "../book-list-item";
import {connect, useSelector} from "react-redux";
import {withBookService} from "../hoc";
import {compose} from "@reduxjs/toolkit";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicator";
import {fetchBooks} from "../../reducers";
import {cartSlice} from "../../reducers";

import "./book-list.css"

const {bookAddedToCart} = cartSlice.actions

console.log(bookAddedToCart);
const BookListContainer = ({ fetchBooks, bookAddedToCart }) => {

	const state = useSelector( state => state.books)

	const { list, loading, error } = state

	useEffect(() => {
		fetchBooks()
	}, [])

	if (error) return <ErrorIndicate/>

	return (
		<ul className="list-group book-list">
			{loading && <Spinner/>}
			<BookList list={list} bookAddedToCart={bookAddedToCart}/>
		</ul>
	);
};

const mapDispatchToProps = (dispatch, { bookServiceContext }) => {
	return {
		fetchBooks: fetchBooks(bookServiceContext, dispatch),
		bookAddedToCart: (id) => dispatch(bookAddedToCart(id))
	}
}

export default compose(
	withBookService(),
	connect(null, mapDispatchToProps)
)(BookListContainer)

const BookList = ({ list, bookAddedToCart }) => {
	return (
		<>
			{
				list.map((book) => {
					return (
						<li className="list-group-item card mb-3" key={book.id}>
							<BookListItem book={book} bookAddedToCart={bookAddedToCart}/>
						</li>
					)
				})
			}
		</>
	)
}