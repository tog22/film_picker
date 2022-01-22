import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import GroupOutlet from './Pages/Group/Outlet'
import GroupList from './Pages/Group_List/Page'
import GroupFilms from './Pages/Group_Films/Page'
import UserMenu from './Pages/User/Menu/Page'
import CreateAccount from './Pages/User/Create/Page'
import Chrome from './Components/Chrome/Chrome'
import NoPage404 from './Pages/Errors/404'

export default class Router extends React.Component {
	
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Chrome />}>
						<Route path='*' element={<NoPage404 />} />
						<Route path='/group' element={<GroupOutlet />}>
							<Route path=":group_id" element={<GroupFilms />} />
							<Route index element={<GroupList />} />
						</Route>
						<Route path='/signup' element={<CreateAccount />} />
						<Route path='/user' element={<UserMenu />} />
					</Route>
				</Routes>
			</BrowserRouter>
		)
	}
	
}