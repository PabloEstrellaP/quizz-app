<script setup>
import { useRouter } from 'vue-router'

import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

function comenzarAventura() {
  router.push({ name: 'quiz' })
}

const categorias = [
  {
    id: 'lectura',
    nombre: 'Lectura',
    icono: '▤',
    clase: 'pink',
  },
  {
    id: 'matematicas',
    nombre: 'Matemáticas',
    icono: '▦',
    clase: 'blue',
  },
  {
    id: 'ciencias',
    nombre: 'Ciencias',
    icono: '⚗',
    clase: 'green',
  },
  {
    id: 'comprension',
    nombre: 'Comprensión',
    icono: '☼',
    clase: 'yellow',
  },
]

function abrirCategoria() {
  // Por ahora, todas las categorías abren el mismo cuestionario.
  comenzarAventura()
}
</script>

<template>
  <main class="adventure-page">
    <section class="adventure-screen">
      <header class="adventure-header">
        <!--<button class="menu-icon-button" aria-label="Menú" type="button">
          <span class="menu-lines">☰</span>
        </button>-->

        <div class="adventure-logo" aria-label="Quiz App">
          <img src="/public/logo__.png" loading="lazy" alt="Footer" class="cHeader___">
        </div>

        <!--<button class="menu-icon-button notification-button" aria-label="Notificaciones" type="button">
          ♧
        </button>-->
      </header>

      <section class="adventure-welcome">
        <span class="welcome-eyebrow">¡HOLA, EXPLORADOR!</span>

        <h1>
          ¡Tu próxima aventura
          <span>comienza aquí!</span>
        </h1>

        <p>
          Descubre, aprende y pon a prueba tus conocimientos.
          ¿Estás listo para comenzar?
        </p>
      </section>

      <section class="adventure-highlight">
        <div class="highlight-decoration decoration-left">✦</div>
        <div class="highlight-decoration decoration-right">✦</div>

        <div class="highlight-content">
          <span class="highlight-symbol">✳</span>
          <span class="highlight-label">UN NUEVO RETO TE ESPERA</span>
          <strong>¿Cuánto sabes?</strong>
          <span class="highlight-subtitle">
            Demuéstralo pregunta a pregunta.
          </span>
        </div>
      </section>

      <button class="adventure-primary-button" type="button" @click="comenzarAventura">
        Comenzar aventura
        <span aria-hidden="true">→</span>
      </button>

      <section class="adventure-categories">
        <div class="categories-heading">
          <div>
            <span class="section-eyebrow">DESCUBRE ALGO NUEVO</span>
            <h2>Explora tus aventuras</h2>
          </div>

          <span class="categories-sparkle">✦</span>
        </div>

        <div class="categories-grid">
          <button v-for="categoria in categorias" :key="categoria.id" class="category-card" type="button"
            @click="abrirCategoria">
            <span class="category-icon" :class="`category-${categoria.clase}`" aria-hidden="true">
              {{ categoria.icono }}
            </span>

            <span class="category-name">
              {{ categoria.nombre }}
            </span>

            <span class="category-arrow" aria-hidden="true">
              ›
            </span>
          </button>
        </div>
      </section>

      <BottomNavigation />
    </section>
  </main>
</template>
