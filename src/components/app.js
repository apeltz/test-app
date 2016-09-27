import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Slideshow from './slideshow';


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	addSub = sub => {
		this.state.subs = [...this.state.subs, sub]
		this.setState()
	}

	state = {
		subs: ['pics']
	};

	render() {
		return (
			<div id="app">
				<Header subs={this.state.subs} test={this.state.test} addSub={this.addSub}/>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Slideshow path="/slideshow"/>
				</Router>
			</div>
		);
	}
}
