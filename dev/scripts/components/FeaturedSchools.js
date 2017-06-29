import React from 'react';
import ReactDOM from 'react-dom';

import {ajax} from 'jquery';
import Map from './Map';



export default class FeaturedSchools extends React.Component {
	constructor() {
		super();
		this.state = {
			schools: [],
			currentView: [0,1,2]
		}
		this.toRight = this.toRight.bind(this);
		this.toLeft = this.toLeft.bind(this)
	}
	toRight() {
		let currentView = this.state.currentView;
		let nextView = currentView.map((i)=>{
			return i + 3;
		})
		this.setState({
			currentView: nextView
		})
		console.log(this.state.schools[1])
	}

	toLeft() {
		let currentView = this.state.currentView;
		let nextView = currentView.map((i)=>{
			return i - 3;
		})
		this.setState({
			currentView: nextView
		})
		console.log(this.state.schools[1])
	}

	componentDidMount() {
			ajax({
				url: 'http://www.scholarhood.ca/dev-test.json',
				method: 'GET',
				dataType: 'json'
			})
			.then((res) => {
				// console.log(res);
				let schools = res.map((school) => {
					return {
						name: school.name,
						level: school.level[0],
						type: school.type,
						language: school.language,
						lat: school.latitude,
						long: school.longitude
					}
				});
				// console.log(schools);
				this.setState({
					schools: schools
				})
			});
		}
		render() {
			return (
				<section id="featuredSchools">
				<h2>Featured Schools</h2>
				<div className="cardGallery">
					{this.state.currentView.map((i) => {
						return (
							<figure key={`${i}`} className="schoolCard">
								<Map location={this.state.schools[i]}/>
								<Caption location={this.state.schools[i]}/>

							</figure>
						)
					})

					}
					<button className="left nav-btn" onClick={this.toLeft}>left</button>
					<button className="right nav-btn" onClick={this.toRight}>right</button>
				</div>
				</section>
			)
		}
}

// add this component in to below map
// {
	// <Caption school={this.state.schools[i]}/>

// }

class Caption extends React.Component {

	render() {
		let school = this.props.location;
		if (school !== undefined){
		return (
			<div className="caption" >
						<h2>{school.name}</h2>
						<h3>{school.level}</h3>
						<figcaption>
							<p>{school.type}</p>
							<p>{school.language}</p>
						</figcaption>
			</div>
		)

		} else {
			return (<h3>loading</h3>)
		}
	}
}