import { PRODUCTS_SET } from '../actions/types';

const INITIAL_STATE = { loading: null, error: null, data: {} };

const productsReducer = (state = INITIAL_STATE, { type, data }) => {
	switch (type) {
		case PRODUCTS_SET:
			return { ...state, loading: false, data };
		default:
			return state;
	}
};

export default productsReducer;
