import React from 'react';

const Hello = () =>{

	//This is jsx version
    // return(
    //		<div className="dummyClass">	
    //     		<h1>Hello Vedant</h1>
    //		</div>
    // );

    //without using jsx
    return React.createElement(
        'div',
        {id: 'hello',className: 'dummyClass'},
        React.createElement('h1',null,'Hello Vedant')
    );
}

export default Hello;