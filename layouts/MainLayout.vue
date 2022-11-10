<template>
	<q-layout view="lHh Lpr lFf">
		<q-toolbar
			class="bg-primary text-white"
		>
			<q-toolbar-title @click="go_to_home">
				<div id="logo">
					🎞️
				</div>
				<div id="app_title">
					Film Picker
				</div>
			</q-toolbar-title>
			<q-btn
				flat
				dense
				round
				icon="menu"
				aria-label="Menu"
				@click="toggledrawer"
			/>
			<!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
		</q-toolbar>
		 <q-drawer
			v-model="drawerOpen"
			side="right"
			show-if-above
			bordered
		>
			<q-list>
				<q-item-label
				header
				>
					Menu
				</q-item-label>

				<div
				v-for="link in essentialLinks"
				:key="link.title"
				v-bind="link"
				>
					<a :href="link.url">
						<span v-html="link.title">
						</span>
					</a>
				</div>
			</q-list>
		</q-drawer>
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
import $ from 'jquery'

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

	methods: {
		go_to_home() {
			this.$router.push('/')
		}
	},

	setup () {
		const drawerOpen = ref(false)
		const store_parent = inject("store")

		return {
			essentialLinks: linksList,
			drawerOpen,
			toggledrawer () {
				drawerOpen.value = !drawerOpen.value
			},
			store: 		store_parent.state
		}
	},
})
</script>
