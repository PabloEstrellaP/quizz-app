
<script setup>
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'
      
const router = useRouter()

function comenzarAprendizaje() {
  router.push({ name: 'quiz' })
}

function volverFamilia() {
  router.push({ name: 'family' })
}
</script>

<template>
  <main class="family-page">
    <section class="family-screen child-screen">
      <header class="family-header">
        <button
          class="family-back"
          type="button"
          aria-label="Volver a Mi familia"
          @click="volverFamilia"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <h1>Mi espacio</h1>

        <span class="family-header-spacer"></span>
      </header>

      <section class="child-welcome">
        <div class="child-welcome-icon" aria-hidden="true">
          <span>✦</span>
        </div>

        <span class="section-eyebrow">¡HOLA, EXPLORADOR!</span>

        <h2>¡Prepárate para aprender!</h2>

        <p>
          Descubre cosas nuevas, responde preguntas y demuestra
          todo lo que sabes.
        </p>
      </section>

      <section class="child-feature-card">
        <span class="child-feature-symbol" aria-hidden="true">✳</span>

        <span class="child-feature-label">TU PRÓXIMA AVENTURA</span>

        <h3>¿Listo para el reto?</h3>

        <p>
          Pon a prueba tus conocimientos con un cuestionario.
        </p>

        <button
          class="adventure-primary-button"
          type="button"
          @click="comenzarAprendizaje"
        >
          Comenzar a aprender
          <span aria-hidden="true">→</span>
        </button>
      </section>

      <section class="child-tips">
        <h3>Recuerda</h3>

        <div class="child-tip-row">
          <span class="child-tip-icon tip-purple" aria-hidden="true">★</span>
          <span>Aprender también es descubrir cosas nuevas.</span>
        </div>

        <div class="child-tip-row">
          <span class="child-tip-icon tip-green" aria-hidden="true">✓</span>
          <span>Equivocarse es parte del aprendizaje.</span>
        </div>

        <div class="child-tip-row">
          <span class="child-tip-icon tip-yellow" aria-hidden="true">✦</span>
          <span>¡Hazlo a tu ritmo y diviértete!</span>
        </div>
      </section>

      <BottomNavigation />
    </section>
  </main>
</template>
