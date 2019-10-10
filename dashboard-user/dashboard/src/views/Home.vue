<template>
  <v-container>
    <div class="text-right">
      <v-btn class="ma-2" outlined color="#5380ff">마이데이터 다운로드</v-btn>
    </div>

    <v-row>
        <v-col
          cols="12"
          lg="12"
        >
          <material-chart-card
            :data="dailySalesChart.data"
            :options="dailySalesChart.options"
            color="#4b4d5b"
            type="Line"
          >
            <h4 class="title font-weight-black">
              나의 시청 시간 분포
            </h4>

          </material-chart-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return{
        dailySalesChart: {
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
      }
    }
  }
</script>
