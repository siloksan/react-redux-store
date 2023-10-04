import {connect, useSelector} from "react-redux";
import React from 'react';

import "./shopping-cart-table.css"

const ShoppingCartTable = ({ onDecrease, onIncrease, onDelete }) => {

	const state = useSelector( state => state.cart)
	const { cartItems, orderTotal} = state

	const renderRow = (item, idx) => {
		const {id, name, count, total} = item
		return (
			<tr key={item.id}>
				<th>
					{idx}
				</th>
				<td className="item-title">
					{name}
				</td>
				<td>
					{count}
				</td>
				<td>
					$ {total}
				</td>
				<td className="buttons-group">
					<button
						type="button"
						className="btn btn-outline-warning btn-sm float-right"
						onClick={() => onDecrease(id)}>
						<i className="bi bi-dash-circle"></i>
					</button>
					<button
						type="button"
						className="btn btn-outline-success btn-sm float-right"
						onClick={() => onIncrease(id)}>
						<i className="bi bi-plus-circle"></i>
					</button>
					<button
						type="button"
						className="btn btn-outline-danger btn-sm float-right"
						onClick={() => onDelete(id)}>
						<i className="bi bi-trash3"></i>
					</button>
				</td>
			</tr>
		)
	}

	return (
		<div className="shopping-cart">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Item</th>
					<th scope="col">Count</th>
					<th scope="col">Price</th>
					<th scope="col">Action</th>
				</tr>
				</thead>
				<tbody>
				{ cartItems.map(renderRow) }
				</tbody>
			</table>
			<div className="shopping-cart__total">$ {orderTotal}</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrease: (id) => {
			console.log(`Decrease ${id}`)
		},
		onIncrease: (id) => {
			console.log(`Increase ${id}`)
		},
		onDelete: (id) => {
			console.log(`Delete ${id}`)
		}
	}
}

export default connect(null, mapDispatchToProps)(ShoppingCartTable);