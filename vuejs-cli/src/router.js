import Vue from "vue"
import Router from "vue-router"
import Home from "../src/views/Home"
import FormCreateAccount from "../src/components/FormCreateAccount/FormCreateAccount"


Vue.use(Router)

const routes = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "formularioCriacaoConta",
    path: "/formularioCriacaoConta",
    component: FormCreateAccount
}]

const router = new Router({ routes });

export default router