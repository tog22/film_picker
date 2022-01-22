import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import GroupList from './Pages/Group_List/Page'
import GroupFilms from './Pages/Group_Films/Page'
import CreateAccount from './Pages/User/Create/Page'
import Chrome from './Components/Chrome/Chrome'
import UserMenu from './Pages/User/Menu/Page'

export default class Router extends React.Component {
	
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Chrome />}>
						<Route path='/group' element={<GroupList />}>
							<Route path=":group_id" element={<GroupFilms />} />
						</Route>
						<Route path='/signup' element={<CreateAccount />}></Route>
						<Route path='/user' element={<UserMenu />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		)
	}
	
}