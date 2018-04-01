import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about/About'
import Contacts from '@/components/contacts/Contacts'
import Main from '@/components/main/Main'
import SignUp from '@/components/signup/SignUp'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/about', name: 'About', component: About },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/', name: 'Main', component: Main },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/login', name: 'Login', component: Login }
  ]
})
