import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import GroupFilms from '../Group_Films/Page'
import CreateAccount from '../Account/Create/Page'
import RouterTest from './Test'

function Invoices() {
	  return (
		<main style={{ padding: "1rem 0" }}>
		  <h2>Invoices</h2>
		</main>
	  );
	}
	
	function Expenses() {
		  return (
			<main style={{ padding: "1rem 0" }}>
			  <h2>Expenses</h2>
			</main>
		  );
		}

export default class Router extends React.Component {
	
	render() {
		return (
			<BrowserRouter>
				<h1 id="site_title">
					<Link to='/'>
						🎞️ Film Picker
					</Link>
				</h1>
				<Link to='/signup'>
					Switch to Signup page
				</Link>
				<Routes>
					<Route path='/' element={<GroupFilms />}></Route>
					<Route path='/group' element={<GroupFilms />}></Route>
					<Route path='/signup' element={<CreateAccount />}></Route>
				</Routes>
			</BrowserRouter>
		)
	}
	
}

