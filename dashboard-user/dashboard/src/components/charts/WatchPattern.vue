<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line} from 'vue-chartjs'
  
  //Exporting this so it can be used in other components
  export default { 
    extends: Line,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 
          datasets: [
            {
              label: '나',
              backgroundColor: '#f28cec',
              pointBackgroundColor: 'white',
              borderWidth: 5,
              borderColor: '#f28cec',
              fill: false,
              //Data to be represented on y-axis
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100,23,36,40,10] //16개
            },
            {
              label: '20대 여성 평균',
              backgroundColor: '#5380ff',
              pointBackgroundColor: 'white',
              borderWidth: 5,
              borderColor: '#5380ff',
              fill: false,
              //Data to be represented on y-axis
              data: [30, 10, 50, 30, 20, 90, 30, 40, 60, 40, 90, 10, 21, 60, 30 ,10]
            },
          ]
        },
        //Chart.js options that controls the appearance of the chart
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
                display: true
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    },
    methods: {
        print(){
            console.log('im here!!@@@')
        },
        fillData(){
          // TODO:
        }
    },
    created(){
        // 여기에서 axios를 받자.
        this.fillData()
    },

    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }

// 각 차트별로 컴포넌트를 만들고, 각 컴포넌트 내에서 값을 axios로 받아 초기화하여 전달하자.
</script>
