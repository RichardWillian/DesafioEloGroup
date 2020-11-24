import Vue from "vue"
import Router from "vue-router"
import Home from "../src/views/Home"
import PainelLead from '../src/components/PainelLeads/PainelLeads';


Vue.use(Router)

const routes = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "painelLeads",
    path: "/PainelLeads",
    component: PainelLead
}]

const router = new Router({ routes });

export default router