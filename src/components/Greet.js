import React from 'react';

// function Greet(props){
//     return(
//         <h1>Welcome {props.name}</h1>
//     );
// }

const Greet = (props)=>{
	const {name,heroName}=props  //this is a way to destructure props in function components , it is not necessary , we can simply use props.name without destructuring
    return(
    	<div>
	        <h1>Hello {name} called as {heroName}</h1>
	        
	          
	    </div>
    );
}

export default Greet; //we are exporting Greet as default which means that I can import this component in aApp.js by any name (not necessarily Greet)

//Name export 
// eg=> export const Greet  =>in this case u have to import component with exact same name