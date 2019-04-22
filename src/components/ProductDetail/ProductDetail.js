import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ProductDetail.styles.css';

const ProductDetail = ({ title, description }) => {
	const [isDisplayed, toggleDisplay] = useState(false);

	return (
		<div className="product-detail">
			<div
				onClick={() => toggleDisplay(!isDisplayed)}
				className={`title ${isDisplayed ? 'selected' : ''}`}
			>
				{title}
			</div>
			{isDisplayed && <div className="description">{description}</div>}
		</div>
	);
};

ProductDetail.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ProductDetail;
