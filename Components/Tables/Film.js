import React from 'react';
import '../../Styles/Film.scoped.css'

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
					<td className="ranking cell">
						4
					</td>
					<td className="ranking cell">
						4
					</td>
					<td className="ranking cell">
						4
					</td>
					<td className="ranking cell">
						4
					</td>
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
	
	constructor(props) {
		super(props)
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l