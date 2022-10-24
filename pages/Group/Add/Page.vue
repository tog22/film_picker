<template>
	<q-page>
		<h1>
			Create Movie Club
		</h1>
		<q-form
			@submit="on_submit"
			class="full_width_form q-gutter-y-md"
		>
			<q-input
				label="Club name"
				v-model="club_name"
				outlined
				:rules="[val => !!val || 'Enter a name']"
			/>
			<Members_Mini_List />
			<Friends_List 
				heading="Add Existing Friend" 
				is_new_club="true"
				context="add_to_group"
			/>
			<div><!-- class="no_top"-->
				<q-btn
					type="submit"
					label="Add"
					color="primary"
					size="md"
				/>
			</div>
		</q-form>
	</q-page>
</template>

<script>
import $ from 'jquery'
import { inject } from "vue"

import Friends_List from '../../../Components/Friends/List/Friends_List'
import Members_Mini_List from '../../../Components/Friends/Members_Mini_List/List'

export default {
	name: 			'Add_Film_Page',
	components: {
		Friends_List,
		Members_Mini_List
	},
	methods: {
		on_submit() {

			// Prepare API URL

			/// Prepare members URL component
			let members = this.store.sections.group.displayed.members
			let _members_param = []
			for (var uid_key in members) {
				_members_param.push(uid_key)
			}
			let members_param = JSON.stringify(_members_param)

			/// Create URL itself
			let query_url = 'https://filmpicker.philosofiles.com/sync/?action=create_group&name='+encodeURIComponent(this.club_name)+'&members='+members_param
			lo(query_url)

			// API functions
			let api = {

				on_success(data, status, request) {
					let response = JSON.parse(data)
					if (response.result === 'success') {
						this.$router.push('/group/'+response.body.gid)
					} else {
						alert('error 51335')
					}
				},

				on_error(request, status, error) {
					alert('error 73371')
				}
			}

			api.on_success = api.on_success.bind(this)
			$.ajax({
				url:		query_url,
                success:    function(data, status, request) {
                    api.on_success(data, status, request)
                },
                error:      function(request, status, error){
                    api.on_error(request, status, error)
                }
			})
		},
	},
	data() {
		
		const store = inject("store").state

		// ↓ Reset
		store.sections.add_film = {}

		// Create empty group
		let members = store.sections.group.displayed.members = {}
		members[store.user.uid] = store.user

		return {
			search_type:		'title',
			club_name:			'',
			store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
