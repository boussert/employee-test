import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';

import './assets/tailwind.css';
import { store, key } from './store'

createApp(App).use(store, key).use(ElementPlus).use(router).mount('#app');
