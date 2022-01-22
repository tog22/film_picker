import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import Chrome from './Components/Chrome/Chrome'
import GroupFilms from './Pages/Group_Films/Page'
import CreateAccount from './Pages/User/Create/Page'

export default class Router extends React.Component {
	
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Chrome />}>
						<Route path='/group' element={<GroupFilms />}></Route>
						<Route path='/signup' element={<CreateAccount />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		)
	}
	
}