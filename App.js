import React, { useEffect, useState } from 'react'

import Router from './App_Router'
import bus from './Backing/Bus'
import tog from './Libraries/tog'

import './Styles/All.css'

export default function App({ messaging }) {
	
	const [cloudMessage, setCloudMessage] = useState({})

	messaging.onMessage((message) => {

		setCloudMessage({ ...cloudMessage, message })
		
		switch (message.notification.title) {
			case 'changed_ranking':
				let changed_ranking = tog.parse_json(message.notification.body)
				bus.dispatch('changed_ranking', changed_ranking)
				break
			default:
				let alert_text = 'Unknown firebase message received: '+JSON.stringify(message.notification)
				alert(alert_text)
				break
		}
		
	})
	
	return (
		<div className="App">
			<Router />
			
			<div>
				Firebase cloud messaging
				<pre>
					{Object.keys(cloudMessage).length > 0 && JSON.stringify(cloudMessage)}
				</pre>
				{Object.keys(cloudMessage).length === 0 && (<p>{'Waiting for a message...'}</p>)}
			</div>
		</div>
	);
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l
