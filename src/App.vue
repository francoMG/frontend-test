<template>
  <div id="app" class="bg-app-background p-7">
    <Header />
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

export default {
  name: 'app',
  components: { Header, UsersDashboard, StartupChart },
  async mounted() {
    const userResponse = await fetch('/api/users')
    const { users } = await userResponse.json()
    const reportResponse = await fetch('/api/reports')
    const { reports } = await reportResponse.json()

    this.users = users
    this.reports = reports.map(({ category, total }) => ({
      tag: category,
      value: total,
    }))
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
  @apply flex p-4 shadow-lg bg-white rounded-app-2;
}
</style>
