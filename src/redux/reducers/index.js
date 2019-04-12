import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import all reducers
import categoriesReducer from './categories';
import productsReducer from './products';

const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		categories: categoriesReducer,
		products: productsReducer,
	});

export default rootReducer;
