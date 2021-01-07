import { React ,useState }  from "react";
import { Route, Switch } from 'react-router-dom';
import MainLayout from './Main/MainLayout';
import { Login, Signup, Findpw } from './Auth';
const Nav = () => {
    //const [isloggedin, setloggedin] = useState(true);
    //{isloggedin ? <Redirect to="/" /> : <Redirect to="login" />}
	return (
		<>
			<Switch>
                <Route exact path="/login" component={ Login }/>
				<Route exact path="/Signup" component={ Signup }/>
				<Route exact path="/Findpw" component={ Findpw }/>
                <Route path="/" component={ MainLayout }/>
			</Switch>
		</>
	);
};

export default Nav;
