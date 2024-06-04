<template>
  <!-- About Start -->
  <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <img src="/img/probeta.webp" alt="Image" />
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="section-header text-left">
            <h3>Fluidos de fractura</h3>
          </div>
          <div class="about-text">
            <ul>
              <li>
                <p>
                  Fluidos que contienen mezcla de poliacrilamidas, que generan
                  viscosidades por debajo de 200 CP, que logran transportar
                  arenas cerámicas 20/40 hasta 8 L/G. No son viscoelásticos y
                  transportan la arena basados en principio de elasticidad.
                  Puede utilizarse agua de producción hasta un 30%.
                </p>
              </li>
              <li>
                <p>
                  Altamente Biodegradables. No generan daño de formación y no
                  requiere bombeara caudales superiores de 35 BPD. Generando una
                  disminución de equipos de potencia.
                </p>
              </li>
            </ul>
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
