<template>
  <!-- About Start -->
  <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <img src="/img/mujer_treinpro2.webp" alt="Image" />
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="section-header text-left">
            <p>BIENVENIDOS A TREINPRO</p>
            <h2>¿QUIÉNES SOMOS?</h2>
          </div>
          <div class="about-text">
            <p>
              En Treinpro somos un equipo multidisciplinario de innovación
              tecnológica comprometidos en crear y suministrar soluciones a la
              medida en la industria de Oil & Gas que buscan mejorar la
              productividad de pozos productores de hidrocarburos, las
              condiciones de inyección de pozos y la movilidad de petróleo extra
              pesado en yacimiento o en superficie, con sistemas de fluidos de
              estimulación química o mecánica, taponamiento de zonas temporales
              o definitivas , tratamiento de consolidación química de arena y
              sistemas de recobro mejorado dentro un marco ambiental de fluidos
              altamente Biodegradables.
            </p>
            <p>
              Respaldados por una amplia trayectoria y un profundo conocimiento
              del sector, nos dedicamos a desarrollar y ofrecer productos
              innovadores que satisfagan las necesidades específicas de cada
              yacimiento.
            </p>
            <router-link class="btn" to="/nosotros"
              >CONOCER MÁS SOBRE TREINPRO</router-link
            >
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
