import {
	CATEGORIES_FETCH_START,
	CATEGORIES_FETCH_SUCCESS,
	CATEGORIES_FETCH_FAILED,
} from './types';

import { apiAction } from './api';

export const fetchCategories = () => {
	return apiAction({
		entity: 'categories',
		onStart: categoriesFetchStart,
		onSuccess: categoriesFetchSuccess,
		onFailure: categoriesFetchError,
	});
};

export const categoriesFetchStart = () => ({
	type: CATEGORIES_FETCH_START,
});

export const categoriesFetchSuccess = data => ({
	type: CATEGORIES_FETCH_SUCCESS,
	data,
});

export const categoriesFetchError = data => ({
	type: CATEGORIES_FETCH_FAILED,
	data,
});
