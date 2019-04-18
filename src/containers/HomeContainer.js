import { connect } from 'react-redux';
import _ from 'lodash';

import Home from '../components/Home/Home';

import { fetchCategories, fetchProducts } from '../redux/actions';

const getProducts = (products, entity, id) => {
	switch (entity) {
		case 'categories':
			return _.filter(products, { categories: [id] });
		default:
			return products;
	}
};

const mapStateToProps = (state, ownProps) => {
	const { categories, products } = state;

	const {
		match: {
			params: { id, entity },
		},
	} = ownProps;

	return {
		categories: categories.data,
		selectedCategory: id,
		products: getProducts(products.data, entity, id),
	};
};

export const HomeContainer = connect(
	mapStateToProps,
	{
		fetchCategories,
		fetchProducts,
	}
)(Home);

export default HomeContainer;
