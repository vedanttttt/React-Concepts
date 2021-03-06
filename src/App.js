import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
	return (
		<div className="App">
			<EventBind />
			<Counter />
			<FunctionClick />
			<ClassClick />
			<Greet name="Vanisha" heroName="Batman">
				<p>This is children props</p>
			</Greet>
			<Greet name="Clark" heroName="Superman">
				<button>Action</button>
			</Greet>
			<Welcome name="Vedant" heroName="Vman" />
			<Message />
		</div>
	);
}

export default App;

