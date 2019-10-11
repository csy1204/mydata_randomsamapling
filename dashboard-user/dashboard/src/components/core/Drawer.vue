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
      <br>
      <v-img
        src="@/assets/user-profile.png"
        height="34"
        contain
      />

      <v-list-item two-line style="padding:0 !important;">
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
        <div class="my-2" style="display:inline;">
            <v-row justify="center">
              <v-dialog v-model="dialog" scrollable max-width="900">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" text v-on="on">서비스 추가</v-btn>
                </template>

                <!-- Modal -->
                <v-card style="padding: 40px 100px;" >
                  <v-btn class="exit" text max-width="10" @click="dialog = false">
                    <v-img contain 
                    max-width="25"
                    :src="require('@/assets/btn-exit.png')"></v-img>
                  </v-btn>

                  <v-card-title style="margin:0 auto;">서비스 이용을 위한 추가 동의 안내</v-card-title>

                  <v-card-text style="padding: 30 130; height: 400px; margin: 0 auto;">
                      <div v-if="allClicked" fluid>
                        <v-btn @click="clickAll" block color='#5380ff' outlined dark>모두 동의</v-btn>
                      </div>
                      <div v-else fluid>
                        <v-btn @click="clickAll" block color='#333333' outlined dark>모두 동의</v-btn>
                      </div>

                      <br>

                      <div class="checkboxes" fluid>
                        <v-checkbox class="checkbox" v-model="checkboxes.checkbox1" :label="`개인정보 수집 및 이용동의`"></v-checkbox>
                        <v-checkbox class="checkbox" v-model="checkboxes.checkbox2" :label="`사용자 시청 정보`"></v-checkbox>
                        <v-checkbox class="checkbox" v-model="checkboxes.checkbox3" :label="`사용자 행동 정보`"></v-checkbox>
                        <v-checkbox class="checkbox" v-model="checkboxes.checkbox4" :label="`사용자 구독 정보`"></v-checkbox>
                      </div>
                  </v-card-text>

                  <v-card-actions style="margin: 0 auto;">
                    <v-btn width="120" color="#333333" dark tile @click="dialog = false">확인</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
        </div>    

        <div class="my-2" style="display:inline;">
          <v-btn outlined rounded small>관리</v-btn>
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
  import axios from 'axios';
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
    data() {
      return{
        allClicked:false,
        checkboxes:{
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        dialog: false,
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
            status: '2019.10.28 결제 예정'
          },
          {
            to: '/table-list',
            icon: '/icon-watcha/icon-watcha.png',
            text: '왓챠플레이',
            status: ''
          },
          {
            to: '/user-profile',
            icon: '/icon-netflix/icon-netflix.png',
            text: '넷플릭스',
            status: '2019.10.15 결제 예정'
          },
          {
            to: '/typography',
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
      }
    },

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
      },
      clickAll(){
        this.allClicked = !this.allClicked;
        for(let i=0; i < Object.keys(this.checkboxes).length; i++){
          this.checkboxes['checkbox'+(i+1)] = !this.checkboxes['checkbox'+(i+1)];
        }
      },
        updateStatus(){
          let vm = this;
          axios.get('http://127.0.0.1:8000/api/view/subscription?uid=shuka').then(res => {
            console.log(res.data[2]);
            // console.log(vm.data);
            vm.links[2].status = res.data[2];
          })
        }
      },

      async mounted(){
        await this.updateStatus();
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
  /* border:1px solid #9fa4b0;  */
  padding:5px;
  /* border-radius: 5px; */
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
}

.checkboxes{
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: left;
  padding: 50px 80px;
  border: 1px solid #d8d8d8; 
}

.checkbox{
  margin: 0 !important;
}


</style>
