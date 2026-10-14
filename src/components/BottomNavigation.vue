<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigationItems = [
  {
    label: 'Inicio',
    icon: '◆',
    routeName: 'home',
    activeRoutes: ['home'],
  },
  {
    label: 'Aprender',
    icon: '▤',
    routeName: 'learning',
    activeRoutes: ['learning'],
  },
  {
    label: 'Retos',
    icon: '♜',
    routeName: 'explore',
    activeRoutes: ['explore', 'quiz', 'results'],
  },
  {
    label: 'Familia',
    icon: '♙',
    routeName: 'family',
    activeRoutes: ['family', 'family-child', 'family-parent'],
  },
]

const activeItem = computed(() =>
  navigationItems.find((item) =>
    item.activeRoutes.includes(route.name),
  )?.label,
)

function navigateTo(item) {
  if (route.name !== item.routeName) {
    router.push({ name: item.routeName })
  }
}
</script>

<template>
  <nav class="adventure-bottom-nav" aria-label="Navegación principal">
    <button v-for="item in navigationItems" :key="item.label" class="bottom-nav-item" :class="{
      'bottom-nav-active': activeItem === item.label,
    }" type="button" :aria-current="activeItem === item.label ? 'page' : undefined" @click="navigateTo(item)">
      <span class="bottom-nav-icon" aria-hidden="true">
        {{ item.icon }}
      </span>

      <span>{{ item.label }}</span>
    </button>
  </nav>
</template>
