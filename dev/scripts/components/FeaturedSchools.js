import React from 'react';
import ReactDOM from 'react-dom';
import {ajax} from 'jquery';
import {
    BrowserRouter as Router,
    NavLink as Link,
    Route
} from "react-router-dom";
import Map from './Map';



export default class FeaturedSchools extends React.Component {
	constructor() {
		super();
		this.state = {
			schools: [],
			currentView: [0,1,2],
		}
		this.toRight = this.toRight.bind(this);
		this.toLeft = this.toLeft.bind(this)
	}
	toRight() {
		let currentView = this.state.currentView;
		let nextView = currentView.map((i)=>{
			return i + 1;
		})
		this.setState({
			currentView: nextView
		})

		// console.log(this.state.currentView[0], this.state.schools.length)
	}
	//EDIT CSS VIEWS FOR MEDIA QUERIES LATER ON TO DISPALY ONLY 2 OR 1 

	toLeft() {
		let currentView = this.state.currentView;
		let nextView = currentView.map((i)=>{
			return i - 1;
		})

		this.setState({
			currentView: nextView
		})
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
						long: school.longitude,
						url: school.slug
					}
				});
				// console.log(schools);
				this.setState({
					schools: schools
				})
			});
		}
	render() {

		const buttons = () => { // hide buttons when reached end of carousels
			if (this.state.currentView[0] == 0) {
				return (
					<div className="buttons">
						<button className="right nav-btn" onClick={this.toRight}><span>&rsaquo;</span></button>
					</div>
				)
			} else if (this.state.currentView[2] == this.state.schools.length-1) {
				return (
					<div className="buttons">
						<button className="left nav-btn" onClick={this.toLeft}><span>&lsaquo;</span></button>
					</div>
				)
			} else {
				return (
					<div className="buttons">
						<button className="left nav-btn" onClick={this.toLeft}><span>&lsaquo;</span></button>
						<button className="right nav-btn" onClick={this.toRight}><span>&rsaquo;</span></button>
					</div>
				)
			}
		}

		if (this.state.schools[0] !== undefined) {
			return (
				<section id="featuredSchools">
				<h2>Featured Schools</h2>
				<div className="gallery">
					{this.state.currentView.map((i) => {
						return (
							<div className="galleryCard">
								<Link to={`/${this.state.schools[i].url}`}>
									<figure key={`${i}`} className="schoolCard">
										<Map location={this.state.schools[i]}/>
										<Caption school={this.state.schools[i]}/>
									</figure>
								</Link>
								
							</div>
							)
						})
					}
					{buttons()}
				</div>
				</section>
			)
		} else {
			return(<h1>Loading</h1>)
		}
	}
}



class Caption extends React.Component {
	render() {
		let school = this.props.school;
		return (
			<div className="caption" >
					<h3>{school.name}</h3>
					<h4>{school.level}</h4>
					<p>{school.type} | {school.language}</p>
					<span>Toronto</span>
			</div>
		)

		}
	}
