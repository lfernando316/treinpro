<script setup>
import About from "./components/About.vue";
import Feature from "./components/Feature.vue";
import Carousel from "./components/Carousel.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Fact from "./components/Fact.vue";
import NavBar from "./components/NavBar.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <NavBar />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main class="wrapper">
    <Carousel />
    <Feature />
    <About />
    <Fact />
    <TheWelcome />
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
