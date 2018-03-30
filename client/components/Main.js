import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
        	dogs : [],
        	sayWoof : false
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