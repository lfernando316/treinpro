<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { scrollTo } from "vue-scrollto";

const showBackToTop = ref(false);

const scrollToTop = () => {
  scrollTo("#app", 1500, { easing: "easeInOutExpo" });
};

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 0;
};

// Escucha el evento de scroll cuando el componente está montado
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main class="wrapper">
    <router-view />
    <Footer />
    <a href="#" v-if="showBackToTop" class="back-to-top" @click="scrollToTop"
      ><i class="bi bi-chevron-up"
    /></a>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.back-to-top {
  position: fixed;
  /* display: none; */
  background: var(--color-mark-green);
  color: var(--color-mark-darkgreen);
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 1;
  font-size: 22px;
  right: 15px;
  bottom: 15px;
  transition: background 0.5s;
  z-index: 9;
  padding: 10px;
}

.back-to-top:hover {
  color: var(--color-mark-green);
  background: var(--color-mark-darkgreen);
}

.back-to-top i {
  margin-top: 10px;
}
@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
