<template>
  <div class="container">
    <div class="image-wrapper full-size wow slideInLeft">
      <img src="/img/collage.webp" alt="Collage" class="img_collage" />
    </div>
    <div class="image-wrapper wow slideInRight">
      <img src="/public/LOGO_TREINPRO.png" alt="Logo Treinpro" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 100%;
}

.image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
}

.img_collage {
  max-width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin-bottom: 30px;
  }
}
</style>
