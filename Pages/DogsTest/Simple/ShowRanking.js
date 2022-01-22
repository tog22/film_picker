import React from 'react';

export default class ShowRanking extends React.Component {
	
	render() {
		return (
			<>
				<h2>
					Child component:
				</h2>
				<p>
					Dogs are {this.props.parent_state.dogs}
				</p>
				<p>
					West Highland Terriers are {this.props.parent_state.breeds.westies}
				</p>
			</>
		);
	}
	
	constructor(props) {
		
		super(props)
		
	}
	
}