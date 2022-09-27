<template>
	<q-card>
		<h2>
			{{heading}}
		</h2>
		<div class="friends_list">
			<Friend 
				v-for="(friend, key) in friends"
				:friend="friend"
				:add_handler="add_to_group"
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
