import Vue from "vue"
import Router from "vue-router"
import Home from "../src/views/Home"
import FormCreateLead from '../src/components/CreateNewLead/FormCreateLead';


Vue.use(Router)

const routes = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "formCreateLead",
    path: "/FormCreateLead",
    component: FormCreateLead
}]

const router = new Router({ routes });

export default router