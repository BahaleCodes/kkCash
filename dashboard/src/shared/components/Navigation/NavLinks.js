import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
	const auth = useContext(AuthContext);

	return (
		<ul className="nav-links">
			{/* {auth.isLoggedIn && (
				<li>
					<NavLink to={'/loans'}>Loans</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<NavLink to={'/users'}>Users</NavLink>
				</li>
			)} */}
			{auth.isLoggedIn && (
				<li>
					<button onClick={auth.logout}>LOGOUT</button>
				</li>
			)}
			{!auth.isLoggedIn && (
				<li>
					<NavLink to="/auth">Log In</NavLink>
				</li>
			)}
		</ul>
	);
};

export default NavLinks;
