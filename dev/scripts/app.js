import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    NavLink as Link,
    Route
} from "react-router-dom";
import HomePage from './components/HomePage.js'
import SchoolDetailsPage from './components/SchoolDetailsPage.js';


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={HomePage}/>
					<Route path="/:school_url" component={SchoolDetailsPage}/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));
