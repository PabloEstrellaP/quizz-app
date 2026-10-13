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
  <main class="page">
    <section class="form-card">
      <button
        class="back-button"
        type="button"
        aria-label="Volver al inicio"
        @click="router.push({ name: 'home' })"
      >
        ←
      </button>

      <div class="form-illustration">
        <span>👋</span>
      </div>

      <span class="eyebrow">ANTES DE COMENZAR</span>

      <h1>¡Hola! ¿Cómo te llamas?</h1>

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
    </section>
  </main>
</template>