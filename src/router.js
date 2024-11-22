import { createRouter, createWebHistory } from 'vue-router';
import Project from './views/Project.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import ProjectDetail from './views/ProjectDetail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/project', component: Project },
    { path: '/contact', component: Contact },
    { path: '/project/:id', component: ProjectDetail, props: true }, // Routing untuk DetailProject
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
