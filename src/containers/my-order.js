import React, { useContext } from 'react';
import OrderItem from '../components/order-item';
import Context from '../context/app-context';
import '../styles/my-order.scss';
import arrow from '../assets/icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(Context);
  
  const reducer = (accumalator, currentValue) => accumalator + currentValue.price;

	const sumTotal = () => {
		const sum = state.cart;
    const newSum = sum.reduce(reducer, 0);
		return newSum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p style={{color: 'black'}}>
						<span>Total</span>
					</p>
					<p style={{color: 'black'}}>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;