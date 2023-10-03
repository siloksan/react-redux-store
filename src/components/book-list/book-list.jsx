import React, {useEffect} from 'react';
import BookListItem from "../book-list-item";
import {useDispatch, useSelector} from "react-redux";
import {withBookService} from "../hoc";
import {bindActionCreators, compose} from "@reduxjs/toolkit";
import booksSlice from "../../reducers";

import "./book-list.css"

const BookList = ({bookServiceContext}) => {

	const list = useSelector( state => state.books.list)
	const dispatch = useDispatch()
	const data = bookServiceContext.getBooks()

	const { booksLoader } = bindActionCreators(booksSlice.actions, dispatch)


	useEffect(() => {
		booksLoader(data)
	}, [])

	return (
		<ul>
			{list.map((book) => {
				return (
					<li key={book.id}><BookListItem book={book}/></li>
				)
			})}
		</ul>
	);
};

export default compose(withBookService())(BookList)