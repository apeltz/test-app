import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Subs extends Component {

	render() {
		const subs = this.props.subs
		let allSubs = subs.map((sub, i) => {
			return (
				<div key={`sub-${i}`}>{sub}</div>
			)
		})

		return (
			<div class={style.subs}>
				<h2>Subreddits:</h2>
				{allSubs}
			</div>
		);
	}
}
