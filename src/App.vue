<template>
  <div id="app" class="bg-app-bg dark:bg-dark p-7">
    <Header :toggle-theme="toggleTheme" />
    <div class="dashboard">
      <div class="route">
        Home /
        <u>
          Reports & Insights
        </u>
      </div>
      <div class="chart">
        <StartupChart :reports="reports" />
      </div>
      <div class="users">
        <UsersDashboard :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/App/Header.vue'
import StartupChart from '@/components/App/StartupChart.vue'
import UsersDashboard from '@/components/App/UsersDashboard.vue'
import { getUsers } from '@/services/UsersService.js'
import { getReports } from '@/services/ReportsService.js'

export default {
  name: 'app',
  components: { Header, UsersDashboard, StartupChart },
  async mounted() {
    this.loadTheme();
    this.users = await getUsers()
    this.reports = await getReports()

  },
  methods: {
    loadTheme() {
      const isDark = localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) document.documentElement.classList.add('dark');
    },
    toggleTheme() {
      const isDarkActive = document.documentElement.classList.contains('dark');
      const action = (isDarkActive) ? 'removeItem' : 'setItem';
      localStorage[action]('theme', 'dark');
      document.documentElement.classList.toggle('dark')
    },
  },
  data() {
    return {
      users: [],
      reports: [],
    }
  },
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
  font-family: 'Roboto', sans-serif;
}

.dashboard {
  display: grid;
  grid-template-areas:
    'route route'
    'chart users';
  grid-template-columns: 35% 65%;
}

.route {
  grid-area: route;
  @apply text-app-disabled py-6 px-4 font-medium;
}

.chart {
  grid-area: chart;
  @apply mr-6;
}

.users {
  grid-area: users;
}

.chart,
.users {
  @apply flex p-4 shadow-lg bg-white dark:bg-dark-2 rounded-app;
}
</style>
