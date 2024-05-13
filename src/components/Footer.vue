<template>
  <!-- Footer Start -->
  <div class="footer wow fadeIn" data-wow-delay="0.3s">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="footer-contact">
            <h2>Contacto</h2>
            <p><i class="bi bi-geo-alt-fill" /> Bogotá, Colombia</p>
            <p><i class="bi bi-telephone-fill" /> +57 3102760894</p>
            <p><i class="fa fa-envelope" /> gerencia_comercial@treinpro.com</p>
            <div class="footer-social">
              <!-- <a href=""><i class="fab fa-twitter"></i></a> -->
              <a href=""><i class="fab fa-facebook-f"></i></a>
              <a href=""><i class="fab fa-youtube"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              <a href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="footer-link">
            <h2>Services Areas</h2>
            <a href="">Building Construction</a>
            <a href="">House Renovation</a>
            <a href="">Architecture Design</a>
            <a href="">Interior Design</a>
            <a href="">Painting</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="footer-link">
            <h2>Navegación</h2>
            <router-link to="#about">Quienes somos</router-link>
            <router-link to="#servicios">Servicios</router-link>
            <router-link to="/contacto">Contacto</router-link>
            <!-- <a href="">Projects</a>
            <a href="">Testimonial</a> -->
          </div>
        </div>
        <!-- <div class="col-md-6 col-lg-3">
          <div class="newsletter">
            <h2>Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare velit non vulpu
            </p>
            <div class="form">
              <input class="form-control" placeholder="Email here" />
              <button class="btn">Submit</button>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div class="container footer-menu">
      <div class="f-menu">
        <a href="">Terms of use</a>
        <a href="">Privacy policy</a>
        <a href="">Cookies</a>
        <a href="">Help</a>
        <a href="">FQAs</a>
      </div>
    </div> -->
    <div class="container copyright">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; <a href="#">TREINPRO</a>, DERECHOS RESERVADOS.</p>
        </div>
        <div class="col-md-6">
          <p>Designed By <a href="">lfernando316</a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<style>
.footer {
  position: relative;
  margin-top: 45px;
  padding-top: 90px;
  background: var(--color-mark-darkgreen);
  color: #ffffff;
}

.footer .footer-contact,
.footer .footer-link,
.footer .newsletter {
  position: relative;
  margin-bottom: 45px;
}

.footer h2 {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-mark-green);
}

.footer h2::after {
  position: absolute;
  content: "";
  width: 60px;
  height: 2px;
  left: 0;
  bottom: 0;
  background: var(--color-mark-green);
}

.footer .footer-link a {
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
  transition: 0.3s;
}

.footer .footer-link a::before {
  position: relative;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}

.footer .footer-link a:hover {
  color: var(--color-mark-green);
  letter-spacing: 1px;
}

.footer .footer-contact p i {
  width: 25px;
}

.footer .footer-social {
  position: relative;
  margin-top: 20px;
}

.footer .footer-social a {
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 7px 0;
  text-align: center;
  border: 1px solid rgba(256, 256, 256, 0.3);
  border-radius: 60px;
  transition: 0.3s;
}

.footer .footer-social a i {
  font-size: 15px;
  color: #ffffff;
}

.footer .footer-social a:hover {
  background: var(--color-mark-green);
  border-color: var(--color-mark-green);
}

.footer .footer-social a:hover i {
  color: #030f27;
}

.footer .newsletter .form {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.footer .newsletter input {
  height: 50px;
  border: 2px solid var(--color-mark-darkgreen);
  border-radius: 0;
}

.footer .newsletter .btn {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-mark-green);
  background: var(--color-mark-darkgreen);
  border-radius: 0;
  border: 2px solid var(--color-mark-green);
  transition: 0.3s;
}

.footer .newsletter .btn:hover {
  color: var(--color-mark-darkgreen);
  background: var(--color-mark-green);
}

.footer .footer-menu .f-menu {
  position: relative;
  padding: 15px 0;
  font-size: 0;
  text-align: center;
  border-top: 1px solid rgba(256, 256, 256, 0.1);
  border-bottom: 1px solid rgba(256, 256, 256, 0.1);
}

.footer .footer-menu .f-menu a {
  color: #ffffff;
  font-size: 16px;
  margin-right: 15px;
  padding-right: 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.footer .footer-menu .f-menu a:hover {
  color: var(--color-mark-green);
}

.footer .footer-menu .f-menu a:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: none;
}

.footer .copyright {
  padding: 30px 15px;
}

.footer .copyright p {
  margin: 0;
  color: #ffffff;
}

.footer .copyright .col-md-6:last-child p {
  text-align: right;
}

.footer .copyright p a {
  color: var(--color-mark-green);
  font-weight: 500;
  letter-spacing: 1px;
}

.footer .copyright p a:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .footer .copyright p,
  .footer .copyright .col-md-6:last-child p {
    margin: 5px 0;
    text-align: center;
  }
}
</style>
