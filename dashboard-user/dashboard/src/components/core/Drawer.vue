<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    color="#e8eaee"
    
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img
        v-bind="attrs"
        gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
      />
    </template>

    <v-list class="profile">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-avatar >
            <v-img
              src="https://cdn.vuetifyjs.com/images/logos/v.png"
              height="34"
              contain
            />
          </v-list-item-avatar>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="title">
            Sooji Kim
          </v-list-item-title>
          <v-list-item-subtitle>
            ksj2019@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <div>
            <v-btn class="btn-profile" depressed dark color="#5380ff">my profile</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <div class="svcManage">
        <v-subtitle1>서비스 추가</v-subtitle1>  
        <div class="my-2" style="display:inline;">
          <v-btn text small>관리</v-btn>
        </div>    

      </div>

      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />

      <v-list-item
        
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        active-class="primary black--text"
        @click = "platformClicked(link)"
      >
        <v-list-item-action>
          <v-img contain
          max-height="24"
          max-width="25"
          v-bind:src="require('@/assets'+link.icon)"/>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
          <v-list-item-subtitle 
          dense
          font-size="17"
          v-text="link.status"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
// Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {eventBus} from '../../main'

  export default {
    props: {
      opened: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      links: [
        {
          to: '/',
          icon: '/logo.png',
          text: '전체',
          status: ''
        },
        {
          to: '/dashboard',
          icon: '/icon-youtube/icon-youtube.png',
          text: '유튜브 프리미엄',
          status: '2019.09.28 ~ 2019.10.28'
        },
        {
          to: '/user-profile',
          icon: '/icon-netflix/icon-netflix.png',
          text: '넷플릭스',
          status: '2019.09.15 ~ 2019.10.15'
        },
        {
          to: '/table-list',
          icon: '/icon-twitch/icon-twitch.png',
          text: '트위치',
          status: '구독 채널 2개'
        },
        {
          to: '/typography',
          icon: '/icon-vlive/icon-vlive.png',
          text: 'VLIVE',
          status: '구독 채널 2개'
        },
        {
          to: '/icons',
          icon: '/icon-navertv/icon-navertv.png',
          text: '네이버TV',
          status: ''
        },
      ]
    }),

    computed: {
      ...mapState('app', ['image', 'color']),
      inputValue: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      platformClicked(link){
        eventBus.changePlatform(link);
      }
    }
  }
</script>

<style scoped>
  .profile{
    text-align: center;
    align-content: center;
    background-color: white;
  }

  .btn-profile{
    width: 180px;
    height: 48px;
    border-radius: 24px;
    text-align: center;
    background-color: #5380ff;
    max-width:150px;
    font-size: 0.8rem;
}

.svcManage{
  margin:8px; 
  border:1px solid #9fa4b0; 
  padding:5px;
  border-radius: 5px;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
}

</style>
