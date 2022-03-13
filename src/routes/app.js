import React from 'react';
import Context from '../context/app-context';
import useInitialState from '../hooks/useIntitalState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/layout';
import Checkout from '../pages/checkout';
import CreateAccount from '../pages/create-account';
import Home from '../pages/home';
import Login from '../pages/login';
import MyAccount from '../pages/my-account';
import NotFound from '../pages/not-found';
import Orders from '../pages/orders';
import PasswordRecovery from '../pages/password-recovery';
import SendEmail from '../pages/send-email';

const App = () => {
	const initialState = useInitialState();
	return (
		<Context.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/password-recovery" element={<PasswordRecovery />} />
						<Route exact path="/new-password" element={<SendEmail />} />
						<Route exact path="/account" element={<MyAccount />} />
						<Route exact path="/signup" element={<CreateAccount />} />
						<Route exact path="/checkout" element={<Checkout />} />
						<Route exact path="/orders" element={<Orders />} />
						<Route exact path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;