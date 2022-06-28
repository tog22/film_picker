import React from 'react';
import update from 'immutability-helper';

import SetRanking from './SetRanking'
import ShowRanking from './ShowRanking'

export default class Dogs extends React.Component {
	
	render() {
		return (
			<div>
				<SetRanking
					change_ranking={this.change_ranking}
					to_change='dogs'
				/>
				<SetRanking
					change_ranking={this.change_ranking}
					to_change='Westies'
				/>
				<h2>
					Parent component, with praise state:
				</h2>
				<p>
					Dogs are {this.state.dogs}
				</p>
				<p>
					West Highland Terriers are {this.state.breeds.westies}
				</p>
				<ShowRanking parent_state={this.state} />
			</div>
		);
	}
	
	update_remote_ranking(to_change) {
		if (to_change === 'dogs') {
			this.setState({
				dogs: 'great'
			});
		} else {
			this.setState({
				breeds: update(
					this.state.breeds, {westies: {$set: 'great'}}
				)
			});
		}
	}
	
	constructor(props) {
		
		super(props)
		this.state = {
			dogs: 'OK',
			breeds: {
				westies: 'OK'
			}
		}
		
		this.change_ranking = this.change_ranking.bind(this)
		
	}
	
}