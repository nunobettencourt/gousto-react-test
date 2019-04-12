import productsReducer from './products';

import { PRODUCTS_SET } from '../actions/types';

describe('Products reducer', () => {
	describe('INITIAL_STATE', () => {
		test('is correct', () => {
			const action = { type: 'DUMMY_ACTION' };
			const INITIAL_STATE = { loading: null, error: null, data: {} };

			expect(productsReducer(undefined, action)).toEqual(INITIAL_STATE);
		});
	});

	describe('PRODUCTS_SET', () => {
		const mockData = {
			1: { id: 1, tile: 'test' },
			2: { id: 2, tile: 'test' },
		};
		test('returns the correct state', () => {
			const action = { type: PRODUCTS_SET, data: mockData };
			const expectedState = {
				loading: false,
				error: null,
				data: {
					1: { id: 1, tile: 'test' },
					2: { id: 2, tile: 'test' },
				},
			};

			expect(productsReducer(undefined, action)).toEqual(expectedState);
		});
	});
});
