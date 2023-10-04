import React from 'react';
import "./book-list-item.css"

const BookListItem = ({book}) => {

	const {title, author, price, coverBook} = book
	return (
		<>
			<div className="row g-0">
				<div className="col-md-3 img-container">
					<img
						src={coverBook}
						className="img-thumbnail book-cover"
						alt="book cover"
						style={{width: 160, height: 230}}/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text"><small className="text-body-secondary">{author}</small></p>
						<p className="card-text book-price">$ {price}</p>
						<button className="btn btn-primary">Add to cart</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookListItem;