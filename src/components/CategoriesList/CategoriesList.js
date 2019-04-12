import React from 'react';
import PropTypes from 'prop-types';

import './CategoriesList.styles.css';

const CategoriesList = ({ categories }) => {
	return (
		<ul className="categoriesList">
			{categories
				.filter(category => category.hidden === false)
				.map(({ id, title }) => (
					<li key={id}>{title}</li>
				))}
		</ul>
	);
};

CategoriesList.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default CategoriesList;
