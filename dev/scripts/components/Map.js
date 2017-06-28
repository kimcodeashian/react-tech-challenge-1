import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyBTxoKUl1UNR0iIm0_PTAi96SK7pfg5dEY'};

//const key = AIzaSyBTxoKUl1UNR0iIm0_PTAi96SK7pfg5dEY

// const coords = {
//   lat: 51.5258541,
//   lng: -0.08040660000006028
// };

export default class Map extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}
	onMapCreated(map) {
	    map.setOptions({
	      disableDefaultUI: true
	    });
	  }

	  onDragEnd(e) {
	    console.log('onDragEnd', e);
	  }

	  onCloseClick() {
	    console.log('onCloseClick');
	  }

	  onClick(e) {
	    console.log('onClick', e);
	  }

	  render() {
	  	let location = this.props.location;
	  	// console.log(location);

	  	if (location !== undefined){
	  		console.log(location)
	  		return (
				<Gmaps
				  width={'100%'}
				  height={'100%'}
				  lat={location.lat}
				  lng={location.long}
				  zoom={15}
				  loadingMessage={'Be happy'}
				  params={params}
				  draggable={false}
				  onMapCreated={this.onMapCreated}>
				  <Marker
				    lat={location.lat}
				    lng={location.long}
				    draggable={false}
				    onDragEnd={this.onDragEnd} />
				</Gmaps>
	  		)
	  	}
	  	return (
	  		<h2>LOADING</h2>
	  	)
	  }
}