import React from 'react';
import ProductItem from '../components/product-item';
import '../styles/product-list.scss';

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;