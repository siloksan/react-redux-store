import {Route, Routes} from "react-router-dom";
import {CartPage, HomePage} from "../pages";

const App = () => {

	return (
		<div>
			Heda
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				App
				{/*<ErrorButton />*/}
			</Routes>
		</div>
	);
}

export default App;
