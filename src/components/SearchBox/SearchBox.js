import React, { useState } from 'react';
import { filter } from 'lodash';

import './SearchBox.styles.css';

const SearchBox = ({ products, isLoading, children }) => {
	const [term, setTerm] = useState('');

	const filteredProducts = term
		? filter(products, product =>
				product.title.toLowerCase().includes(term.toLocaleLowerCase())
		  )
		: products;

	return (
		<div className="search-box">
			<input
				type="text"
				id="search_box"
				placeholder="find products"
				value={term}
				onChange={e => setTerm(e.target.value)}
			/>
			{React.cloneElement(children, {
				products: filteredProducts,
				isLoading: isLoading,
			})}
		</div>
	);
};

export default SearchBox;
