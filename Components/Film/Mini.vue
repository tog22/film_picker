<template>
	<div class="mini_film" @click="on_click">
		<div class="poster">
			<img :src="film.Poster">
		</div>
		<div class="info">
			<div class="title">
				{{film.Title}}
			</div>
			<div class="year">
				{{film.Year}}
			</div>
		</div>
	</div>
</template>

<script>
import {inject} from 'vue'
export default {
	name:       'Film_Mini',
	props: [
		'film',
		'fid'
	],
	methods: {
		on_click() {
			this.store.state.sections.add_film.selected = this.fid

		}
	},
	data() {
		const store = inject("store")
		return {
			store: 	store
		}
	}
}


let lo = function (to_log) {
	console.log(to_log)
}

</script>
