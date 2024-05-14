import { createRouter, createWebHistory } from "vue-router";
// import App from "../App.vue";
import HomeView from "@/pages/HomeView.vue";
import Contacto from "@/pages/Contacto.vue";
import Nosotros from "@/pages/Nosotros.vue";
import Servicios from "@/pages/Servicios.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: Nosotros,
    },
    {
      path: "/servicios",
      name: "servicios",
      component: Servicios,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto,
    },
    // Agrega más rutas según sea necesario
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 150 };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
