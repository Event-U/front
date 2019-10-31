/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/Login';
import RegisterAcount from '@/views/RegisterAcount';
import Dashboard from '@/views/Dashboard';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'RegisterAcount',
            component: RegisterAcount
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
})