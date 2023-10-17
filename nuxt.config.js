import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - plish',
    title: 'plish',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/main.scss',
    '@/assets/icons.scss',
  ],

  plugins: [
    { src: '~/plugins/api' },
    { src: '~/plugins/helper' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],
  env: {
    API_URL: process.env.API_URL,
  },

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl: true,
  },

  build: {
  }
}
