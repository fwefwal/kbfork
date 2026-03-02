import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './HomePage.vue'
import UsersPage from './UsersPage.vue'
import ProfilePage from './ProfilePage.vue'
import Auth from './Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/users', component: UsersPage },
    { path: '/profile', component: ProfilePage },
    { path: '/auth', component: Auth}
  ],
})

export default router
