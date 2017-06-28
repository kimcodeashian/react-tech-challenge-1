import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    NavLink as Link,
    Route
} from "react-router-dom";


import Intro from './components/Intro';
import Services from './components/Services';

import FeaturedSchools from './components/FeaturedSchools'









class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Intro />
					<Services />
					<Route exact path="/" component={FeaturedSchools}/>
				</div>
			</Router>
		)
	}
}


ReactDOM.render(<App/>, document.getElementById("app"));
// <nav>
// 	<Link to="/">Home</Link>
// </nav>
