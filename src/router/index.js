import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/books",
    name: "Books",
    component: () => import("../views/BooksView.vue")
  },
  {
    path: "/books/:id",
    name: "Book",
    component: () => import("../views/BookView.vue"),
    props: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminView.vue")
  },
  {
    path: "/website",
    name: "Esoteric Creatives.com",
    component: () => import("../views/WebsiteView.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
