import React from 'react';

import '../../Styles/Ranking.scoped.css'

import tog from '../../libraries/tog'

export default class Rankings extends React.Component {
	
	render() {
		return (
			<div className='rcont'>
				{this.render_ranking()}
			</div>
		);
		
	}
	
	render_ranking() {
		
		if (this.state.ranking) {
			return (
				<>
					<div className="do_rank">
						{/*
						<div className="option">
							👍
						</div>
						<div className="option">
							👌
						</div>
						<div className="option">
							🤷‍♂️
						</div>
						<div className="option">
							👎
						</div>
						*/}
						<div className="option" onClick={() => {
							
						}}>
							<div className="symbol">
								👍
							</div>
						</div>
						<div className="option">
							<div className="symbol">
								👌
							</div>
						</div>
						<div className="option">
							<div className="symbol">
								🤷‍♂️
							</div>
						</div>
						<div className="option">
							<div className="symbol">
								👎
							</div>
						</div>
					</div>
					<div className='ranking'>
						<div className="symbol">
							{this.state.ranking}
						</div>
					</div>
				</>
			);
		} else {
			return (
				<div className='add_ranking' style={{display: 'none'}}>
					+
				</div>
			);
		}
		
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