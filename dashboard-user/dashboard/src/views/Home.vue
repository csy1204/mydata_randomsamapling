<template>
  <v-container style="padding:50px;">
    <div class="text-right">
      <v-btn to='/recommendation' class="ma-2" outlined color="#5380ff">컨텐츠 추천</v-btn>
      <v-btn to='/download' class="ma-2" outlined color="#5380ff">마이데이터 다운로드</v-btn>
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

    <br>
    <v-divider></v-divider>
    <br>

    <v-row>
      <v-col cols="6">
        <h3>최근 일주일간 분포</h3>
        <br>
        <div style="max-width:70%; margin:0 auto;">
          <last-week></last-week>
        </div>
      </v-col>

      <v-col cols="6">
        <h3>자주 보는 크리에이터</h3>
        <br>
        <favorite-creator></favorite-creator>
      </v-col>
    </v-row>


  </v-container>
</template>


<script>
  import WatchPattern from '@/components/charts/WatchPattern'
  import ContentRank from '@/components/charts/ContentRank'
  import RecommendVideo from '@/components/charts/RecommendVideo'
  import FavoriteCreator from '@/components/charts/FavoriteCreator'
  import LastWeek from '@/components/charts/LastWeek'


  export default {
    components:{
      WatchPattern,
      ContentRank,
      RecommendVideo,
      FavoriteCreator,
      LastWeek
    },
    data() {
      return {

      }
    },
    created(){
  
    },

    mounted(){
    },

    methods: {
      
    }
  }
</script>

<style>


</style>