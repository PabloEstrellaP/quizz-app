import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ParticipantView from '../views/ParticipantView.vue'
import QuizView from '../views/QuizView.vue'
import ResultsView from '../views/ResultsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/participante',
      name: 'participant',
      component: ParticipantView,
    },
    {
      path: '/cuestionario',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/resultados',
      name: 'results',
      component: ResultsView,
    },
  ],
})

export default router