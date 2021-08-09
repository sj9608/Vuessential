import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home.vue")
    },
    {
        path: "/prev1",
        name: "prev1",
        component: () => import("@/views/prev1.vue")
    },
    {
        path: "/todo",
        name: "todo",
        component: () => import("@/views/todo.vue")
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});