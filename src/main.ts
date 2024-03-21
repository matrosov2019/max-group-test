import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import CountryFlag from 'vue-country-flag-next';

const pinia = createPinia();
const app = createApp(App);

app.component("CountryFlag", CountryFlag);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
