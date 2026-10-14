
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ParticipantView from '../views/ParticipantView.vue'
import QuizView from '../views/QuizView.vue'
import ResultsView from '../views/ResultsView.vue'
import FamilyView from '../views/FamilyView.vue'
import FamilyChildView from '../views/FamilyChildView.vue'
import FamilyParentView from '../views/FamilyParentView.vue'
import LearningView from '../views/LearningView.vue'
import ExploreView from '../views/ExploreView.vue'

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
    {
      path: '/familia',
      name: 'family',
      component: FamilyView,
    },
    {
      path: '/familia/hijo',
      name: 'family-child',
      component: FamilyChildView,
    },
    {
      path: '/familia/padres',
      name: 'family-parent',
      component: FamilyParentView,
    },
    {
      path: '/aprender',
      name: 'learning',
      component: LearningView,
    },
    {
      path: '/explorar',
      name: 'explore',
      component: ExploreView,
    },
  ],
})

export default router
