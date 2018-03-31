import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Registration from '@/components/registration/Registration'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/registration', name: 'Registration', component: Registration },
    { path: '/login', name: 'Login', component: Login }
  ]
})
