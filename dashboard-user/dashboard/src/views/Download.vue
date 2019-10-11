<template>
    <v-container>
    <v-data-table
        :headers="headers"
        :items="elements"
        hide-actions
        class="elevation-1"
    >
    </v-data-table>


    <export-excel
        class   = "btn btn-default"
        :data   = "elements"
        :fields = "headers.text"
        type    = "csv"
        name    = "mydata.xls">
        <v-btn block color="#5380ff" dark>
        전체 데이터 다운로드
        </v-btn>
    
    </export-excel>
    <br>
    <br>
  </v-container>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          { text: 'uid', value: 'uid' },
          { text: 'url', value: 'url' },
          { text: 'hour', value: 'hour' },
          { text: 'platform', value: 'platform' },
          { text: 'title', value: 'title' },

        ],
        elements: [
          {
            id: 1,
            uid: 'young',
            url: 'https://naver.com',
            hour: 9,
            platform: 'youtube',
            title: '제목'
          },
          {
            id: 2,
            uid: 'tak',
            url: 'https://naver.com',
            hour: 19,
            platform: 'netflix',
            title: '제목2'
          },
        ],
        json_meta: [
            [
                {
                    'key': 'charset',
                    'value': 'utf-8'
                }
            ]
        ],
      }
    },
    methods:{
        async fillData(){
            axios.get('http://127.0.0.1:8000/api/vlog/').then(res =>{
                // console.log(res);
                this.elements = res.data;
            });
        }
    },

    async mounted(){
        await this.fillData();
    }
  }
</script>