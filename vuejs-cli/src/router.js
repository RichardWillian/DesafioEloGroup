import Vue from "vue"
import Router from "vue-router"
import Home from "../src/views/Home"


Vue.use(Router)

const routes = [{
    name: "home",
    path: "/",
    component: Home
}, ]

const router = new Router({ routes });

export default router