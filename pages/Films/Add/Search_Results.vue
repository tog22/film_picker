<template>
	<q-page class="q-gutter-lg">
		<h1>
			Select Search Result
		</h1>
		<div class="film_list_mini">
			<Film_Mini
				v-for="(film,fid) in results"
				:film="film"
				:imdb_ib="film.imdbID"
				click_to_add="click_to_add"
                :key="'f'+fid"
			/>
		</div>
		<q-banner 
			v-if="unshown_results"
			class="bg-primary text-white"
		>
			{{unshown_results}} unshown results. If you don't see what you're looking for, try a more specific search, or find the IMDB ID.
			<template v-slot:action>
				<q-btn flat color="white" label="Search again" to="/add" />
				<q-btn flat color="white" label="Find ID" to="/help/imdb_id" />
			</template>
		</q-banner>
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
		
		const store_parent = inject("store")
		const store = store_parent.state
		
		let results = store.sections.add_film.search_results
		lo(results)

		let unshown_results = 0
		let search_count = store.sections.add_film.search_count
		if (search_count > 10) {
			unshown_results = search_count - 10
		}

		return {
			results:			results,
			unshown_results: 	unshown_results,
			store: 				store
		}
	}
}


let lo = function (to_log) {
	console.log(to_log)
}

</script>
