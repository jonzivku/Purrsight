import React, { useState } from 'react';
// import axios from 'axios';
import {Jumbotron } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {SignIn} from './SignIn.js';
import {SignUp} from './SignUp.js';
import {Profile} from './Profile.js';
import {Home} from './Home.js';
import {NavBar} from './NavBar.js';
import {DataFetching} from './DataFetching.js';
import './App.css';
// Building Basic React Auth...

// we dont use this, we're using reactbootstrap
// import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { AuthContext } from "./context/auth"
import PrivateRoute from "./PrivateRoute.js"

function App(props) {
	const existingTokens = JSON.parse(localStorage.getItem("tokens"));
	const [authTokens, setAuthTokens] = useState(existingTokens);

	const setTokens = (data) => {
		localStorage.setItem("tokens", JSON.stringify(data));
		setAuthTokens(data);
	}
	
	return(
		<>
			<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>	
			<Jumbotron>
				<h1 className="header">P U R R S I G H T</h1>
				<NavBar> </NavBar>
			</Jumbotron>
				<Router>
					<div>
						<Switch>
							<Route exact path="/Home">
								<Home />
							</Route>
							<PrivateRoute exact path="/Profile" component={Profile} />
							<Route exact path="/SignUp">
								<SignUp />
							</Route>
							<Route exact path="/SignIn">
								<SignIn />
							</Route>
							<Route exact path="/DataFetching">
								<DataFetching />
							</Route>
						</Switch>
					</div>
				</Router>
			</AuthContext.Provider>
		</>
	)

}

export default App;
