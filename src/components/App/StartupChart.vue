<template>
  <div class="flex-1 flex flex-col relative">
    <div class="flex flex-col">
      <h1 class="text-lg tracking-wide text-app-title">
        Why do you create a startup?
      </h1>
      <sub class="text-app-disabled-2 text-base tracking-wide">Trends</sub>
    </div>
    <div class="m-auto pt-14">
      <PieChart
        :data="chartData"
        :options="chartOptions"
        :width="400"
        :height="300"
      />
    </div>
  </div>
</template>

<script>
import PieChart from '@/components/shared/Reports/PieChart.vue'

export default {
  components: { PieChart },
  props: ['reports'],
  computed: {
    chartData: {
      get: function() {
        return {
          labels: this.reports.map(({ tag }) => tag),
          datasets: [
            {
              label: 'Startup report',
              backgroundColor: ['#503795', '#855CF8', '#B085FF', '#E289F2'],
              data: this.reports.map(({ value }) => value),
              borderWidth: 0,
            },
          ],
        }
      },
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 26,
            fontSize: 14,
          },
        },
      },
    }
  },
}
</script>
