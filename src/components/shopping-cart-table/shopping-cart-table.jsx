import React from 'react';
import ShoppingCartTableItem from "../shopping-cart-table-item/shopping-cart-table-item";

import "./shopping-cart-table.css"

const ShoppingCartTable = ({ total }) => {
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
				<tr>
					<ShoppingCartTableItem
						num={1}
						label="Harry Potter and the Sorcerer's Stone"
						count={2}
						price={30}/>
				</tr>
				<tr>
					<ShoppingCartTableItem
						num={1}
						label="Harry Potter and the Sorcerer's Stone"
						count={2}
						price={30}/>
				</tr>
				<tr>
					<ShoppingCartTableItem
						num={1}
						label="Harry Potter and the Sorcerer's Stone"
						count={2}
						price={30}/>
				</tr>
				</tbody>
			</table>
			<div className="shopping-cart__total">$ {total}</div>
		</div>
	);
};

export default ShoppingCartTable;