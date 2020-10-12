import React, { Component } from 'react';

class Message extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: 'Welcome visitor'
		}
	}

	change() {
		this.setState({
			text: 'Thankyou for subscribing'
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.text}</h1>
				<button onClick={() => this.change()}>Subscribe</button>
			</div>
		);
	}
}

export default Message;