import {Route, Routes} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import Header from "../header/header";

import "./app.css"
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const App = () => {

	return (
		<div>
			<Header numItems={5} total={250}/>
			<div className="container-sm main fl-d">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					App
					{/*<ErrorButton />*/}
				</Routes>
				<ShoppingCartTable total={120}/>
			</div>
		</div>
	);
}

export default App;
