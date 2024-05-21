<script setup>
const slides = [
  {
    image: "/img/hombre_trabajando.webp",
    alt: "Carousel Image",
    caption: "Innovación para la industria del Petróleo y Gas",
    title: "Soluciones a medida para la optimización de la producción.",
    link: "/servicios",
  },
  {
    image: "/img/mujer_ciencia.webp",
    alt: "Carousel Image",
    caption: "Comprometidos con la sostenibilidad",
    title:
      "Productos biodegradables que potencian la extracción responsable de hidrocarburos.",
    link: "/servicios",
  },
  {
    image: "/img/hombre_tomando_nota.webp",
    alt: "Carousel Image",
    caption: "Servicio excepcional y soporte técnico integral",
    title:
      "Tu aliado estratégico en el camino hacia la eficiencia y la rentabilidad.",
    link: "/servicios",
  },
];

const callToAction = "¡Descubre nuestras soluciones!";
const carousel = "#carousel";
</script>

<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        :data-target="carousel"
        :data-slide-to="index"
        :class="{ active: index === 0 }"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'carousel-item': true, active: index === 0 }"
      >
        <img :src="slide.image" :alt="slide.alt" />
        <div class="carousel-caption">
          <p class="animated fadeInRight">{{ slide.caption }}</p>
          <h1 class="animated fadeInLeft">{{ slide.title }}</h1>
          <router-link class="btn animated fadeInUp" :to="slide.link">{{
            callToAction
          }}</router-link>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      :href="carousel"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      :href="carousel"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style>
/*******************************/
/******** Carousel CSS *********/
/*******************************/
.carousel {
  position: relative;
  width: 100%;
  height: calc(100vh - 170px);
  min-height: 400px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
}

.carousel .carousel-inner,
.carousel .carousel-item {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel .carousel-item::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.carousel .carousel-caption {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 170px);
  min-height: 400px;
}

.carousel .carousel-caption p {
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.carousel .carousel-caption h1 {
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 35px;
}

.carousel .carousel-caption .btn {
  padding: 15px 35px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 0;
  transition: 0.3s;
}

.carousel .carousel-caption .btn:hover {
  color: #030f27;
  background: var(--color-mark-green);
  border-color: var(--color-mark-green);
}

@media (max-width: 767.98px) {
  .carousel .carousel-caption h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .carousel .carousel-caption p {
    font-size: 20px;
  }

  .carousel .carousel-caption .btn {
    padding: 12px 30px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
  }
}

@media (max-width: 575.98px) {
  .carousel .carousel-caption h1 {
    font-size: 30px;
    font-weight: 500;
  }

  .carousel .carousel-caption p {
    font-size: 16px;
  }

  .carousel .carousel-caption .btn {
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
  }
}

.carousel .animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
}
</style>
