<template>
	<div 
		class="friend"
		@click="on_click(friend.uid)"
	>
		<div class="badge">
		</div>
		<span class="image">
			👤
		</span>
		<span class="name">
			{{friend.full_name}}
		</span>
	</div>
</template>

<script>
import { inject } from "vue"

export default {
	name: 			'Friends_List',
	props: [
		'context',
		'friend',
		'starts_added',
		'group_id',
		'group_friends'
	],
	methods: {
		
		on_click(uid) {
			
			if (this.context === 'add_to_group') {
				this.add_to_group(uid)
			}

		},

		add_to_group(uid) {

			let query_url = 'https://filmpicker.philosofiles.com/sync/?action=add_user_to_group&user='+uid+'&film='+this.group_id

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

	},
	data() {
		// const store = inject("store").state
		return {
			// friends: 			store.friends,
			// store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>

<style scoped>
	.image {
		margin-right: 0.2em;
	}
	
	.name {
		font-weight: 500;
		font-size: 1.3em;
	}

	.badge {
		float: right;
	}

</style>
