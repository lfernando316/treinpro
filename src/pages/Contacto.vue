<script setup>
import { ref } from "vue";

const formData = ref({
  nombre: "",
  correo: "",
  //   telefono: "",
  asunto: "",
  mensaje: "",
});

const formAction = "https://formsubmit.co/gerenciadministrativa@treinpro.com";

async function handleSubmit() {
  try {
    const response = await fetch(formAction, {
      method: "POST",
      body: new FormData(document.querySelector("form")),
    });

    if (response.ok) {
      console.log("Formulario enviado con éxito");
    } else {
      console.error("Error al enviar el formulario");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
</script>

<template>
  <div class="contact wow fadeInUp">
    <div class="container">
      <div class="section-header text-center">
        <p>
          ¿Cómo podemos ayudarte a optimizar la producción de tus pozos
          petroleros de forma sostenible?
        </p>
        <h4>
          Contacta con nuestro equipo de expertos y descubre cómo Treinpro puede
          marcar la diferencia en tu operación
        </h4>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="contact-info">
            <div class="contact-item">
              <i class="flaticon-address"></i>
              <div class="contact-text">
                <h2>Dirección</h2>
                <p>Bogotá, Colombia</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="flaticon-call"></i>
              <div class="contact-text">
                <h2>Teléfono</h2>
                <p>+57 3175014658</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="flaticon-send-mail"></i>
              <div class="contact-text">
                <h2>Correo</h2>
                <p class="size_correo">gerenciadministrativa@treinpro.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-form">
            <div id="success"></div>
            <form :action="formAction" method="POST" @submit="handleSubmit">
              <div class="control-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Nombres"
                  v-model="formData.nombre"
                  required
                />
              </div>
              <div class="control-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="correo"
                  placeholder="Correo"
                  v-model="formData.correo"
                  required
                />
              </div>
              <div class="control-group">
                <input
                  type="text"
                  class="form-control"
                  id="asunto"
                  name="telefono"
                  placeholder="Asunto"
                  v-model="formData.asunto"
                  required
                />
              </div>
              <div class="control-group">
                <textarea
                  class="form-control"
                  id="message"
                  name="mensaje"
                  placeholder="Mensaje"
                  v-model="formData.mensaje"
                  required
                ></textarea>
              </div>
              <div>
                <button class="btn" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact {
  position: relative;
  width: 100%;
  padding: 45px 0;
}

.contact .col-md-6 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.contact .col-md-6:first-child {
  background: var(--color-mark-darkgreen);
}

.contact .col-md-6:last-child {
  background: var(--color-mark-green);
}

.contact .contact-info {
  position: relative;
  width: 100%;
  padding: 0 15px;
}

.contact .contact-item {
  position: relative;
  margin-bottom: 30px;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  border: 1px solid rgba(256, 256, 256, 0.2);
}

.contact .contact-item [class^="flaticon-"]::before {
  margin: 0;
  color: var(--color-mark-green);
  font-size: 40px;
}

.contact .contact-text {
  position: relative;
  width: auto;
  padding-left: 20px;
}

.contact .contact-text h2 {
  color: var(--color-mark-green);
  font-size: 20px;
  font-weight: 600;
}

.contact .contact-text p {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
}

.contact .contact-item:last-child {
  margin-bottom: 0;
}

.contact .contact-form {
  position: relative;
  padding: 0 15px;
}

.contact .contact-form input {
  color: #ffffff;
  height: 40px;
  border-radius: 0;
  border-width: 1px;
  border-color: rgba(256, 256, 256, 0.4);
  background: transparent;
}

.contact .contact-form textarea {
  color: #ffffff;
  height: 185px;
  border-radius: 0;
  border-width: 1px;
  border-color: rgba(256, 256, 256, 0.4);
  background: transparent;
}

.contact .contact-form input:focus,
.contact .contact-form textarea {
  box-shadow: none;
}

.contact .contact-form .form-control::placeholder {
  color: #ffffff;
  opacity: 1;
}

.contact .contact-form .form-control::-ms-input-placeholder {
  color: #ffffff;
}

.contact .contact-form .form-control::-ms-input-placeholder {
  color: #ffffff;
}

.contact .contact-form .btn {
  padding: 16px 30px;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-mark-green);
  background: var(--color-mark-darkgreen);
  border: none;
  border-radius: 0;
  transition: 0.3s;
}

.contact .contact-form .btn:hover {
  color: var(--color-mark-darkgreen);
  background: #ffffff;
}

.contact .help-block ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.control-group {
  margin-bottom: 17px;
}

@media (max-width: 991px) {
  .size_correo {
    font-size: 12px !important;
  }
}
@media (max-width: 768px) {
  .size_correo {
    font-size: 14px !important;
  }
}
@media (max-width: 431px) {
  .size_correo {
    font-size: 10px !important;
  }
}
</style>
