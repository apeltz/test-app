import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Subform extends Component {
	render() {

		const { addSub } = this.props;
		return (
			<form onSubmit={e => {
				e.preventDefault()
				let input = e.target[0];
				if (!input.value.trim()) {
					return
				}
				addSub(input.value)
				input.value = ''
			}}>
				<input />
				<button type='submit'>Add Subreddit</button>
			</form>
		);
	}
}
