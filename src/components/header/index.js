import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

import Subs from '../subs';
import Subform from '../subform';

export default class Header extends Component {

	render() {
		return (
			<header class={style.header}>
				<h1>Reddit Slides</h1>
				<nav>
					<Link href="/">All Pics</Link>
					<Link href="/slideshow">Slide Show</Link>
				</nav>
			<Subform addSub={this.props.addSub}/>
			<Subs subs={this.props.subs} test={this.props.test}/>
			</header>
		);
	}
}
