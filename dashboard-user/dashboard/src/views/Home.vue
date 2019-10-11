<template>
  <v-container>
    <div class="text-right">
      <v-btn to='/recommendation' class="ma-2" outlined color="#5380ff">컨텐츠 추천</v-btn>
      <v-btn class="ma-2" outlined color="#5380ff">마이데이터 다운로드</v-btn>
    </div>

    <v-row>
      <v-col cols="6">
        <h3>전체 컨텐츠 순위</h3>
        <br>
        <content-rank></content-rank>
      </v-col>

      <v-col cols="6">
        <h3>추천영상</h3>
        <br>
        <recommend-video></recommend-video>
      </v-col>
    </v-row>

    <br>
    <v-divider></v-divider>
    <br>

    <v-container class="columns">
      <div class="column">
        <h3>시청 패턴</h3>
        <br>
        <watch-pattern ref="chart"></watch-pattern>
      </div>
    </v-container>

    <v-divider></v-divider>

  </v-container>
</template>

<script>
  import WatchPattern from '@/components/charts/WatchPattern'
  import ContentRank from '@/components/charts/ContentRank'
  import RecommendVideo from '@/components/charts/RecommendVideo'

  export default {
    components:{
      WatchPattern,
      ContentRank,
      RecommendVideo,
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
