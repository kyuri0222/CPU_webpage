import { React }  from "react";
import { Route, Switch } from 'react-router-dom';
import { Free, Main, Welfare, Getajob } from './';
const MainNav = () => {
	return (
		<>
			<Switch>
                <Route exact path="/" component={ Main }/>
                <Route exact path="/free" component={ Free }/>
				<Route exact path="/getajob" component={ Getajob }/>
                <Route exact path="/welfare" component={ Welfare }/>
			</Switch>
		</>
	);
};

export default MainNav;
