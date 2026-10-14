<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '../data/questions'

const router = useRouter()

const TOTAL_QUESTIONS = 5

const participant = sessionStorage.getItem('quiz_participant')

const quizQuestions = ref([])
const currentIndex = ref(0)
const selectedAnswer = ref(null)
const answered = ref(false)
const results = ref([])

const currentQuestion = computed(
  () => quizQuestions.value[currentIndex.value],
)

const currentAnswer = computed(() =>
  currentQuestion.value?.answers.find(
    (answer) => answer.id === selectedAnswer.value,
  ),
)

const correctAnswer = computed(() =>
  currentQuestion.value?.answers.find((answer) => answer.correct),
)

const isCorrect = computed(
  () => answered.value && currentAnswer.value?.correct === true,
)

const progress = computed(
  () => ((currentIndex.value + 1) / quizQuestions.value.length) * 100,
)

const isLastQuestion = computed(
  () => currentIndex.value === quizQuestions.value.length - 1,
)

// Mezcla los elementos sin modificar el arreglo original.
function shuffle(array) {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

function startQuiz() {
  if (!participant?.trim()) {
    router.replace({ name: 'participant' })
    return
  }

  if (questions.length < TOTAL_QUESTIONS) {
    router.replace({ name: 'home' })
    return
  }

  quizQuestions.value = shuffle(questions)
    .slice(0, TOTAL_QUESTIONS)
    .map((question) => ({
      ...question,
      answers: shuffle(question.answers),
    }))
}

function selectAnswer(answer) {
  if (answered.value) return

  selectedAnswer.value = answer.id
  answered.value = true

  results.value.push({
    questionId: currentQuestion.value.id,
    question: currentQuestion.value.question,
    selectedAnswerId: answer.id,
    selectedAnswer: answer.text,
    correctAnswer: correctAnswer.value.text,
    isCorrect: answer.correct,
  })
}

function nextQuestion() {
  if (!answered.value) return

  if (isLastQuestion.value) {
    const correct = results.value.filter(
      (result) => result.isCorrect,
    ).length

    const finalResult = {
      participant,
      date: new Date().toISOString(),
      total: quizQuestions.value.length,
      correct,
      incorrect: results.value.length - correct,
      percentage: Math.round(
        (correct / quizQuestions.value.length) * 100,
      ),
      answers: results.value,
    }

    sessionStorage.setItem(
      'quiz_result',
      JSON.stringify(finalResult),
    )

    router.push({ name: 'results' })
    return
  }

  currentIndex.value++
  selectedAnswer.value = null
  answered.value = false
}

onMounted(startQuiz)
</script>

<template>
  <main class="page">
    <section v-if="currentQuestion" class="quiz-card">
      <header class="quiz-header">
        <button class="back-button" type="button" aria-label="Volver al inicio" @click="router.push({ name: 'home' })">
          ←
        </button>

        <div class="quiz-brand">
          <img src="/public/tlami_color_borde.png" class="cLogo_quizz">
        </div>

        <span class="question-counter">
          {{ currentIndex + 1 }}/{{ quizQuestions.length }}
        </span>
      </header>

      <div class="progress-track" role="progressbar" :aria-valuenow="currentIndex + 1" :aria-valuemin="1"
        :aria-valuemax="quizQuestions.length" :aria-label="`Pregunta ${currentIndex + 1} de ${quizQuestions.length}`">
        <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
      </div>

      <div class="quiz-content">
        <span class="eyebrow">
          PREGUNTA {{ currentIndex + 1 }}
        </span>

        <h1 class="question-title">
          {{ currentQuestion.question }}
        </h1>

        <p class="description">
          Selecciona la respuesta que consideres correcta.
        </p>

        <div class="answers-list">
          <button v-for="(answer, index) in currentQuestion.answers" :key="answer.id" class="answer-option" :class="{
            'answer-correct': answered && answer.correct,
            'answer-incorrect':
              answered &&
              selectedAnswer === answer.id &&
              !answer.correct,
            'answer-muted':
              answered &&
              selectedAnswer !== answer.id &&
              !answer.correct,
          }" :disabled="answered" :aria-pressed="selectedAnswer === answer.id" @click="selectAnswer(answer)">
            <span class="answer-letter">
              {{ String.fromCharCode(65 + index) }}
            </span>

            <span class="answer-text">{{ answer.text }}</span>

            <span v-if="answered && answer.correct" class="answer-status" aria-label="Respuesta correcta">
              ✓
            </span>

            <span v-else-if="
              answered &&
              selectedAnswer === answer.id &&
              !answer.correct
            " class="answer-status" aria-label="Respuesta incorrecta">
              ×
            </span>
          </button>
        </div>

        <section v-if="answered" class="feedback-panel" :class="isCorrect ? 'feedback-success' : 'feedback-error'"
          aria-live="polite">
          <div class="feedback-heading">
            <span>{{ isCorrect ? '✓' : '✕' }}</span>
            <strong>
              {{ isCorrect ? '¡Muy bien!' : '¡Sigue intentando!' }}
            </strong>
          </div>

          <p v-if="isCorrect">
            ¡Buen trabajo! Elegiste la respuesta correcta. Sigue así.
          </p>

          <p v-else>
            Casi lo logras. Revisa la pregunta con calma e inténtalo de nuevo.
            <!--<strong>{{ correctAnswer.text }}</strong>-->
          </p>
        </section>

        <button v-if="answered" class="primary-button next-button" @click="nextQuestion">
          {{ isLastQuestion ? 'Ver resultados' : 'Siguiente pregunta' }}
          <span class="button-arrow">→</span>
        </button>

        <p v-else class="quiz-hint">
          Elige una respuesta para continuar.
        </p>

        <!--<img src="/public/footer__.png" loading="lazy" alt="Footer" class="cFooter_">-->
      </div>
    </section>

    <section v-else class="form-card">
      <div class="form-illustration">✨</div>
      <h1>Preparando tu cuestionario...</h1>
    </section>
  </main>
</template>