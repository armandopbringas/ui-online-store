import React, { useState, useContext } from 'react';
import Context from '../context/app-context';
import Menu from './menu';
import MyOrder from '../containers/my-order';
import '../styles/header.scss';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {
	const [ toggle, setToggle ] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(Context);

	const handleToggle = () => setToggle(!toggle);

	return (
		<nav>
			<h2 className="menu">Menu</h2>
			<div className="navbar-left">
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li
						onClick={handleToggle} 
						className="navbar-email"
					>
						email@example.com
					</li>
					<li 
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{ toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;