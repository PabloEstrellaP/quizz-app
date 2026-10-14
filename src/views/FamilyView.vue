
<script setup>
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

function irComoHijo() {
  router.push({ name: 'family-child' })
}

function irComoPapa() {
  router.push({ name: 'family-parent' })
}

function volverInicio() {
  router.push({ name: 'home' })
}
</script>

<template>
  <main class="family-page">
    <section class="family-screen">
      <header class="family-header">
        <button
          class="family-back"
          type="button"
          aria-label="Volver al inicio"
          @click="volverInicio"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <h1>Mi familia</h1>

        <span class="family-header-spacer"></span>
      </header>

      <section class="family-intro">
        <div class="family-main-icon">
          <span aria-hidden="true">✦</span>
        </div>

        <span class="section-eyebrow">UN ESPACIO PARA TODOS</span>

        <h2>¿Cómo quieres ingresar?</h2>

        <p>
          Elige tu perfil para continuar y descubrir tu espacio.
        </p>
      </section>

      <section class="family-options">
        <button
          class="family-role-card role-child"
          type="button"
          @click="irComoHijo"
        >
          <span class="family-role-icon" aria-hidden="true">★</span>

          <span class="family-role-content">
            <strong>Soy hijo</strong>
            <span>
              Explora tus aprendizajes y descubre nuevas aventuras.
            </span>
            <span class="family-role-cta">
              Entrar como hijo <span aria-hidden="true">→</span>
            </span>
          </span>

          <span class="family-role-arrow" aria-hidden="true">›</span>
        </button>

        <button
          class="family-role-card role-parent"
          type="button"
          @click="irComoPapa"
        >
          <span class="family-role-icon" aria-hidden="true">♥</span>

          <span class="family-role-content">
            <strong>Soy papá o mamá</strong>
            <span>
              Próximamente podrás consultar el progreso familiar.
            </span>
            <span class="family-role-cta">
              Entrar como familiar <span aria-hidden="true">→</span>
            </span>
          </span>

          <span class="family-role-arrow" aria-hidden="true">›</span>
        </button>
      </section>

      <p class="family-note">
        Selecciona una opción para continuar.
      </p>

      <BottomNavigation />
    </section>
  </main>
</template>
