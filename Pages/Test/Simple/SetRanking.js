import React from 'react';

export default class SetRanking extends React.Component {
	
	render() {
		return (
			<p>
				<button onClick={() => {
					this.props.change_ranking(this.props.to_change)
				}}>
					Praise {this.props.to_change}
				</button>
			</p>
		);
	}
	
	constructor(props) {
		
		super(props)
		
	}
	
}