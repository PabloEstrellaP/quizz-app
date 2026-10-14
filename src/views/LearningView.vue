
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()
const activeTab = ref('insignias')

const badges = [
  {
    id: 'lectura',
    name: 'Lectura experta',
    symbol: '▤',
    color: 'pink',
    unlocked: true,
    description: 'Por completar actividades de lectura.',
  },
  {
    id: 'numeros',
    name: 'Amiga de los números',
    symbol: '✣',
    color: 'blue',
    unlocked: true,
    description: 'Por resolver retos matemáticos.',
  },
  {
    id: 'ciencia',
    name: 'Exploradora científica',
    symbol: '⚗',
    color: 'green',
    unlocked: true,
    description: 'Por explorar el mundo de las ciencias.',
  },
  {
    id: 'pensadora',
    name: 'Gran pensadora',
    symbol: '☼',
    color: 'yellow',
    unlocked: true,
    description: 'Por resolver preguntas de comprensión.',
  },
  {
    id: 'reto',
    name: 'Reto completado',
    symbol: '✓',
    color: 'purple',
    unlocked: true,
    description: 'Por completar un cuestionario.',
  },
  {
    id: 'constancia',
    name: 'Constancia',
    symbol: '★',
    color: 'orange',
    unlocked: true,
    description: 'Por seguir aprendiendo cada día.',
  },
  {
    id: 'actitud',
    name: 'Actitud increíble',
    symbol: '♥',
    color: 'pink',
    unlocked: true,
    description: 'Por mantener una actitud positiva.',
  },
  {
    id: 'racha',
    name: '5 días seguidos',
    symbol: '⚑',
    color: 'blue',
    unlocked: true,
    description: 'Por aprender durante cinco días.',
  },
  {
    id: 'sorpresa',
    name: '¡Sorpresa!',
    symbol: '🔒',
    color: 'locked',
    unlocked: false,
    description: 'Sigue aprendiendo para descubrir esta insignia.',
  },
]

const goals = ref([
  {
    id: 'activities',
    title: 'Completar actividades',
    description: 'Completa 10 actividades de aprendizaje.',
    current: 7,
    target: 10,
    symbol: '▤',
    color: 'purple',
  },
  {
    id: 'reading',
    title: 'Amante de la lectura',
    description: 'Completa 5 actividades de lectura.',
    current: 3,
    target: 5,
    symbol: '▤',
    color: 'pink',
  },
  {
    id: 'science',
    title: 'Explorar las ciencias',
    description: 'Resuelve 5 retos de ciencias.',
    current: 2,
    target: 5,
    symbol: '⚗',
    color: 'green',
  },
  {
    id: 'streak',
    title: 'Aprender con constancia',
    description: 'Completa 5 días de aprendizaje.',
    current: 3,
    target: 5,
    symbol: '★',
    color: 'yellow',
  },
])

const selectedBadge = ref(null)

function openBadge(badge) {
  selectedBadge.value = badge
}

function closeBadge() {
  selectedBadge.value = null
}
</script>

<template>
  <main class="family-page">
    <section class="family-screen learning-screen">
      <header class="family-header">
        <button
          class="family-back"
          type="button"
          aria-label="Volver al inicio"
          @click="router.push({ name: 'home' })"
        >
          ‹
        </button>

        <h1>Mis logros</h1>

        <span class="family-header-spacer"></span>
      </header>

      <section class="learning-hero">
        <div class="learning-hero-decoration" aria-hidden="true">✦</div>

        <div class="learning-hero-copy">
          <span class="section-eyebrow">¡INCREÍBLE!</span>
          <h2>¡Ya tienes!</h2>

          <div class="learning-star-count">
            <strong>15</strong>
            <span>estrellas</span>
          </div>
        </div>

        <span class="learning-hero-star" aria-hidden="true">★</span>
      </section>

      <nav class="learning-tabs" aria-label="Mis logros">
        <button
          class="learning-tab"
          :class="{ 'learning-tab-active': activeTab === 'insignias' }"
          type="button"
          :aria-pressed="activeTab === 'insignias'"
          @click="activeTab = 'insignias'"
        >
          Insignias
        </button>

        <button
          class="learning-tab"
          :class="{ 'learning-tab-active': activeTab === 'metas' }"
          type="button"
          :aria-pressed="activeTab === 'metas'"
          @click="activeTab = 'metas'"
        >
          Metas
        </button>
      </nav>

      <section
        v-if="activeTab === 'insignias'"
        class="learning-badges-section"
      >
        <div class="learning-section-heading">
          <div>
            <span class="section-eyebrow">TUS RECOMPENSAS</span>
            <h2>Mis insignias</h2>
          </div>

          <span class="learning-badge-counter">
            {{ badges.filter(badge => badge.unlocked).length }}/{{ badges.length }}
          </span>
        </div>

        <div class="learning-badges-grid">
          <button
            v-for="badge in badges"
            :key="badge.id"
            class="learning-badge"
            :class="{ 'learning-badge-locked': !badge.unlocked }"
            type="button"
            @click="openBadge(badge)"
          >
            <span
              class="learning-badge-medal"
              :class="`medal-${badge.color}`"
              aria-hidden="true"
            >
              {{ badge.symbol }}
            </span>

            <span class="learning-badge-name">
              {{ badge.name }}
            </span>

            <span
              v-if="!badge.unlocked"
              class="learning-badge-status"
            >
              Bloqueada
            </span>
          </button>
        </div>
      </section>

      <section v-else class="learning-goals-section">
        <div class="learning-section-heading">
          <div>
            <span class="section-eyebrow">SIGUE AVANZANDO</span>
            <h2>Mis metas</h2>
          </div>

          <span class="learning-goal-symbol" aria-hidden="true">✦</span>
        </div>

        <article
          v-for="goal in goals"
          :key="goal.id"
          class="learning-goal-card"
        >
          <div class="learning-goal-heading">
            <span
              class="learning-goal-icon"
              :class="`goal-${goal.color}`"
              aria-hidden="true"
            >
              {{ goal.symbol }}
            </span>

            <div class="learning-goal-copy">
              <h3>{{ goal.title }}</h3>
              <p>{{ goal.description }}</p>
            </div>
          </div>

          <div class="learning-goal-progress-row">
            <span>Progreso</span>
            <strong>
              {{ goal.current }}/{{ goal.target }}
            </strong>
          </div>

          <div
            class="learning-goal-track"
            role="progressbar"
            :aria-label="goal.title"
            aria-valuemin="0"
            :aria-valuemax="goal.target"
            :aria-valuenow="goal.current"
          >
            <span
              class="learning-goal-fill"
              :class="`goal-fill-${goal.color}`"
              :style="{
                width: `${Math.min(100, (goal.current / goal.target) * 100)}%`,
              }"
            ></span>
          </div>
        </article>
      </section>

      <aside class="learning-encouragement">
        <span class="learning-encouragement-icon" aria-hidden="true">✦</span>
        <p>
          <strong>¡Vas muy bien!</strong>
          Cada pequeño logro te acerca a nuevas aventuras.
        </p>
      </aside>

      <BottomNavigation />

      <div
        v-if="selectedBadge"
        class="learning-modal-overlay"
        @click.self="closeBadge"
      >
        <section
          class="learning-badge-modal"
          role="dialog"
          aria-modal="true"
          :aria-label="selectedBadge.name"
        >
          <button
            class="learning-modal-close"
            type="button"
            aria-label="Cerrar"
            @click="closeBadge"
          >
            ×
          </button>

          <span
            class="learning-badge-medal learning-modal-medal"
            :class="`medal-${selectedBadge.color}`"
            aria-hidden="true"
          >
            {{ selectedBadge.symbol }}
          </span>

          <span class="section-eyebrow">
            {{ selectedBadge.unlocked ? 'INSIGNIA' : 'SIGUE APRENDIENDO' }}
          </span>

          <h2>{{ selectedBadge.name }}</h2>

          <p>{{ selectedBadge.description }}</p>

          <button
            class="adventure-primary-button"
            type="button"
            @click="closeBadge"
          >
            ¡Entendido!
          </button>
        </section>
      </div>
    </section>
  </main>
</template>
