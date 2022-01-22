import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import GroupFilms from './Pages/Group_Films/Page'
import CreateAccount from './Pages/Account/Create/Page'

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

