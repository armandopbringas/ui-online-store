import React from 'react';
import '../styles/header.scss';

const Header = () => {
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
					<li className="navbar-email">email@example.com</li>
					<li className="navbar-shopping-cart">
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;