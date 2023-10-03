import React from 'react';
import "./book-list-item.css"

const BookListItem = ({book}) => {

	const {title, author, price, coverBook} = book
	return (
		<>
			<div className="row g-0">
				<div className="col-md-auto img-container">
					<img
						src={coverBook}
						className="img-thumbnail rounded book-cover" alt="book cover"/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text"><small className="text-body-secondary">{author}</small></p>
						<p className="card-text book-price">$ {price}</p>
						<button className="btn btn-primary">Go somewhere</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookListItem;