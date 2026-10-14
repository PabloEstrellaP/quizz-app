<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nombre = ref('')
const error = ref('')

function iniciar() {
  const nombreLimpio = nombre.value.trim()

  if (!nombreLimpio) {
    error.value = 'Por favor, escribe tu nombre para continuar.'
    return
  }

  sessionStorage.setItem('quiz_participant', nombreLimpio)

  router.push({ name: 'quiz' })
}
</script>

<template>
  <main class="page" style="display: flex; flex-direction: column;">
    <img src="/public/logo__.png" loading="lazy" alt="Footer" class="cLogo cLogo__Reponsive" style="transform: translateY(15%); position: relative; z-index: 5;">
    <section class="form-card">
      <button
        class="back-button"
        type="button"
        aria-label="Volver al inicio"
        @click="router.push({ name: 'home' })"
      >
        ←
      </button>

       <div class="hero-decoration">
         <img src="/public/before-start.png" class="cLogo_">
        </div>

      <p class="description">
        Queremos saber quién está participando.
        Escribe tu nombre para continuar.
      </p>

      <form class="participant-form" @submit.prevent="iniciar">
        <label for="nombre">Tu nombre</label>

        <input
          id="nombre"
          v-model="nombre"
          type="text"
          placeholder="Escribe tu nombre..."
          autocomplete="given-name"
          maxlength="100"
          autofocus
          :aria-invalid="Boolean(error)"
          @input="error = ''"
        />

        <p v-if="error" class="error-message" role="alert">
          {{ error }}
        </p>

        <button class="primary-button" type="submit">
          Continuar
          <span class="button-arrow">→</span>
        </button>
      </form>

      <p class="footer-note">
        Tus respuestas se procesarán localmente en esta versión.
      </p>
      <img src="/public/footer__.png" loading="lazy" alt="Footer" class="cFooter_">
    </section>
  </main>
</template>