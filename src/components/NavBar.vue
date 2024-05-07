<script>
export default {
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 90) {
        this.isSticky = true;
        // Aquí puedes ajustar los estilos de otros elementos si es necesario
      } else {
        this.isSticky = false;
        // Aquí puedes ajustar los estilos de otros elementos si es necesario
      }
    },
  },
};
</script>
<template>
  <!-- Top Bar Start -->
  <div class="top-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12">
          <div class="logo">
            <a href="index.html">
              <h1>Builderz</h1>
              <!-- <img src="img/logo.jpg" alt="Logo"> -->
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-md-7 d-none d-lg-block">
          <div class="row">
            <div class="col-4">
              <div class="top-bar-item">
                <div class="top-bar-icon">
                  <i class="flaticon-calendar"></i>
                </div>
                <div class="top-bar-text">
                  <h3>Opening Hour</h3>
                  <p>Mon - Fri, 8:00 - 9:00</p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="top-bar-item">
                <div class="top-bar-icon">
                  <i class="flaticon-call"></i>
                </div>
                <div class="top-bar-text">
                  <h3>Call Us</h3>
                  <p>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="top-bar-item">
                <div class="top-bar-icon">
                  <i class="flaticon-send-mail"></i>
                </div>
                <div class="top-bar-text">
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Top Bar End -->
  <!-- Nav Bar Start -->
  <div class="nav-bar" :class="{ 'nav-sticky': isSticky }">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="#" class="navbar-brand">MENU</a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div class="navbar-nav mr-auto">
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="service.html" class="nav-item nav-link">Service</a>
            <a href="team.html" class="nav-item nav-link">Team</a>
            <a href="portfolio.html" class="nav-item nav-link">Project</a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu">
                <a href="blog.html" class="dropdown-item">Blog Page</a>
                <a href="single.html" class="dropdown-item">Single Page</a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
          </div>
          <div class="ml-auto">
            <a class="btn" href="#">Get A Quote</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!-- Nav Bar End -->
</template>

<style>
/**********************************/
/********** Top Bar CSS ***********/
/**********************************/
.top-bar {
  position: relative;
  height: 90px;
  background: var(--color-mark-green);
}

.top-bar .logo {
  padding: 15px 0;
  text-align: left;
  overflow: hidden;
}

.top-bar .logo h1 {
  margin: 0;
  color: var(--color-mark-darkgreen);
  font-size: 60px;
  line-height: 60px;
  font-weight: 700;
}

.top-bar .logo img {
  max-width: 100%;
  max-height: 60px;
}

.top-bar .top-bar-item {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.top-bar .top-bar-icon {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-bar .top-bar-icon [class^="flaticon-"]::before {
  margin: 0;
  color: var(--color-mark-darkgreen);
  font-size: 40px;
}

.top-bar .top-bar-text {
  padding-left: 15px;
}

.top-bar .top-bar-text h3 {
  margin: 0 0 5px 0;
  color: var(--color-mark-darkgreen);
  font-size: 16px;
  font-weight: 400;
}

.top-bar .top-bar-text p {
  margin: 0;
  color: var(--color-mark-darkgreen);
  font-size: 13px;
  font-weight: 400;
}

@media (min-width: 992px) {
  .top-bar {
    padding: 0 60px;
  }
}

@media (max-width: 991.98px) {
  .top-bar .logo {
    text-align: center;
  }
}

/**********************************/
/*********** Nav Bar CSS **********/
/**********************************/
.nav-bar {
  position: relative;
  background: var(--color-mark-green);
  transition: 0.3s;
}

.nav-bar .container-fluid {
  padding: 0;
}

.nav-bar.nav-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  /* max-width: 1280px; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.nav-bar .navbar {
  height: 100%;
  background: var(--color-mark-darkgreen) !important;
}

.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  padding: 10px 10px 8px 10px;
  color: #ffffff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  color: var(--color-mark-green);
  transition: none;
}

.nav-bar .dropdown-menu {
  margin-top: 0;
  border: 0;
  border-radius: 0;
  background: #f8f9fa;
}

.nav-bar .btn {
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 0;
}

.nav-bar .btn:hover {
  color: var(--color-mark-darkgreen);
  background: var(--color-mark-green);
  border-color: var(--color-mark-green);
}

@media (min-width: 992px) {
  .nav-bar {
    padding: 0 75px;
  }

  .nav-bar.nav-sticky {
    padding: 0;
  }

  .nav-bar .navbar {
    padding: 20px;
  }

  .nav-bar .navbar-brand {
    display: none;
  }

  .nav-bar a.nav-link {
    padding: 8px 15px;
    font-size: 15px;
    text-transform: uppercase;
  }
}

@media (max-width: 991.98px) {
  .nav-bar .navbar {
    padding: 15px;
  }

  .nav-bar a.nav-link {
    padding: 5px;
  }

  .nav-bar .dropdown-menu {
    box-shadow: none;
  }

  .nav-bar .btn {
    display: none;
  }
}

/* .nav-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
} */
</style>
