import {Route, Routes} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import Header from "../header/header";

import "./app.css"

const App = () => {

	return (
		<div>
			<Header />
			<div className="container-sm main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					App
					{/*<ErrorButton />*/}
				</Routes>
			</div>
		</div>
	);
}

export default App;
