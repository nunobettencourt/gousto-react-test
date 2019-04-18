import ProductDetail from './ProductDetail';

const title = 'title';
const description = 'description';

describe('ProductDetail component', () => {
	test('renders without crashing', () => {
		shallow(<ProductDetail title={title} description={description} />);
	});
});
