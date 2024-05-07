<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/carousel1.jpg" alt="Carousel_Image" />
        <div class="carousel-caption">
          <p class="animated fadeInRight">We Are Professional</p>
          <h1 class="animated fadeInLeft">For Your Dream Project</h1>
          <a
            class="btn animated fadeInUp"
            href="https://htmlcodex.com/construction-company-website-template"
            >Get A Quote</a
          >
        </div>
      </div>

      <div class="carousel-item">
        <img src="/img/carousel2.jpg" alt="Carousel Image" />
        <div class="carousel-caption">
          <p class="animated fadeInRight">Professional Builder</p>
          <h1 class="animated fadeInLeft">We Build Your Home</h1>
          <a
            class="btn animated fadeInUp"
            href="https://htmlcodex.com/construction-company-website-template"
            >Get A Quote</a
          >
        </div>
      </div>

      <div class="carousel-item">
        <img src="/img/carousel-3.jpg" alt="Carousel Image" />
        <div class="carousel-caption">
          <p class="animated fadeInRight">We Are Trusted</p>
          <h1 class="animated fadeInLeft">For Your Dream Home</h1>
          <a
            class="btn animated fadeInUp"
            href="https://htmlcodex.com/construction-company-website-template"
            >Get A Quote</a
          >
        </div>
      </div>
    </div>

    <a
      class="carousel-control-prev"
      href="#carousel"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- Carousel End -->
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
  font-size: 60px;
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
