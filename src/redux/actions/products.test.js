import * as actions from './index';
import { PRODUCTS_SET } from './types';

const mockStore = configureStore();
const store = mockStore();

describe('Products actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	test('dispatches the correct action and payload', () => {
		const mockData = {
			1: { id: 1, tile: 'test' },
			2: { id: 2, tile: 'test' },
		};

		const expectedActions = [
			{
				type: PRODUCTS_SET,
				data: {
					1: { id: 1, tile: 'test' },
					2: { id: 2, tile: 'test' },
				},
			},
		];

		store.dispatch(actions.setProducts(mockData));
		expect(store.getActions()).toEqual(expectedActions);
	});
});
