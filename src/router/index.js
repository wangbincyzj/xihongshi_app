import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import Profile from "@/views/profile/Profile";

import NativeNews from "@/views/native_news/NativeNews";
import NativeNewsList from "@/views/native_news/NativeNewsList";
import NativeNewsDetail from "@/views/native_news/NativeNewsDetail";


import Category from "@/views/category/Category";
import Detail from "@/views/detail/Detail";


import Job from "@/views/job/Job";
import JobList from "@/views/job/JobList";
import JobDetail from "@/views/job/JobDetail";


import Movie from "@/views/movie/Movie";
import Cart from "@/views/cart/Cart";
import Login from "@/views/login/Login";
import LostFind from "@/views/lostfind/LostFind";
import Mail from "@/views/mail/Mail";
import Debug from "@/views/debug/Debug";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/profile",
        name: "profile",
        component:  Profile
    },
    {
        path: "/job",
        name: "job",
        component:  Job,
        redirect: "/job/list",
        children:[
            {
                path: "list",
                component: JobList
            },
            {
                path: "detail",
                component: JobDetail
            }
        ]
    },
    {
        path: "/native_news",
        redirect: "/native_news/list",
        component: NativeNews,
        children: [
            {
                path: "list",
                component: NativeNewsList
            },
            {
                path: "detail",
                component: NativeNewsDetail
            }
        ]
    },
    {
        path:"/goods_detail/:id",
        component: Detail

    },
    {
        path: "/china_news",
        name: "china_news",
        component: () => import("@/views/china_news/ChinaNews")
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/movies",
        component: Movie
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path:"/login",
        component: Login
    },
    {
        path: "/lost_find",
        component: LostFind
    },
    {
        path: "/mayor_email",
        component: Mail
    },
    {
        path: "/debug",
        component: Debug
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
