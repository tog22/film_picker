import React from 'react';
import '../../Styles/Film.scoped.css'

import tog from '../../libraries/tog'

export default class Film extends React.Component {
	
	render() {
		const film = this.props.film
		return (
			<>
				<tr className="main_row">
					<td className="poster cell" rowSpan="2">
						<img src={film.poster} alt={film.type} />
					</td>
					<td className="details cell">
						<h3>
							{film.title}
						</h3>
					</td>
					{
						tog.objects.map_numeric_obj_to_array(
							film['rankings'], 
							(ranking, uid) => {
								const key_name = 'r'+uid
								return (
									<td className="ranking cell" key={key_name}>
										{ranking['ranking']}
									</td>
								)
							}
						)
					}
				</tr>
				<tr className="summary_row">
					<td className="summary cell" colSpan="5">
						{/*
						<div className="metadata">
							{film.year} • {film.director} • {film.genre} • Ratings
						</div>
						*/}
						{film.summary}
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