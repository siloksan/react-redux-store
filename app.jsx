import {ErrorBoundary} from "react-error-boundary";
import ErrorIndicate from "../error-indicator";
import {createContext} from "react";
import BookstoreService from "../../services/bookstore-service";
export const BookStoreService = createContext(null)


function App() {

  return (
    <ErrorBoundary FallbackComponent={ErrorIndicate}>
      <BookStoreService.Provider value={BookstoreService}>
        App
      </BookStoreService.Provider>
    </ErrorBoundary>
  );
}

export default App;
