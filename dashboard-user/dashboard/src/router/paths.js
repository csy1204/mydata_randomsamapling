/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/',
    // Relative to /src/views
    view: 'Home'
  },
  {
    path: '/dashboard',
    view: 'Dashboard',
    name: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/recommendation',
    view: 'ContentRecommendation'
  },
  {
    path: '/result',
    view: 'RecommendationResult'
  },
  {
    path: '/download',
    view: 'Download'
  }

]
