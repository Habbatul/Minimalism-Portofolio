import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './css/index.css'
import LazyLoad from './directive-custom/lazy-load'; 

const app = createApp(App)
app.use(router)
app.directive('lazy', LazyLoad)
app.mount('#app')