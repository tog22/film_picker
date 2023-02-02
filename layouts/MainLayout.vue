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
				@click="menu_click"
			/>
			<!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
		</q-toolbar>
		<!-- 		
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
    	-->
    	<div id="basic_menu">
			<p
				v-for="link in essentialLinks"
				:key="link.title"
				v-bind="link"
			>
				<a :href="link.url">
					<span v-html="link.title">
					</span>
				</a>
			</p>
		</div>
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
	{
		title: 'Signup',
		url: '/#/signup'
	},
	{
		title: 'Login',
		url: '/#/login'
	},

]


export default defineComponent({
	name: 'MainLayout',

	components: {
	},

	methods: {

    	go_to_home() {
			this.$router.push('/')
		},

		menu_click() {

			if ($('#basic_menu').css('display') === 'none') {
				$('#basic_menu').css('display', 'block')
			} else {
				$('#basic_menu').css('display', 'none')
			}

			// alt method:
			// this.toggledrawer()

		}

	},
	setup () {
		const drawerOpen = ref(false)
		const store_parent = inject("store")

		return {
			essentialLinks: 		linksList,
			isbmshown:				'bm_hidden',
			drawerOpen,
			toggledrawer () {
				drawerOpen.value = !drawerOpen.value
			},
			store: 					store_parent.state
		}
	},
})
</script>

<style>

#basic_menu {
	position: absolute;
	right: 0px;
	top: 60px;
	z-index: 2;
	padding: 1em;
	border: 1px solid #ddd;
	background: white;
}

</style>