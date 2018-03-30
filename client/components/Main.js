import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
        	dogs : [],
        	sayWoof : false
        	/* 
        	This state is so US-centric. What if some dogs barked randomly 
        	in Japanese (wan-wan), German (wau-wau), or ()

        	*/ 
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
    	return axios.get('/api/dogs')
    	.then(res => res.data)
    	.then(obj => {
    		console.log("res obj", obj)
    		this.setState({dogs : obj.dogs})
    	})
    	.catch(console.err)
    }

    handleClick(event) {
    	// All the dogs woof, but how can we get one dog to woof on click?
    	this.setState({
    		sayWoof : !this.state.sayWoof
    	})
    }

    render(){
        return (
        	<div>
	        	<h3>ASCII Dogs</h3>
	        	{

	        	    this.state.dogs.map((dog, i) => {
	        			
	        			return (
	        				// We can probably refactor this in to a dummy dog component
	        				<div key={i} className="dog" onClick={this.handleClick}>
		        				{
		        					dog.split("\n").map((dogLine, idx) => {
		        						return (
		        							<div key={idx} >
		        							 {dogLine}
		        							</div>
		        						)
		        					})
		        					
		        				}
		        				<br />
		        				<span>{this.state.sayWoof ? 'woof' : null}</span>
		        				<br />
	        				</div>
	        			)
	        		}) 
	        	}
	        </div>   
        )
    }
}