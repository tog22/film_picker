<template>
	<q-page>
		<h1>
			Select Search Result
		</h1>
		<div class="film_list_mini">
			<Film_Mini
				v-for="(film,fid) in results"
				:film="film"
                :key="'f'+fid"
			/>
		</div>
	</q-page>
</template>

<script>
import Film_Mini from '../../../Components/Film/Mini'

import { inject } from "vue"

export default {
	name: 			'Search_Results_Page',
	components: {
		Film_Mini
	},
	methods: {
	},
	data() {
		const store = inject("store")
		let results = store.state.sections.add_film.search_results
		lo(results)
		return {
			results:		results,
			store:  		store
		}
	}
}


let lo = function (to_log) {
	console.log(to_log)
}

</script>
