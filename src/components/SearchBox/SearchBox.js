import React, { useState } from 'react';
import { filter } from 'lodash';

const SearchBox = ({ products, children }) => {
	const [term, setTerm] = useState('');

	const filteredProducts = term
		? filter(products, product => product.title.includes(term))
		: products;

	return (
		<>
			<input
				type="text"
				id="search_box"
				value={term}
				onChange={e => setTerm(e.target.value)}
			/>
			{React.cloneElement(children, { products: filteredProducts })}
		</>
	);
};

export default SearchBox;
