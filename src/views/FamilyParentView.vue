<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import BottomNavigation from '../components/BottomNavigation.vue'


const router = useRouter()

const activeTab = ref('resumen')

const student = {
    name: 'Sofía',
    grade: '2.º de Primaria',
}

const weeklyStats = [
    {
        id: 'days',
        icon: '▦',
        value: '5',
        label: 'días activos',
        color: 'blue',
    },
    {
        id: 'activities',
        icon: '▤',
        value: '12',
        label: 'actividades',
        color: 'purple',
    },
    {
        id: 'time',
        icon: '◷',
        value: '2 h 30 min',
        label: 'de aprendizaje',
        color: 'blue',
    },
    {
        id: 'stars',
        icon: '★',
        value: '15',
        label: 'estrellas ganadas',
        color: 'yellow',
    },
]

const subjects = [
    {
        id: 'lectura',
        name: 'Lectura',
        icon: '▤',
        percentage: 85,
        color: 'pink',
        level: 'Muy buen progreso',
    },
    {
        id: 'matematicas',
        name: 'Matemáticas',
        icon: '▦',
        percentage: 70,
        color: 'blue',
        level: 'Buen progreso',
    },
    {
        id: 'ciencias',
        name: 'Ciencias',
        icon: '⚗',
        percentage: 60,
        color: 'green',
        level: 'En desarrollo',
    },
    {
        id: 'comprension',
        name: 'Comprensión',
        icon: '☼',
        percentage: 90,
        color: 'yellow',
        level: 'Excelente progreso',
    },
]

const activities = [
    {
        id: 1,
        title: 'Completó una actividad de Lectura',
        detail: 'Hoy · 10 minutos',
        icon: '▤',
        color: 'pink',
    },
    {
        id: 2,
        title: 'Resolvió un reto de Matemáticas',
        detail: 'Ayer · 8 minutos',
        icon: '▦',
        color: 'blue',
    },
    {
        id: 3,
        title: 'Ganó 3 estrellas en Comprensión',
        detail: 'Ayer · 12 minutos',
        icon: '★',
        color: 'yellow',
    },
]

const tabTitle = computed(() => {
    const titles = {
        resumen: 'Esta semana',
        progreso: 'Progreso por materia',
        actividades: 'Actividad reciente',
    }

    return titles[activeTab.value]
})

function volverFamilia() {
    router.push({ name: 'family' })
}
</script>

<template>
    <main class="family-page">
        <section class="family-screen parent-dashboard">

            <header class="family-header" style="margin-bottom: 15px;">
                <button class="family-back" type="button" aria-label="Volver a Mi familia" @click="volverFamilia">
                    <span aria-hidden="true">‹</span>
                </button>

                <h1>Panel de padres</h1>

                <span class="family-header-spacer"></span>
            </header>


            <button class="student-profile-card" type="button" @click="activeTab = 'progreso'">
                <span class="student-avatar" aria-hidden="true">S</span>

                <span class="student-profile-info">
                    <strong>{{ student.name }}</strong>
                    <span>{{ student.grade }}</span>
                </span>

                <span class="student-profile-arrow" aria-hidden="true">›</span>
            </button>

            <nav class="parent-tabs" aria-label="Secciones del panel">
                <button type="button" class="parent-tab" :class="{ 'parent-tab-active': activeTab === 'resumen' }"
                    :aria-pressed="activeTab === 'resumen'" @click="activeTab = 'resumen'">
                    Resumen
                </button>

                <button type="button" class="parent-tab" :class="{ 'parent-tab-active': activeTab === 'progreso' }"
                    :aria-pressed="activeTab === 'progreso'" @click="activeTab = 'progreso'">
                    Progreso
                </button>

                <button type="button" class="parent-tab" :class="{ 'parent-tab-active': activeTab === 'actividades' }"
                    :aria-pressed="activeTab === 'actividades'" @click="activeTab = 'actividades'">
                    Actividades
                </button>
            </nav>

            <section class="parent-dashboard-content">
                <template v-if="activeTab === 'resumen'">
                    <div class="parent-section-heading">
                        <h2>{{ tabTitle }}</h2>
                        <span class="parent-date-range">6 – 12 de mayo</span>
                    </div>

                    <div class="parent-stats-grid">
                        <article v-for="stat in weeklyStats" :key="stat.id" class="parent-stat-card">
                            <span class="parent-stat-icon" :class="`parent-icon-${stat.color}`" aria-hidden="true">
                                {{ stat.icon }}
                            </span>

                            <span class="parent-stat-content">
                                <strong>{{ stat.value }}</strong>
                                <span>{{ stat.label }}</span>
                            </span>
                        </article>
                    </div>

                    <div class="parent-section-heading progress-heading">
                        <h2>Progreso por materia</h2>
                    </div>

                    <div class="parent-subject-list">
                        <article v-for="subject in subjects" :key="subject.id" class="parent-subject-row">
                            <span class="parent-subject-icon" :class="`subject-${subject.color}`" aria-hidden="true">
                                {{ subject.icon }}
                            </span>

                            <span class="parent-subject-name">
                                {{ subject.name }}
                            </span>

                            <span class="parent-progress-track" role="progressbar"
                                :aria-label="`Progreso en ${subject.name}`" aria-valuemin="0" aria-valuemax="100"
                                :aria-valuenow="subject.percentage">
                                <span class="parent-progress-fill" :class="`progress-${subject.color}`"
                                    :style="{ width: `${subject.percentage}%` }"></span>
                            </span>

                            <strong class="parent-progress-value">
                                {{ subject.percentage }}%
                            </strong>
                        </article>
                    </div>

                    <aside class="parent-encouragement">
                        <span class="encouragement-icon" aria-hidden="true">✦</span>
                        <p>
                            <strong>{{ student.name }} está avanzando.</strong>
                            Sigue acompañando sus pequeños grandes logros.
                        </p>
                    </aside>
                </template>

                <template v-else-if="activeTab === 'progreso'">
                    <div class="parent-section-heading">
                        <h2>{{ tabTitle }}</h2>
                        <span class="parent-date-range">Esta semana</span>
                    </div>

                    <div class="parent-detailed-subjects">
                        <article v-for="subject in subjects" :key="subject.id" class="parent-detailed-subject">
                            <div class="parent-detailed-heading">
                                <span class="parent-subject-icon" :class="`subject-${subject.color}`"
                                    aria-hidden="true">
                                    {{ subject.icon }}
                                </span>

                                <div class="parent-detailed-info">
                                    <strong>{{ subject.name }}</strong>
                                    <span>{{ subject.level }}</span>
                                </div>

                                <strong class="parent-progress-value">
                                    {{ subject.percentage }}%
                                </strong>
                            </div>

                            <div class="parent-progress-track detailed-progress-track" role="progressbar"
                                :aria-label="`Progreso en ${subject.name}`" aria-valuemin="0" aria-valuemax="100"
                                :aria-valuenow="subject.percentage">
                                <span class="parent-progress-fill" :class="`progress-${subject.color}`"
                                    :style="{ width: `${subject.percentage}%` }"></span>
                            </div>
                        </article>
                    </div>

                    <aside class="parent-encouragement">
                        <span class="encouragement-icon" aria-hidden="true">✦</span>
                        <p>
                            Cada materia es una oportunidad para descubrir algo nuevo.
                        </p>
                    </aside>
                </template>

                <template v-else>
                    <div class="parent-section-heading">
                        <h2>{{ tabTitle }}</h2>
                        <span class="parent-date-range">Últimas actividades</span>
                    </div>

                    <div class="parent-activity-list">
                        <article v-for="activity in activities" :key="activity.id" class="parent-activity-card">
                            <span class="parent-activity-icon" :class="`subject-${activity.color}`" aria-hidden="true">
                                {{ activity.icon }}
                            </span>

                            <span class="parent-activity-info">
                                <strong>{{ activity.title }}</strong>
                                <span>{{ activity.detail }}</span>
                            </span>

                            <span class="activity-check" aria-hidden="true">✓</span>
                        </article>
                    </div>

                    <aside class="parent-encouragement">
                        <span class="encouragement-icon" aria-hidden="true">✦</span>
                        <p>
                            Celebra sus avances y anímala a seguir aprendiendo.
                        </p>
                    </aside>
                </template>
            </section>

      
      <BottomNavigation />
        </section>
    </main>
</template>
