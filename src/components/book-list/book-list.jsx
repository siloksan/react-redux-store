import React, {useEffect, useMemo} from 'react';
import BookListItem from "../book-list-item";
import {connect, useSelector} from "react-redux";
import {withBookService} from "../hoc";
import {compose} from "@reduxjs/toolkit";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicator";
import booksSlice from "../../reducers";

import "./book-list.css"

const { booksLoader, booksRequested, booksError } = booksSlice.actions

const BookList = ({ fetchBooks }) => {

	const state = useSelector( state => state.books)

	const { list, loading, error } = state

	useEffect(() => {
		fetchBooks()
	}, [])

	const renderContent = useMemo(() => {
		return  list.map((book) => {
			return (
				<li className="list-group-item card mb-3" key={book.id}><BookListItem book={book}/></li>
			)
		})
	}, [list])

	if (error) return <ErrorIndicate/>

	return (
		<ul className="list-group book-list">
			{loading && <Spinner/>}
			{renderContent}
		</ul>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {

	const { bookServiceContext } = ownProps
	return {
		fetchBooks: () => {

			dispatch(booksRequested())
			let canceled = false
			bookServiceContext.getBooks()
				.then(data => {
					!canceled && dispatch(booksLoader(data))
				})
				.catch((err) => dispatch(booksError(err)))

			return () => canceled = true
		}
	}
}

export default compose(
	withBookService(),
	connect(null, mapDispatchToProps)
)(BookList)