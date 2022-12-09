<template>
    <div class="members_mini_list">
        <span 
            v-for="(member, key) in members"
            :key="key"
			class="member"
        >
			👤 {{member.first_name}}
	</span>
    </div>
</template>

<script>
import { inject } from "vue"

export default {
	name: 			'Members_Mini_List',
	components: {
	},
	props: [
		'starting_members'
	],
	methods: {

	},
	data() {
		const store = inject("store").state
		
		return {
			members:				store.sections.group.displayed.members,
			store: 					store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>

<style scoped>

.member {
	padding-right: 1em;
}

</style>