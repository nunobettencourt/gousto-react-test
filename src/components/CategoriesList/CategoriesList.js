import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CategoriesList.styles.css';

const CategoriesList = ({ categories, selected }) => {
	return (
		<ul className="categoriesList">
			{categories
				.filter(category => category.hidden === false)
				.map(({ id, title }) => (
					<li
						key={id}
						className={selected === id ? 'selected' : null}
					>
						<Link to={`/categories/${id}`}>{title}</Link>
					</li>
				))}
		</ul>
	);
};

CategoriesList.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default CategoriesList;
