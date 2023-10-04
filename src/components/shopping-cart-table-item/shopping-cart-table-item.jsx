import React from 'react';
import "./shopping-cart-table-item.css"

const ShoppingCartTableItem = ({ num, label, count, price }) => {

	return (
		<>
			<th>
				{num}
			</th>
			<td className="item-title">
				{label}
			</td>
			<td>
				{count}
			</td>
			<td>
				$ {price}
			</td>
			<td className="buttons-group">
				<button
					type="button"
					className="btn btn-outline-warning btn-sm float-right">
					<i className="bi bi-dash-circle"></i>
				</button>
				<button
					type="button"
					className="btn btn-outline-success btn-sm float-right">
					<i className="bi bi-plus-circle"></i>
				</button>
				<button
					type="button"
					className="btn btn-outline-danger btn-sm float-right">
					<i className="bi bi-trash3"></i>
				</button>
				</td>
		</>
	);
};

export default ShoppingCartTableItem;