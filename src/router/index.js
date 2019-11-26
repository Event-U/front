/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
import RegisterAcount from '@/views/RegisterAcount';
import Dashboard from '@/views/Dashboard';
import DashboardProviders from '@/views/DashboardProviders';
import Index from '@/views/Index';
import Landing from '@/views/Landing';
import MyEvents from '@/components/MyEvents';
import test from '@/views/test';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Landing',
            component: Landing
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
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard-providers',
            name: 'DashboardProviders',
            component: DashboardProviders
        },
        {
            path: '/MyEvents',
            name: 'MyEvents',
            component: MyEvents
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})