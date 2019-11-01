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
        },
        {
            path: '/Landing',
            name: 'Landing',
            component: Landing
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
        }
    ]
})