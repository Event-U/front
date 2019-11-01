/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
import RegisterAcount from '@/views/RegisterAcount';
import Dashboard from '@/views/Dashboard';
import Index from '@/views/Index';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
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