import { useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicator";

const withDataComponent = (WrappedComponent) => {

	return (props) => {
		const [state, setState] = useState({
			data: [],
			loading: true,
			error: false
		})

		const { data, loading, error } = state

		const getData = props.getData

		const onError = () => {
			setState({...state, error: true})
		}

		const updateComponent = () => {
			let canceled = false
			getData()
				.then((data) => {
					!canceled && setState({data, error: false, loading: false})
				})
				.catch(onError)

			return () => canceled = true
		}

		useEffect(() => {
			updateComponent()
		}, [])

		const renderSpinner = loading && !error ? <Spinner/> : null
		const renderContent = !(loading || error) ? <WrappedComponent {...props} data={data}/> : null
		const renderError = error ? <ErrorIndicate/> : null

		return (
			<>
				{renderSpinner}
				{renderContent}
				{renderError}
			</>
		);
	}
}

export default withDataComponent