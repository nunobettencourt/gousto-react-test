import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ProductDetail from '../ProductDetail/ProductDetail';

import './ProductsList.styles.css';

const ProductsList = ({ products, isLoading }) => {
	return (
		<div className="products-list">
			{!isLoading && _.isEmpty(products) ? (
				<div>No items found</div>
			) : (
				_.filter(products, product => product.is_for_sale).map(
					({ id, title, description }) => (
						<ProductDetail
							key={id}
							id={id}
							title={title}
							description={description}
						/>
					)
				)
			)}
		</div>
	);
};

ProductsList.propTypes = {
	products: PropTypes.any,
};

export default ProductsList;
