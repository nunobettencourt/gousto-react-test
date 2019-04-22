import ProductsList from './ProductsList';
import ProductDetail from '../ProductDetail/ProductDetail';

let wrapper;

const products = [
	{ id: 1, title: 'test 1', description: 'description 1', is_for_sale: true },
	{ id: 2, title: 'test 2', description: 'description 2', is_for_sale: true },
];

beforeAll(() => {
	wrapper = mount(<ProductsList products="" />);
});

describe('ProductsList component', () => {
	test('has class "categories-list"', () => {
		expect(wrapper.find('.products-list').length).toEqual(1);
	});

	test('renders text when no items are found', () => {
		expect(wrapper.text()).toEqual('No items found');
	});

	test('renders list items', () => {
		wrapper.setProps({ products: products });
		expect(wrapper.find(ProductDetail).length).toEqual(2);
	});
});
