import React, { useEffect, useState } from 'react'

import Router from './App_Router'

import './Styles/All.css'

export default function App({ messaging }) {
	
	const [cloudMessage, setCloudMessage] = useState({})

	messaging.onMessage((payload) => {
		console.log('Message received. ' + JSON.stringify(payload))
		// Example:
		// {"payload":{"data":{"gcm.n.e":"1","google.c.a.ts":"1643485190","google.c.a.udt":"0","google.c.a.e":"1","google.c.a.c_id":"7515782350171140429","google.c.a.c_l":"dfffsd"},"from":"476060464418","priority":"high","notification":{"title":"dfffsd","body":"fdfsdf","tag":"campaign_collapse_key_7515782350171140429"},"fcmMessageId":"81761ee3-10a5-4f6a-954a-c23dfbe53ee7","collapse_key":"campaign_collapse_key_7515782350171140429"}}
		setCloudMessage({ ...cloudMessage, payload })
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
