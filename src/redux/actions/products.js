import {
	PRODUCTS_SET,
	PRODUCTS_FETCH_START,
	PRODUCTS_FETCH_FAILED,
} from './types';

import { apiAction } from './api';

export const fetchProducts = () => {
	return apiAction({
		entity: 'products',
		params: '?includes[]=categories&image_sizes[]=365',
		onStart: productsFetchStart,
		onSuccess: setProducts,
		onFailure: productsFetchError,
	});
};

export const productsFetchStart = () => ({
	type: PRODUCTS_FETCH_START,
});

export const setProducts = data => ({
	type: PRODUCTS_SET,
	data,
});

export const productsFetchError = data => ({
	type: PRODUCTS_FETCH_FAILED,
	data,
});
