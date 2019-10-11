<template>
    <v-container style="padding:50px 200px;">
        <v-list two-line color='transparent' class="text-center">
            <v-list-item-content>
                <v-list-item-title style="margin-bottom:20px;"><h1>Guest님에게 적합한 구독 서비스를 추천해드립니다.</h1></v-list-item-title>
                <v-list-item-subtitle><h2>선호하는 컨텐츠 10개를 선택해주세요.</h2></v-list-item-subtitle>
            </v-list-item-content>
        </v-list>

        <div class="text-center">
            <v-btn to="/result" color="#1d62ff" dark width="220">완료</v-btn>
        </div>
        <br>
        <v-row v-for="(r, i) in contents.row" :key="i">
            <v-col v-for="(c, j) in contents.col" :key="j">
                <v-img contain
                max-width="110"
                :src="require('@/assets/contents-list/'+(i+1)+'-'+(j+1)+'.png')"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            contents:{
                row: 5, 
                col: 6
            }
        }
    }
}
</script>