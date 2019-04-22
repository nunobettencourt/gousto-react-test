import {
	PRODUCTS_SET,
	PRODUCTS_FETCH_START,
	PRODUCTS_FETCH_FAILED,
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: null, data: {} };

const productsReducer = (state = INITIAL_STATE, { type, data }) => {
	switch (type) {
		case PRODUCTS_FETCH_START:
			return { ...state, loading: true };
		case PRODUCTS_SET:
			return { ...state, loading: false, data };
		case PRODUCTS_FETCH_FAILED:
			return { ...state, loading: false, error: data };
		default:
			return state;
	}
};

export default productsReducer;
