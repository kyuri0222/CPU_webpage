import { React ,useState }  from "react";
import { Route, Switch } from 'react-router-dom';
import Layout from './Main/Layout';
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
                <Route path="/" component={ Layout }/>
			</Switch>
		</>
	);
};

export default Nav;
