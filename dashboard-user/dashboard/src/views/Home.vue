<template>
  <v-container>
    <div class="text-right">
      <!-- @click 추가하기 -->
      <v-btn class="ma-2" outlined color="#5380ff">마이데이터 다운로드</v-btn>
    </div>

    <v-row>
        <v-col
          cols="12"
          lg="12"
        >
          <material-chart-card
            :data="userPattern.data"
            :options="userPattern.options"
            color="#4b4d5b"
            type="Line"
          >
            <h4 class="title font-weight-black">
              나의 시청 시간 분포
            </h4>

          </material-chart-card>
        </v-col>
    </v-row>

    <!-- chart.js example -->

    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart ref="chart"></line-chart>
      </div>
    </div>
  </v-container>
</template>

<script>
  import LineChart from '@/components/charts/LineChart'
  export default {
    components:{
      LineChart,
    },
    data() {
      return {
        userPattern: { // 시청 패턴
            data: {
              labels: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
              series: [
                [12, 17, 7, 17, 23, 18, 38,40, 22, 36, 47, 22, 10, 50, 44, 2]
              ]
            },
            options: {
              lineSmooth: this.$chartist.Interpolation.cardinal({
                tension: 50
              }),
              showPoint:false,
              low: 0,
              high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
              chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
            }
          },
        
        contentsRank: { // 컨텐츠 순위
          data: {
            platform: '',
            thumbnail: '',
            title: '',
            percentage: '',
          }
        },

      }
    },
    created(){
      console.log('on created');
      
      // TODO:   이 과정을 LineChart.vue에서 실행
      /*
      this.$axios.get('post/~~~')
        .then((response) => {
          this.userData = response.data // 이런 식으로 
        });

      */
    },
  }
</script>
