import CategoriesList from './CategoriesList';

const categories = [
	{
		id: 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9',
		title: 'Drinks Cabinet',
	},
	{
		id: '529ea59e-bf7e-11e5-840e-02fada0dd3b9',
		title: 'Kitchenware',
	},
	{ id: 'fec10d0e-bf7d-11e5-90a9-02fada0dd3b9', title: 'Desserts' },
	{
		id: '01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9',
		title: 'Food Cupboard',
	},
	{ id: '17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9', title: 'Snacks' },
];

const selected = '529ea59e-bf7e-11e5-840e-02fada0dd3b9';

describe('CategoriesList component', () => {
	test('renders without crashing', () => {
		shallow(<CategoriesList categories={categories} selected={selected} />);
	});
});
