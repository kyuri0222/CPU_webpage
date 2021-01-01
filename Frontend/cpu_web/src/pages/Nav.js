import React from "react";
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
const Nav = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={ Main }/>
			</Switch>
		</>
	);
};

export default Nav;
