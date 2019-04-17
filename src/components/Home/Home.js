import React, { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

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
		<div>
			<h1 className="title">Welcome</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<CategoriesList
					categories={categories}
					selected={selectedCategory}
				/>
				<ProductsList products={products} />
			</Suspense>
		</div>
	);
};

Home.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	fetchProducts: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
};

export default Home;
