import { createRouter, createWebHistory } from 'vue-router'
import New from '../views/New'
import Tasks from "../views/Tasks"
import Task from "../views/Task"

const routes = [
  { path: '/new', component: New, name: 'new' },
  { path: '/tasks', component: Tasks, name: 'main', alias: '/'},
  { path: '/task/:id', component: Task}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
