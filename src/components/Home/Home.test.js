import Home from './Home';
import CategoriesList from '../CategoriesList/CategoriesList';

describe('Home', () => {
	const fetchCategories = jest.fn();
	const fetchProducts = jest.fn();

	const categories = [
		{ id: 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9', title: 'Drinks Cabinet' },
		{ id: '529ea59e-bf7e-11e5-840e-02fada0dd3b9', title: 'Kitchenware' },
		{ id: 'fec10d0e-bf7d-11e5-90a9-02fada0dd3b9', title: 'Desserts' },
	];

	const products = {
		'0a8e892c-1780-11e6-9f77-0255e2c77e1d': {
			id: '0a8e892c-1780-11e6-9f77-0255e2c77e1d',
			title: 'Balsajo Black Garlic Cloves',
		},
		'0a947ece-c6ab-11e6-8a16-02eaa658c421': {
			id: '0a947ece-c6ab-11e6-8a16-02eaa658c421',
			title: 'Superbake Morning Dreamer Pancakes (GF) (DF)',
		},
		'0b1ebb90-8b2e-11e8-b8c7-02a4637b1c98': {
			id: '0b1ebb90-8b2e-11e8-b8c7-02a4637b1c98',
			title: 'OXO Good Grips Garlic Press Black',
		},
	};

	test('renders without crashing', () => {
		shallow(
			<Home
				fetchCategories={() => fetchCategories}
				fetchProducts={() => fetchProducts}
				categories={categories}
				products={products}
			/>
		);
	});

	test('renders all child components', () => {
		const wrapper = shallow(
			<Home
				fetchCategories={() => fetchCategories}
				fetchProducts={() => fetchProducts}
				categories={categories}
				products={products}
			/>
		);

		expect(wrapper.find('SearchBox').length).toEqual(1);
		expect(wrapper.find('CategoriesList').length).toEqual(1);
	});
});
