<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list style="padding:20px;">
      <v-list-item-group v-model="model" class="rankingBoard">
        <v-subheader>20대 여성</v-subheader>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="openLink(item)"
        >
          <v-list-item-icon>
            <v-list-item-title v-text="i+1"></v-list-item-title>
          </v-list-item-icon>

          <v-list-item-icon>
            <v-img contain
            max-height='24'
            max-width='25'
            :src="require('@/assets/icon-'+item.platform+'/icon-'+item.platform+'.png')"></v-img>
          </v-list-item-icon>

          <v-list-item-content class="text-center">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon class="text-right">
            <v-list-item-title v-text="item.view+'회'"></v-list-item-title>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>

    <div class="my-2 text-right">
        <v-btn text small>더보기</v-btn>
      </div>    
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          text: '[방탄소년단] 공연 브이로그',
          platform: 'navertv',
          link: 'https://www.youtube.com/watch?v=JdRcM4fLwgE',
          view: 321021,
        },
        {
          text: '알라딘',
          platform: 'netflix',
          link: 'https://www.youtube.com/watch?v=JdRcM4fLwgE',
          view: 11230,
        },
        {
          text: '[사나고] 3D펜으로 고양이 만들기',
          platform: 'youtube',
          link: 'https://www.youtube.com/watch?v=JdRcM4fLwgE',
          view: 11,
        },
        {
          text: '슈카월드 리니지',
          platform: 'twitch',
          link: 'https://www.youtube.com/watch?v=JdRcM4fLwgE',
          view: 10,
        },
      ],
      model: 1,
    }),

    created(){
      this.fillData();
    },

    methods: {
      fillData(){
        // TODO:
      },
      openLink(item){
        window.open(item.link, "_blank");
      }
    }
  }
</script>

