import React from 'react';
import ProductItem from '../components/product-item';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/product-list.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem 
						key={product.id}
						product={product} 
					/>
				))}
			</div>
		</section>
	);
}

export default ProductList;