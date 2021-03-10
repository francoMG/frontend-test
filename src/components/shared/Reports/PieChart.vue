<script>
import { Pie, mixins } from 'vue-chartjs'

export default {
  mixins: [mixins.reactiveData],
  extends: Pie,
  props: ['data', 'options'],
  methods: {
    render() {
      this.renderChart(this.data, this.options)
    },
  },
  mounted() {
    this.render()
  },
  watch: {
    data() {
      this.render()
    },
  },
}
</script>
