import React, { useContext } from 'react';
import Context from '../context/app-context';
import addToCartImg from '../assets/icons/bt_add_to_cart.svg';
import '../styles/product-item.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(Context);

	const handleClick = item =>  addToCart(item);

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImg} alt="product image" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;