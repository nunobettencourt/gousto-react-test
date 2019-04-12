import { PRODUCTS_SET } from './types';

import { apiAction } from './api';

export const fetchProducts = () => {
	return apiAction({
		entity: 'products',
		params: '?includes[]=categories&image_sizes[]=365',
		onSuccess: setProducts,
	});
};

export const setProducts = data => ({
	type: PRODUCTS_SET,
	data,
});
