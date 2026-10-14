
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function loadResult() {
  try {
    return JSON.parse(
      sessionStorage.getItem('quiz_result') || 'null',
    )
  } catch {
    return null
  }
}

const result = loadResult()

const scoreMessage = computed(() => {
  if (!result) return ''

  if (result.percentage === 100) {
    return '¡Excelente! Respondiste todas correctamente.'
  }

  if (result.percentage >= 80) {
    return '¡Muy buen trabajo! Tienes un gran resultado.'
  }

  if (result.percentage >= 60) {
    return '¡Vas por buen camino! Sigue practicando.'
  }

  return '¡Cada intento es una oportunidad para aprender!'
})

function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <main class="page">
    <section v-if="result" class="form-card results-card">
      <img src="/public/logo__.png" loading="lazy" alt="Footer" class="cHeader__">

      <span class="eyebrow">CUESTIONARIO COMPLETADO</span>

      <h1>
        ¡Buen trabajo,
        <span>{{ result.participant }}!</span>
      </h1>

      <p class="description">
        {{ scoreMessage }}
      </p>

      <div class="score-circle">
        <strong>{{ result.percentage }}%</strong>
        <span>Tu puntuación</span>
      </div>

      <div class="stats-grid">
        <div class="stat-card stat-success">
          <strong>{{ result.correct }}</strong>
          <span>Correctas</span>
        </div>

        <div class="stat-card stat-error">
          <strong>{{ result.incorrect }}</strong>
          <span>Incorrectas</span>
        </div>
      </div>

      <div class="result-details">
        <p>
          <span>Preguntas contestadas</span>
          <strong>{{ result.total }}</strong>
        </p>
      </div>

      <section class="review-section">
        <div class="review-heading">
          <div>
            <span class="eyebrow">REPASO</span>
            <h2>Revisa tus respuestas</h2>
          </div>

          <span class="review-count">
            {{ result.answers.length }} preguntas
          </span>
        </div>

        <article
          v-for="(answer, index) in result.answers"
          :key="answer.questionId"
          class="review-item"
          :class="
            answer.isCorrect
              ? 'review-correct'
              : 'review-incorrect'
          "
        >
          <div class="review-question">
            <span class="review-number">
              {{ index + 1 }}
            </span>

            <span class="review-status">
              {{ answer.isCorrect ? 'Correcta' : 'Incorrecta' }}
            </span>
          </div>

          <h3>{{ answer.question }}</h3>

          <div class="review-answer">
            <span class="review-label">Tu respuesta</span>
            <p>{{ answer.selectedAnswer }}</p>
          </div>

          <div
            v-if="!answer.isCorrect"
            class="review-answer correct-answer-detail"
          >
            <span class="review-label">
              Respuesta correcta
            </span>
            <p>{{ answer.correctAnswer }}</p>
          </div>
        </article>
      </section>

      <div class="result-actions">
        <button
          class="primary-button"
          @click="goHome"
        >
          Volver al inicio
          <span class="button-arrow">→</span>
        </button>
      </div>

      <p class="footer-note">
        Gracias por participar. Has completado tu cuestionario.
      </p>
    </section>

    <section v-else class="form-card">
      <div class="form-illustration">📋</div>

      <h1>No hay resultados disponibles</h1>

      <p class="description">
        Completa un cuestionario para consultar tu puntuación.
      </p>

      <button
        class="primary-button"
        @click="goHome"
      >
        Ir al inicio
        <span class="button-arrow">→</span>
      </button>
    </section>
  </main>
</template>
