
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect:'/home' },
      { path: '/home', component: () => import('pages/Start_Page.vue') },
      { path: '/home/welcome', component: () => import('pages/Start_Page.vue') },
      { path: '/group', component: () => import('pages/Group/List/Page.vue') },
      { path: '/group/:id', component: () => import('pages/Films/Page.vue') },
      { path: '/group/add', component: () => import('pages/Group/Add/Page.vue') },
      { path: '/add', component: () => import('pages/Films/Add/Find.vue') },
      { path: '/search_results', component: () => import('pages/Films/Add/Search_Results.vue') },
      { path: '/film/new/:id', component: () => import('pages/Films/After_Adding/After_Adding.vue') },
      { path: '/help/imdb_id', component: () => import('pages/Help/IMDB_ID.vue') },
      { path: '/signup', component: () => import('pages/Login/Signup.vue') },
      { path: '/login', component: () => import('pages/Login/Login.vue') },
      { path: '/user/films', component: () => import('pages/User/Films.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
