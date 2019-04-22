import { BrowserRouter as Router } from 'react-router-dom';
import CategoriesList from './CategoriesList';

let wrapper;

const categories = [
	{ id: '1', title: 'Drinks Cabinet' },
	{ id: '2', title: 'Kitchenware' },
	{ id: '3', title: 'Desserts' },
	{ id: '4', title: 'Food Cupboard' },
	{ id: '5', title: 'Snacks' },
];

beforeAll(() => {
	wrapper = mount(
		<Router>
			<CategoriesList categories={categories} selected="4" />
		</Router>
	);
});

describe('CategoriesList component', () => {
	test('has class "categories-list"', () => {
		expect(wrapper.find('.categories-list').length).toEqual(1);
	});

	test('renders all items in the list', () => {
		expect(wrapper.find('li').length).toEqual(5);
		expect(wrapper.find('Link').length).toEqual(5);
	});

	test('selected item has correct class', () => {
		expect(wrapper.find('.selected').length).toEqual(1);
	});
});
