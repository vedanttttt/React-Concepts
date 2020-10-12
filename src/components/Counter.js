import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
    //     this.setState({
    //         count: this.state.count + 1,
    //     },()=> {console.log('Callback value', this.state.count)}); //this is synchronous console.log statement

    //     console.log(this.state.count); //this function will execute first bcoz it is asynchronous , thats why we use callback to execute one after previous things get done
    //  // So place the code at callback of setState method

    this.setState((prevState,props)=>({ //whenever u want to update the state from previous state , make sure to pass in functional argument instead of regular object , use prevState
        count : prevState.count + 1
    }))
    console.log(this.state.count)
    }

    incrementFive(){ //without prevState,this function will increase by 1 instead of 5 that we want 
        this.increment(); 
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
               <div>Count -> {this.state.count} </div>     
               <button onClick={()=>this.incrementFive()}>Increment</button>           
            </div>
        )
    }
}

export default Counter
