import React from 'react';

import tog from '../../libraries/tog'

export default class Rankings extends React.Component {
	
	render() {
		return (
			<div className="ranking">
				{this.state.ranking}
			</div>
		);
	}
	
	constructor(props) {
		
		super(props)
		this.state = {}
		this.state.ranking = props.rprop
		
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l