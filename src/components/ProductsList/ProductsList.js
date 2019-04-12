import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import './ProductsList.styles.css';

const ProductsList = ({ products }) => {
	return (
		<ul className="productsList">
			{_.filter(products, 'is_for_sale').map(({ id, title }) => (
				<li key={id}>{title}</li>
			))}
		</ul>
	);
};

ProductsList.propTypes = {
	products: PropTypes.object,
};

export default ProductsList;
