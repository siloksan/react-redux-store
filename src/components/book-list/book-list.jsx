import React, {useEffect, useState} from 'react';
import BookListItem from "../book-list-item";
import {useDispatch, useSelector} from "react-redux";
import {withBookService} from "../hoc";
import {bindActionCreators, compose} from "@reduxjs/toolkit";
import booksSlice from "../../reducers";

import "./book-list.css"
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicator";

const BookList = ({ bookServiceContext }) => {

	const [state, setState] = useState({
		data: [],
		loading: true,
		error: false
	})

	const { data, loading, error } = state

	const list = useSelector( state => state.books.list)
	const dispatch = useDispatch()

	const { booksLoader } = bindActionCreators(booksSlice.actions, dispatch)

	const onError = () => {
		setState({...state, error: true})
	}

	useEffect(() => {
		let canceled = false
		bookServiceContext.getBooks()
			.then(data => {
				!canceled && setState({data, error: false, loading: false})
			})
			.catch(onError)

		booksLoader(data)
		return () => canceled = true
	}, [data])

	const renderSpinner = loading && !error ? <Spinner/> : null
	const renderContent = !(loading || error) ? list.map((book) => {
		return (
			<li className="list-group-item card mb-3" key={book.id}><BookListItem book={book}/></li>
		)
	}) : null
	const renderError = error ? <ErrorIndicate/> : null

	return (
		<ul className="list-group book-list">
			{renderSpinner}
			{renderContent}
			{renderError}
		</ul>
	);
};

export default compose(withBookService())(BookList)