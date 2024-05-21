<script setup>
const services = [
  {
    title: "Fluidos de estimulación Acida",
    image: "/img/industria_campo.webp",
    alt: "Image",
    description:
      "Sistema de estimulación Ácidos  para yacimientos de baja temperatura o alta temperatura , para remover Carbonatos o partículas taponantes de la garganta poral.",
    delay: "0.1s",
  },
  {
    title: "Fluidos de mejoramiento de la movilidad de crudos pesados",
    image: "/img/industria_tubos.webp",
    alt: "Image",
    description:
      "Sistema de fluidos base agua , con  extractos de aceites vegetales que mejoran en 90% la movilidad, generando un mejoramiento de º API.",
  },
  {
    title: "Fluidos de fractura",
    image: "/img/botellas_laboratorio.webp",
    alt: "Image",
    description:
      "Fluidos  que contienen  mezcla de poliacrilamidas,  que generan viscosidades por debajo de 200 CP, que logran transportar arenas cerámicas 20/40 hasta 8 L/G",
    delay: "0.3s",
  },
  {
    title: "Fluidos para controlar finos en el yacimiento",
    image: "/img/oil.webp",
    alt: "Image",
    description:
      "Sistema  que genera un cambio en potencial Z, de las partículas generando atracción en los granos de arena o finos, generando una agrupación de estas partículas sin disminuir la permeabilidad. ",
    delay: "0.4s",
  },
  //   {
  //     title: "Fixing & Support",
  //     image: "/img/service-5.jpg",
  //     alt: "Image",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
  //     delay: "0.5s",
  //   },
  //   {
  //     title: "Painting",
  //     image: "/img/service-6.jpg",
  //     alt: "Image",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
  //     delay: "0.6s",
  //   },
];
</script>

<template>
  <div class="service" id="servicios">
    <div class="container">
      <div class="section-header text-center">
        <!-- <p>Our Services</p> -->
        <h2>Nuestros Servicios</h2>
      </div>
      <div class="row">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-lg-3 col-md-6 wow fadeInUp"
          :data-wow-delay="service.delay"
        >
          <div class="service-item">
            <div class="service-img">
              <img :src="service.image" :alt="service.alt" />
              <div class="service-overlay">
                <p>{{ service.description }}</p>
              </div>
            </div>
            <div class="service-text">
              <h3>{{ service.title }}</h3>
              <!-- <a class="btn" :href="service.image" data-lightbox="service">+</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.service {
  position: relative;
  width: 100%;
  padding: 45px 0 5px 0;
}

.service .service-item {
  position: relative;
  /* max-width: 350px; */
  /* height: 70%; */
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.service .service-img {
  position: relative;
  overflow: hidden;
}

.service .service-img img {
  width: 100%;
}

.service .service-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(3, 15, 39, 0.7);
  transition: 0.5s;
  opacity: 0;
}

.service .service-item:hover .service-overlay {
  opacity: 1;
}

.service .service-overlay p {
  margin: 0;
  color: #ffffff;
}

.service .service-text {
  display: flex;
  align-items: center;
  height: 60px;
  background: var(--color-mark-darkgreen);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.service .service-text h3 {
  margin: 0;
  padding: 0 10px 0 15px;
  /* width: calc(100% - 10px); */
  font-size: 15px;
  font-weight: 600;
  color: var(--color-mark-green);
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.service .service-item a.btn {
  width: 60px;
  height: 60px;
  padding: 3px 0 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  line-height: 60px;
  font-weight: 100;
  color: var(--color-mark-darkgreen);
  background: var(--color-mark-green);
  border-radius: 0;
  transition: 0.3s;
}

.service .service-item:hover a.btn {
  color: #ffffff;
}
</style>
