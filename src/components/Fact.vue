<script>
import CountUp from "vue-countup-v2";

export default {
  components: {
    CountUp,
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
              <!-- <div class="fact-text">
                <count-up
                  :end="109"
                  :options="{ duration: 1, suffix: ' Expert Workers' }"
                />
              </div> -->
              <div class="fact-text">
                <h2 data-toggle="counter-up">109</h2>

                <p>Expert Workers</p>
              </div>
            </div>
            <div class="col-6">
              <div class="fact-icon">
                <i class="flaticon-building"></i>
              </div>
              <div class="fact-text">
                <h2 data-toggle="counter-up">485</h2>
                <p>Happy Clients</p>
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
                <h2 data-toggle="counter-up">789</h2>
                <p>Completed Projects</p>
              </div>
            </div>
            <div class="col-6">
              <div class="fact-icon">
                <i class="flaticon-crane"></i>
              </div>
              <div class="fact-text">
                <h2 data-toggle="counter-up">890</h2>
                <p>Running Projects</p>
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
