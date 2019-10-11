<template>
    <v-container style="padding:50px 200px;">
        <v-list two-line color='transparent' class="text-center">
            <v-list-item-content>
                <v-list-item-title style="margin-bottom:20px;"><h1>Guest님에게 적합한 구독 서비스 결과입니다.</h1></v-list-item-title>
                <v-list-item-subtitle><h2>선호하는 컨텐츠와 구독 서비스 매칭 결과입니다.</h2></v-list-item-subtitle>
            </v-list-item-content>
        </v-list>

        <br>
        <div style="max-width:70%; margin:0 auto;">
          <result></result>
        </div>

        <br>

        <div class="text-center">
            <h2>구독 만료 알림 무료 웹을 사용해보세요!</h2>
        </div>

        <br>

        <div class="text-center">
            <v-btn color="#1d62ff" dark width="220">바로가기</v-btn>
        </div>
    </v-container>
</template>

<script>
import Result from '@/components/charts/Result'
export default {
    components:{
        Result,
    },
    data(){
        return{

        }
    }
}
</script>