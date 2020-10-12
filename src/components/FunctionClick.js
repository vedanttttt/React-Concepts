// 13). Event handling in functional components

import React from 'react'

function FunctionClick(){

	function clickHandler(){
		console.log('Button Clicked');
	}

	return(
		<div>
			<button onClick={clickHandler}>Click</button> 
			// on click we pass the function as event handler
			// events in react are written in camelCase form 
			// event handler is a function not a function call so dont use clickHandler()
		</div>
		)
}

export default FunctionClick;