import { createRouter, createWebHistory } from 'vue-router';
import Project from './views/Project.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/project', component: Project },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
