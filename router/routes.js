
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect:'/home' },
      { path: '/home', component: () => import('pages/Start_Page.vue') },
      { path: '/group', component: () => import('pages/Group/List/Page.vue') },
      { path: '/group/:id', component: () => import('pages/Films/Page.vue') },
      { path: '/signup', component: () => import('pages/Start_Page.vue') },
      { path: '/login', component: () => import('pages/Start_Page.vue') },
      { path: '/film/add', component: () => import('pages/Start_Page.vue') },
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
