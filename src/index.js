import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import store from "./store";
import ErrorIndicate from "./components/error-indicator";
import {Provider} from "react-redux";
import {ErrorBoundary} from "react-error-boundary";
import BookStoreService from "./services/bookstore-service";
import {BrowserRouter} from "react-router-dom";

export const BookStoreServiceContext = createContext(null)
const bookStoreService = new BookStoreService()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ErrorBoundary FallbackComponent={ErrorIndicate}>
					<BookStoreServiceContext.Provider value={bookStoreService}>
						<App/>
					</BookStoreServiceContext.Provider>
				</ErrorBoundary>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);