<template>
  <v-container>
    <div class="text-right">
      <!-- @click 추가하기 -->
      <v-btn class="ma-2" outlined color="#5380ff">컨텐츠 추천</v-btn>
      <v-btn class="ma-2" outlined color="#5380ff">마이데이터 다운로드</v-btn>
    </div>


    <!-- chart.js example -->
    <div class="columns">
      <div class="column">
        <h3>시청 패턴</h3>
        <watch-pattern ref="chart"></watch-pattern>
      </div>
    </div>

  </v-container>
</template>

<script>
  import WatchPattern from '@/components/charts/WatchPattern'
  export default {
    components:{
      WatchPattern,
    },
    data() {
      return {

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

    mounted(){
    },

    methods: {
      
    }
  }
</script>
