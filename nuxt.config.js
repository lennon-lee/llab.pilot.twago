export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'llab.pilot.twago',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDotCircle']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faAngleRight']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChild']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faHockeyPuck']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faGhost']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPortrait']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookSquare']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faLinkedin']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faTwitter']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faYoutube']
        }
      ]
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr: true
  }
}
