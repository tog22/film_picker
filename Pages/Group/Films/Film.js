import React from 'react';
import '../../../Styles/Film.scoped.css'

import Ranking from '../../Ranking/Ranking'

import tog from '../../../Libraries/tog'

export default class Film extends React.Component {
	
	render() {
		const film = this.props.film
		return (
			<>
				<tr className="main_row">
					<td className="poster cell" rowSpan="2">
						<img src={film.poster} alt={film.type} />
					</td>
					<td className="details cell text">
						<h3 className="title">
							{film.title}
						</h3>
						<div className="metadata">
							<div>
								{film.genre}
							</div>
							<div>
								{film.year}, {film.director}
							</div>
						</div>
					</td>
					{
						tog.objects.map_numeric_obj_to_array(
							film['rankings'], 
							(ranking, uid) => {
								const key_name = 'r'+uid
								return (
									<td className="rcell cell" key={key_name}>
										<Ranking 
											ranking={ranking['ranking']}
											uid={uid}
											fid={film.fid}
											update_local_ranking={this.update_local_ranking}
											update_remote_ranking={this.update_remote_ranking}
										/>
									</td>
								)
							}
						)
					}
				</tr>
				<tr className="summary_row">
					<td className="summary cell text" colSpan="5">
						{/*
						<div className="metadata">
							{film.year} • {film.director} • {film.genre} • Ratings
						</div>
						*/}
						<div className="summary_text">
							{film.summary}
						</div>
						
						<div style={{'margin': '1em 0'}}>
							Tom's ranking:&nbsp; 
							{film['rankings'][1]['ranking']}
						</div>
					</td>
				</tr>
			</>
		);
	}
	
	// constructor(props) {
	// 	super(props)
	// }
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l