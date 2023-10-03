import {useContext} from "react";
import {BookStoreServiceContext} from "../../";

const withBookService = () => (WrappedComponent) => {

	return (props) => {
		const bookServiceContext = useContext(BookStoreServiceContext)

		return (
			<WrappedComponent {...props} bookServiceContext={bookServiceContext} />
		)
	}
}

export default withBookService