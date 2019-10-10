<template>
  <v-app-bar
    id="core-app-bar"
    absolute
    app
    color="transparent"
    flat
    height="120"
  >
    <v-toolbar-title 
    color="transparent"
    class="tertiary--text font-weight-light align-self-center">
      <v-btn
        v-if="responsive"
        dark
        icon
        @click.stop="onClick"
      >
        <v-icon>mdi-view-list</v-icon>
      </v-btn>

      <v-card
        class="d-flex"
        color="transparent"
        flat
        tile
      >
        <v-card
          class="order-1 pa-3 justify-center align-center"
          flat
          color="transparent"
        >
          <v-img contain
                max-height="24"
                max-width="25" :key="title.text"
                flat
                :src="require('@/assets'+title.icon)"/>     
        </v-card>
        <v-card
          flat
          class="order-2 pa-2"
          color="transparent"
        >
          <span
          class="font-weight-black">{{title.text}}</span>
        </v-card>
      </v-card>

      <v-card    
        class="d-flex"
        color="transparent"
        flat
        tile>
        <span class="subtitle-1">{{title.status}}</span>
      </v-card>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-text-field
          class="mr-4 purple-input"
          color="purple"
          label="Search..."
          hide-details
        />

        <v-btn
          icon
          to="/"
        >
          <v-icon color="tertiary">
            mdi-view-dashboard
          </v-icon>
        </v-btn>

        <v-menu
          bottom
          left
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="toolbar-items"
              icon
              to="/notifications"
              v-bind="attrs"
              v-on="on"
            >
              <v-badge
                color="error"
                overlap
              >
                <template slot="badge">
                  {{ notifications.length }}
                </template>
                <v-icon color="tertiary">
                  mdi-bell
                </v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-card>
            <v-list dense>
              <v-list-item
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-item-title v-text="notification" />
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn
          to="/user-profile"
          icon
        >
          <v-icon color="tertiary">
            mdi-account
          </v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapMutations
  } from 'vuex'
  import {eventBus} from '../../main'

  export default {
    data: () => ({
      notifications: [
        '넷플릭스의 구독 기간이 곧 만료됩니다.',
        '네이버TV를 잘 시청하지 않습니다.'
      ],
      title: {
        icon: '',
        text: '',
        status: ''
      },
      responsive: false
    }),

    created() {
      console.log('created');
      eventBus.$on('platformClicked', (link)=>{
        this.title = link;
      });
    },

    watch() {
      // '$route' (val) {
      //   this.title = val.name
      // }
    },

    mounted () {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },

    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onClick () {
        this.setDrawer(!this.$store.state.app.drawer)
      },
      onResponsiveInverted () {
        if (window.innerWidth < 991) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      }
    }
  }
</script>

<style>
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }

</style>
