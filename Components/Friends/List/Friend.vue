<template>
	<div 
		class="friend"
		:class="{
			added:		added,
			clickable:	click_handler
		}"
		@click="on_click(friend)"
	>
		<div
			class="badge_container"
			v-if="added" 
		>
			<div class="badge">
				Added
			</div>
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
		'friend',
		'context',
		'click_handler',
		'starts_added',
		'group_id',
		'group_friends'
	],
	methods: {
		
		on_click(uid) {
			lo(455)
			if (this.context === 'add_to_group') {
				this.click_handler(uid, this.added)
				this.added = !this.added
			}

		}

	},

	// computed: {

	// 	is_added_class: function() {
	// 		if (this.added) {
	// 			return 'added'
	// 		} else {
	// 			return ''
	// 		}
	// 	}

	// },

	data() {
		// const store = inject("store").state

		return {
			added: 					(this.starts_added ? true : false),
			// is_clickable_class:		(this.click_handler ? 'clickable': '')
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

	.badge_container {
		float: right;
		padding-right: 0.4em;
	}

</style>
