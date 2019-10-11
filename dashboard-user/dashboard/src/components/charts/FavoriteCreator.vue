<script>
  import { HorizontalBar } from 'vue-chartjs'
  export default {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          labels: ['제이제이 유튜브', 'BangtanTV 유튜브', '박막례 유튜브', '양팡 유튜브'],
          datasets: [
            {
              backgroundColor: ['#7656ed','#468df7','#41c6f1','#33d4c3'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [56, 40, 28, 12]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>