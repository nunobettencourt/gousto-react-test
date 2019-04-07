import ProductsList from './ProductsList';

describe('ProductsList component', () => {
	test('renders without crashing', () => {
		shallow(<ProductsList />);
	});
});
