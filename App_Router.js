import React, { useState } from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import GroupOutlet from './Pages/Group/Outlet'
import GroupList from './Pages/Group/List/Page'
import GroupFilms from './Pages/Group/Films/Page'
import AddFilm from './Pages/Add_Film/Page'
import UserMenu from './Pages/User/Menu/Page'
import CreateAccount from './Pages/User/Create/Page'
import Chrome from './Components/Chrome/Chrome'
import NoPage404 from './Pages/Errors/404'
import Dogs from './Pages/DogsTest/Simple/Dogs'

export default function Router() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Chrome />}>
					<Route path='*' element={<NoPage404 />} />
					<Route path='/group' element={<GroupOutlet />}>
						<Route path=":group_id" element={<GroupFilms />} />
						<Route index element={<GroupList />} />
					</Route>
					<Route path='/add' element={<AddFilm />} />
					<Route path='/user' element={<UserMenu />} />
					<Route path='/signup' element={<CreateAccount />} />
					<Route path='/dogs' element={<Dogs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
	
}