import "./assets/main.css";

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import VueScrollTo from "vue-scrollto";
import router from "./router";

const app = createApp(App);
app.use(VueScrollTo);
app.use(router);
app.mount("#app");
