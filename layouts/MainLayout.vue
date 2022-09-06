<template>
  <q-layout view="lHh Lpr lFf">
    <div class="page_margin">
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

	    <q-page-container>
            <router-view />
	    </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

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

	return {
  	essentialLinks: linksList,
  	leftDrawerOpen,
  	toggleLeftDrawer () {
		leftDrawerOpen.value = !leftDrawerOpen.value
  	}
	}
  }
})
</script>
