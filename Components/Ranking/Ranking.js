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
			
			var rimg
			switch (this.state.ranking) {
				case '4':
					rimg = '👍'
					break
				case '3':
					rimg = '👌'
					break
				case '2':
					rimg = '🤷‍♂️'
					break
				case '1':
					rimg = '👎'
					break
			}
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
							this.props.change_ranking(4, this.props.fid, this.props.uid)
						}}>
							<div className="c_symbol">
								<div className="symbol">
									👍
								</div>
							</div>
						</div>
						<div className="option" onClick={() => {
							this.props.change_ranking(3, this.props.fid, this.props.uid)
						}}>
							<div className="c_symbol">
								<div className="symbol">
									👌
								</div>
							</div>
						</div>
						<div className="option" onClick={() => {
							this.props.change_ranking(2, this.props.fid, this.props.uid)
						}}>
							<div className="c_symbol">
								<div className="symbol">
									🤷‍♂️
								</div>
							</div>
						</div>
						<div className="option" onClick={() => {
							this.props.change_ranking(1, this.props.fid, this.props.uid)
						}}>
							<div className="c_symbol">
								<div className="symbol">
									👎
								</div>
							</div>
						</div>
					</div>
					<div className='ranking'>
						<div className="c_symbol">
							<div className="symbol">
								{rimg}
							</div>
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