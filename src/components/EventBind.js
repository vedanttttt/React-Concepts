//14). Binding event handlers

import React,{Component} from 'react';

class EventBind extends Component{

	constructor(props){
		super(props)

		this.state={
			message: 'Hello'
		}

		//this approach is best writing this statement in construtor
		this.clickHandler=this.clickHandler.bind(this);
	}

	clickHandler(){
		this.setState({
			message: 'GoodBye !'
		})
	}

	//If we use the below code, we will not need the bind statement written in the constructor
	// clickHandler=()=>{
	// 	this.setState({
	// 		message: 'GoodBye !'
	// 	})
	// }

	render(){
		return(
			<div>
				<div>{this.state.message}</div>
				<button onClick={this.clickHandler}>Click</button>
				{/* If we use the below line we will not need the bind statement written in the constructor , there are 4 ways to do binding of event handlers */}
				{/* {()=> this.clickHandler()} */}
			</div>
			)
	}
}

export default EventBind;