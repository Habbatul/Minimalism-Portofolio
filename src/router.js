import { createRouter, createWebHistory } from 'vue-router';
import Project from './views/Project.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import ProjectDetail from './views/ProjectDetail.vue';
import Blogs from './views/Blogs.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/project', component: Project, props: { baseUrl: "localhost:8080" } },
    { path: '/contact', component: Contact, props: { baseUrl: "localhost:8000" } },
    { path: '/project/:id', component: ProjectDetail, props: { baseUrl: "localhost:8080"} },
    { path: '/blogs', component: Blogs, props: { baseUrl: "localhost:8080" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
