<script>
import CountUp from "vue-countup-v2";

export default {
  data() {
    return {
      expertWorkers: 0,
      satisfiedClients: 0,
      completedProjects: 0,
      projectsInProgress: 0,
    };
  },
  mounted() {
    // Inicia los contadores al montar el componente
    this.initCounters();
  },
  methods: {
    initCounters() {
      const wowElements = document.querySelectorAll(".wow");
      wowElements.forEach((element) => {
        // Verifica si el elemento tiene la clase slideInLeft o slideInRight
        if (
          element.classList.contains("slideInLeft") ||
          element.classList.contains("slideInRight")
        ) {
          element.addEventListener("wow", () => {
            this.startCounters();
          });
        }
      });
    },
    startCounters() {
      console.log("inicia");

      // Inicia los contadores
      this.counterInterval = setInterval(() => {
        // Incrementa los valores gradualmente
        if (this.expertWorkers < 109) {
          this.expertWorkers++;
        }
        if (this.satisfiedClients < 85) {
          this.satisfiedClients++;
        }
        if (this.completedProjects < 89) {
          this.completedProjects++;
        }
        if (this.projectsInProgress < 14) {
          this.projectsInProgress++;
        }
      }, 40); // Cambia el valor según la velocidad deseada
    },
    stopCounters() {
      // Detiene los intervalos al destruir el componente
      clearInterval(this.counterInterval);
    },
  },
};
</script>
<template>
  <div class="fact">
    <div class="container-fluid">
      <div class="row counters">
        <div class="col-md-6 fact-left wow slideInLeft">
          <div class="row">
            <div class="col-6">
              <div class="fact-icon">
                <i class="flaticon-worker"></i>
              </div>
              <div class="fact-text">
                <h2>{{ expertWorkers }}</h2>
                <p>Trabajadores expertos</p>
              </div>
            </div>
            <div class="col-6">
              <div class="fact-icon">
                <i class="flaticon-building"></i>
              </div>
              <div class="fact-text">
                <h2>{{ satisfiedClients }}</h2>
                <p>Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 fact-right wow slideInRight">
          <div class="row">
            <div class="col-6">
              <div class="fact-icon">
                <i class="flaticon-address"></i>
              </div>
              <div class="fact-text">
                <h2>{{ completedProjects }}</h2>
                <p>Proyectos completados</p>
              </div>
            </div>
            <div class="col-6">
              <div class="fact-icon">
                <i class="flaticon-crane"></i>
              </div>
              <div class="fact-text">
                <h2>{{ projectsInProgress }}</h2>
                <p>Proyectos en ejecución</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fact {
  position: relative;
  width: 100%;
  padding: 45px 0;
}

.fact .col-6 {
  display: flex;
  align-items: flex-start;
}

.fact .fact-icon {
  position: relative;
  margin: 7px 15px 0 15px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fact .fact-icon [class^="flaticon-"]::before {
  margin: 0;
  font-size: 60px;
  line-height: 60px;
  background-image: linear-gradient(#ffffff, #8fc050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fact .fact-right .fact-icon [class^="flaticon-"]::before {
  background-image: linear-gradient(#ffffff, #004047);
}

.fact .fact-left,
.fact .fact-right {
  padding-top: 60px;
  padding-bottom: 60px;
}

.fact .fact-text h2 {
  font-size: 35px;
  font-weight: 700;
}

.fact .fact-text p {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}

.fact .fact-left {
  color: #8fc050;
  background: #004047;
}

.fact .fact-right {
  color: #004047;
  background: #8fc050;
}

.fact .fact-left h2 {
  color: #8fc050;
}
</style>
