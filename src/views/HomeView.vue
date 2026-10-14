<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function comenzar() {
  router.push({ name: 'participant' })
}
</script>

<template>
  <main class="page">
    <section class="welcome-card">

      <div class="hero">
        <div class="hero-decoration">
         <img src="/public/logo.png" class="cLogo">
        </div>

        <span class="eyebrow">TU MOMENTO DE DEMOSTRARLO</span>

        <h1>
          ¿Listo para poner a prueba
          <span>tus conocimientos?</span>
        </h1>

        <p>
          Responde, aprende y descubre cuánto sabes.
          ¡Tu siguiente reto comienza aquí!
        </p>
      </div>

      <div class="welcome-footer">
        <button class="primary-button" @click="comenzar">
          Comenzar
          <span class="button-arrow">→</span>
        </button>

        <p class="footer-note">
          Una pregunta a la vez. Tú puedes.
        </p>
      </div>
    </section>
  </main>
</template>