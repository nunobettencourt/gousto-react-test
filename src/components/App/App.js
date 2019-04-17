import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../About/About';
import HomeContainer from '../../containers/HomeContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<header className="navBar">
					<Link to="/">Home</Link>
					<Link to="/about-us">About</Link>
				</header>

				<main>
					<Switch>
						<Route path="/about-us" component={About} />
						<Route
							exact
							path="/:entity?/:id?"
							component={HomeContainer}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
