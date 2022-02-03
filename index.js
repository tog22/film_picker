import React from 'react'
import ReactDOM from 'react-dom'
import firebase from './firebase'

import App from './App'

const messaging = firebase.messaging()

messaging.requestPermission().then((token) => {
	return messaging.getToken()
}).then((token) => {
	console.log('token: ' + token)
}).catch((error) => {
	console.error(error)
})

ReactDOM.render(
	
	<React.StrictMode>
		<App messaging={messaging} />
	</React.StrictMode>
	,
    document.getElementById('root')
	
)