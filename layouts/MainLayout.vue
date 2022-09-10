<template>
	<q-layout view="lHh Lpr lFf">
		<q-toolbar
			class="bg-primary text-white"
		>
			<q-toolbar-title  >
				<div id="logo">
					🎞️
				</div>
				<div id="app_title">
					Film Picker
				</div>
			</q-toolbar-title>
			<q-btn flat round dense icon="menu" class="q-mr-sm" />
		</q-toolbar>
		<div class="page_margin">
			<!--
			<h1 id="site_title">
				<a href="/">
				🎞️
				</a>
			</h1>
			<div class="temp_nav">
					<a href="/#/group">
							Group</a>
					|
					<a href="/#/user">
							User Menu</a>
					|
					<a href="/#/signup">
							Sign Up</a>
			</div>
			-->
			<q-page-container>
						<router-view />
			</q-page-container>
		</div>
	</q-layout>
</template>

<script>
import { inject, defineComponent, ref } from 'vue'

const linksList = [
	{
	title: 'Home',
	url: '/'
	},
]

export default defineComponent({
	name: 'MainLayout',

	components: {
	},

	setup () {
		const leftDrawerOpen = ref(false)
		const store = inject("store")

		return {
			essentialLinks: linksList,
			leftDrawerOpen,
			toggleLeftDrawer () {
				leftDrawerOpen.value = !leftDrawerOpen.value
			},
			store: 			store
		}
	},

	mounted() {
		console.log(this.store)
	}
})
</script>
