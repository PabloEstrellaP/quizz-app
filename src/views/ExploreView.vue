
<script setup>
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

const categories = [
  {
    id: 'lectura',
    name: 'Lectura',
    description: 'Descubre historias increíbles',
    icon: '▤',
    color: 'pink',
  },
  {
    id: 'matematicas',
    name: 'Matemáticas',
    description: 'Resuelve, juega y avanza',
    icon: '▦',
    color: 'blue',
  },
  {
    id: 'ciencias',
    name: 'Ciencias',
    description: 'Explora el mundo que te rodea',
    icon: '⚗',
    color: 'green',
  },
  {
    id: 'comprension',
    name: 'Comprensión',
    description: 'Lee, piensa y conecta',
    icon: '☼',
    color: 'yellow',
  },
  {
    id: 'retos',
    name: 'Retos',
    description: 'Pon a prueba tus conocimientos',
    icon: '★',
    color: 'purple',
  },
]

function exploreCategory(category) {
  if (category.id === 'retos') {
    router.push({ name: 'quiz', query: { tipo: 'retos' } })
    return
  }

  router.push({
    name: 'quiz',
    query: { materia: category.id },
  })
}
</script>

<template>
  <main class="family-page">
    <section class="family-screen explore-screen">
      <header class="explore-header">
        <button
          class="family-back"
          type="button"
          aria-label="Volver al inicio"
          @click="router.push({ name: 'home' })"
        >
          ‹
        </button>

        <div class="explore-header-title">
          <span class="explore-header-icon" aria-hidden="true">♙</span>
          <h1>Explorar</h1>
        </div>

        <span class="family-header-spacer"></span>
      </header>

      <section class="explore-intro">
        <span class="section-eyebrow">TU PRÓXIMA AVENTURA</span>

        <h2>
          ¿Qué te gustaría
          <span>aprender hoy?</span>
        </h2>

        <div class="explore-decoration" aria-hidden="true">
          <span class="explore-sparkle">✦</span>
          <span class="explore-arrow">〰</span>
          <span class="explore-star">★</span>
        </div>
      </section>

      <section class="explore-categories" aria-label="Materias disponibles">
        <button
          v-for="category in categories"
          :key="category.id"
          class="explore-category-card"
          :class="`explore-${category.color}`"
          type="button"
          @click="exploreCategory(category)"
        >
          <span
            class="explore-category-icon"
            aria-hidden="true"
          >
            {{ category.icon }}
          </span>

          <span class="explore-category-content">
            <strong>{{ category.name }}</strong>
            <span>{{ category.description }}</span>
          </span>

          <span class="explore-category-arrow" aria-hidden="true">
            ›
          </span>
        </button>
      </section>

      <BottomNavigation />
    </section>
  </main>
</template>
