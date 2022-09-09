<template>
	<div class="mini_film">
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
export default {
	name:       'Film_Mini',
	props: [
		'film'
	],
	mounted() {
		lo(this)
	}
}


let lo = function (to_log) {
	console.log(to_log)
}

</script>
