<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line} from 'vue-chartjs';
  import axios from 'axios';
  
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
              data: [] //16개
            },
            {
              label: '20대 여성 평균',
              backgroundColor: '#5380ff',
              pointBackgroundColor: 'white',
              borderWidth: 5,
              borderColor: '#5380ff',
              fill: false,
              //Data to be represented on y-axis
              data: []
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
        async fillData(){
          console.log('fillData()')
          axios.get('http://127.0.0.1:8000/api/view/pattern?age=20').then(res => { 
            console.log(res);
            this.datacollection.datasets[1].data = res.data;
          })
          const res2 = await axios.get('http://127.0.0.1:8000/api/view/pattern?age=20');
          console.log(res2);
          this.datacollection.datasets[1].data  = res2.data;
          
          axios.get('http://127.0.0.1:8000/api/view/pattern?uid=idollove').then(res=>{
            console.log(res);
            this.datacollection.datasets[0].data = res.data;
          })

        }
    },
    created(){
        // 여기에서 axios를 받자.
        this.fillData()
        console.log('created()');
    },
    updated(){
      console.log('updated()');
      this.fillData()
    },

    mounted () {
      console.log('mounted()');
      this.fillData();
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }

// 각 차트별로 컴포넌트를 만들고, 각 컴포넌트 내에서 값을 axios로 받아 초기화하여 전달하자.
</script>
