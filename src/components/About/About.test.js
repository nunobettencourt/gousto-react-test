import About from './About';

describe('Home component', () => {
	test('renders without crashing', () => {
		shallow(<About />);
	});
});
