import SearchBox from './SearchBox';

let wrapper;

const children = [
	{
		id: '1',
		title: 'child 1',
	},
	{
		id: '2',
		title: 'child 2',
	},
	{ id: '3', title: 'child 3' },
	{
		id: '4',
		title: 'child 4',
	},
];

beforeAll(() => {
	wrapper = shallow(<SearchBox children={children} />);
});

describe('SearchBox component', () => {
	test("has class 'search-box'", () => {
		expect(wrapper.find('.search-box').length).toEqual(1);
	});
});
