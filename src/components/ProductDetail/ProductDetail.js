import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ProductDetail.styles.css';

const ProductDetail = ({ title, description }) => {
	const [isDisplayed, toggleDisplay] = useState(false);

	return (
		<div className="productDetail">
			<div
				onClick={() => toggleDisplay(!isDisplayed)}
				className={`productTitle ${isDisplayed ? 'selected' : null}`}
			>
				{title}
			</div>
			{isDisplayed && (
				<div className="productDescription">{description}</div>
			)}
		</div>
	);
};

ProductDetail.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ProductDetail;
