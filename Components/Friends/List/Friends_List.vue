<template>
	<q-card>
		<h2>
			{{heading}}
		</h2>
		<div class="friends_list">
			<Friend 
				v-for="(friend, key) in friends"
				:friend="friend"
				:context="context"
				:click_handler="add_to_group"
				:key="key"
			>
			</Friend>
		</div>
	</q-card>
</template>

<script>
import { inject } from "vue"

import Friend from './Friend'

export default {
	name: 			'Friends_List',
	components: {
		Friend
	},
	props: [
		'context',
		'heading',
		'to_add_to',
		'is_new_club'
	],
	methods: {

		add_to_group(friend, to_remove = false) {
			if (!to_remove) {
				if (this.is_new_club) {
					let friends = this.store.sections.group.displayed.members
					let uid_to_add = friend.uid
					friends[uid_to_add] = friend
					lo(friends)
				} else {
					let group_id = this.to_add_to
					let query_url = 'https://filmpicker.philosofiles.com/sync/?action=add_user_to_group&user='+friend.uid+'&group='+group_id

					let server = {

						on_success(data, status, request) {
							let response = JSON.parse(data)
							if (response.result !== 'success') {
								alert('err 4543')
								lo(response)
								return
							}
							if (this.group_friends) {
								lo('todo - add to list above')
							}


							
						},

						on_error(request, status, error) {
							alert('error 4212')
						},

					}

					server.on_success = server.on_success.bind(this)

					$.ajax({
						url:		query_url,
						success:    function(data, status, request) {
							server.on_success(data, status, request)
						},
						error:      function(request, status, error){
							server.on_error(request, status, error)
						}
					})
					
				}
			} else if (to_remove) {
				if (this.is_new_club) {
					let friends = this.store.sections.group.displayed.members
					lo(friends)
					let key_to_delete = friend.uid
					delete friends[key_to_delete]
					lo(friends)
				} else {
					let group_id = this.to_add_to
					let query_url = 'https://filmpicker.philosofiles.com/sync/?action=remove_user_from_group&user='+friend.uid+'&group='+group_id

					let server = {

						on_success(data, status, request) {
							let response = JSON.parse(data)
							if (response.result !== 'success') {
								alert('err 4543')
								lo(response)
								return
							}
							if (this.group_friends) {
								lo('todo - remove from list above')
							}


							
						},

						on_error(request, status, error) {
							alert('error 4212')
						},

					}

					server.on_success = server.on_success.bind(this)

					$.ajax({
						url:		query_url,
						success:    function(data, status, request) {
							server.on_success(data, status, request)
						},
						error:      function(request, status, error){
							server.on_error(request, status, error)
						}
					})
					
				}
			}

		}

	},
	data() {
		const store = inject("store").state
		
		return {
			friends: 			store.friends,
			store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
