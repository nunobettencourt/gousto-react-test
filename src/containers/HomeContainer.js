import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Home from '../components/Home/Home';

import { fetchCategories, fetchProducts } from '../redux/actions';

const mapStateToProps = state => {
	const { categories, products } = state;

	return {
		categories: categories.data,
		products: products.data,
	};
};

export const HomeContainer = connect(
	mapStateToProps,
	{
		fetchCategories,
		fetchProducts,
		changePage: () => push('/about-us'),
	}
)(Home);

export default HomeContainer;
