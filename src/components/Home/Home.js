import React, { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import SearchBox from '../SearchBox/SearchBox';

const CategoriesList = lazy(() => import('../CategoriesList/CategoriesList'));
const ProductsList = lazy(() => import('../ProductsList/ProductsList'));

const Home = props => {
	const {
		fetchCategories,
		fetchProducts,
		categories,
		selectedCategory,
		products,
	} = props;

	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		const fetchInitialData = () => {
			fetchCategories();
			fetchProducts();

			setInitialized(true);
		};
		!initialized && fetchInitialData();
	});

	return (
		<div className="homePage">
			<Suspense fallback={<div>Loading...</div>}>
				<CategoriesList
					categories={categories}
					selected={selectedCategory}
				/>
				<div className="main-content">
					<SearchBox products={products}>
						<ProductsList />
					</SearchBox>
				</div>
			</Suspense>
		</div>
	);
};

Home.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	fetchProducts: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
	products: PropTypes.any.isRequired,
};

export default Home;
