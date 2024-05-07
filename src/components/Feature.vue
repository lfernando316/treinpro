<template>
  <!-- Feature Start-->
  <div class="feature wow fadeInUp" data-wow-delay="0.1s">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12">
          <div class="feature-item">
            <div class="feature-icon">
              <i class="flaticon-worker"></i>
            </div>
            <div class="feature-text">
              <h3>Expert Worker</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit
                non
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="feature-item">
            <div class="feature-icon">
              <i class="flaticon-building"></i>
            </div>
            <div class="feature-text">
              <h3>Quality Work</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit
                non
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="feature-item">
            <div class="feature-icon">
              <i class="flaticon-call"></i>
            </div>
            <div class="feature-text">
              <h3>24/7 Support</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit
                non
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature End-->
</template>

<style>
.feature {
  position: relative;
  margin-bottom: 45px;
}

.feature .col-md-12 {
  background: var(--color-mark-darkgreen);
}

.feature .col-md-12:nth-child(2n) {
  color: var(--color-mark-darkgreen);
  background: var(--color-mark-green);
}

.feature .feature-item {
  min-height: 250px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.feature .feature-icon {
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature .feature-icon::before {
  position: absolute;
  content: "";
  width: 80px;
  height: 80px;
  top: -20px;
  left: -10px;
  border: 2px dotted #ffffff;
  border-radius: 60px;
  z-index: 1;
}

.feature .feature-icon::after {
  position: absolute;
  content: "";
  width: 79px;
  height: 79px;
  top: -18px;
  left: -9px;
  background: var(--color-mark-darkgreen);
  border-radius: 60px;
  z-index: 2;
}

.feature .col-md-12:nth-child(2n) .feature-icon::after {
  background: var(--color-mark-green);
}

.feature .feature-icon [class^="flaticon-"]::before {
  position: relative;
  margin: 0;
  color: var(--color-mark-green);
  font-size: 60px;
  line-height: 60px;
  z-index: 3;
}

.feature .feature-text {
  padding-left: 30px;
}

.feature .feature-text h3 {
  margin: 0 0 10px 0;
  color: var(--color-mark-green);
  font-size: 25px;
  font-weight: 600;
}

.feature .feature-text p {
  margin: 0;
  color: var(--color-mark-green);
  font-size: 18px;
  font-weight: 400;
}

.feature .col-md-12:nth-child(2n) [class^="flaticon-"]::before,
.feature .col-md-12:nth-child(2n) h3,
.feature .col-md-12:nth-child(2n) p {
  color: var(--color-mark-darkgreen);
}
</style>
