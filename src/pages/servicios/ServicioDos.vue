<template>
  <!-- About Start -->
  <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <img src="/img/guantes.webp" alt="Image" />
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="section-header text-left">
            <h3>
              Fluidos de mejoramiento de la movilidad de crudos pesados ( > 8
              ºAPI)
            </h3>
          </div>
          <div class="about-text">
            <p>
              Sistema de fluidos base agua, con extractos de aceites vegetales
              que mejoran en 90% la movilidad, generando un mejoramiento de º
              API. Este sistema se diseña tanto en fondo de pozo como en
              superficie. Mejorando la movilidad en yacimiento, líneas de
              producción en fondo o superficie.
            </p>

            <!-- <a class="btn" href="">CONOCER MÁS SOBRE TREINPRO</a> -->
          </div>

          <div class="section-header text-left">
            <p>Flowmaster ™:</p>
          </div>
          <div class="about-text">
            <p>
              El sistema Flowmaster ™, es un reductor de viscosidad que se basa
              en extractos vegetales y solventes no aromáticos con componentes
              biodegradables, no tóxicos, como fosfolípidos, aceite vegetal e
              hidrocarburos aromáticos policíclicos y estabilizadores. Sistema
              Dual: Hidrófilo e Hidrofóbica.
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

.about .about-img {
  position: relative;
  height: 100%;
}

.about .about-img img {
  width: 100%;
  height: 100%;
  max-height: 520px;
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
  .about .about-img {
    margin-bottom: 30px;
    height: auto;
  }
}
</style>
