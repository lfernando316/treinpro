<template>
  <!-- About Start -->
  <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <div class="about-img2">
            <img src="/img/laboratorio.webp" alt="Image" />
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="section-header text-left">
            <h3>Fluidos para controlar finos en el yacimiento</h3>
          </div>
          <div class="about-text">
            <p>
              Sistema que genera un cambio en potencial Z, de las partículas
              generando atracción en los granos de arena o finos, generando una
              agrupación de estas partículas sin disminuir la permeabilidad.
              Especial para pozos con problemas de alta producción de arena o de
              finos que disminuyen la producción o generan continuos problemas
              de producción diferida.
            </p>
            <!-- <a class="btn" href="">CONOCER MÁS SOBRE TREINPRO</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About End -->
</template>

<style>
.about {
  position: relative;
  width: 100%;
  padding: 45px 0;
}

.about .section-header {
  margin-bottom: 30px;
}

.about .about-img2 {
  position: relative;
  height: 100%;
}

.about .about-img2 img {
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}

.about .about-text p {
  font-size: 16px;
}

.about .about-text a.btn {
  position: relative;
  margin-top: 15px;
  padding: 15px 35px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--color-mark-darkgreen);
  border-radius: 0;
  background: var(--color-mark-green);
  transition: 0.3s;
}

.about .about-text a.btn:hover {
  color: var(--color-mark-green);
  background: var(--color-mark-darkgreen);
}

@media (max-width: 767.98px) {
  .about .about-img2 {
    margin-bottom: 30px;
    height: auto;
  }
}
</style>
