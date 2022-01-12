import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import Dashboard from './dashboard/Dashboard';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import Loans from './loans/Loans';

const App = () => {
	const { token, login, logout, userId } = useAuth();
	let routes;

	if (token) {
		routes = (
			<Switch>
				<Route path="/users" exact component={Users} />
				<Route path="/loans" exact component={Loans} />
				<Route path='/dashboard' exact component={Dashboard} />
				<Redirect to="/dashboard" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/" exact>
					<div>
						<h2>IF YOU ARE HERE AND YOU DON'T HAVE A LOG IN, I SUGGEST YOU GET A LOAN.</h2>
						<a href='https://kk-cash.com/'>KK CASH LOANS</a>
					</div>
				</Route>
				<Route path="/auth">
					<Auth />
				</Route>
				<Redirect to="/auth" />
			</Switch>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId: userId,
				login: login,
				logout: logout
			}}
		>
			<Router>
				<MainNavigation />
				<main>{routes}</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
