import { createRouter, createWebHistory } from "vue-router"
import vUserList from "../components/v-user-list.vue"
import vUserPage from "../components/v-user-page.vue"
import vChatList from "../components/v-chat-list.vue"

const routes = [
    {
        path: '/',
        name: 'user-list',
        component: vUserList
    },
    {
        path: '/contact',
        name: 'contact',
        component: vUserPage
    },
    {
        path: '/chat',
        name: 'chat-list',
        component: vChatList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router