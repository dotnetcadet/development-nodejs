import { createRouter, createWebHistory} from 'vue-router'
import Sidebar from '../components/Sidebar.vue'

const routes = [
    {
        path: '/',
        component: Sidebar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router;