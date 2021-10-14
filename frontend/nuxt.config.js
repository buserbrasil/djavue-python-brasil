import colors from 'vuetify/es5/util/colors'
import pt from 'vuetify/es5/locale/pt'

const _isdev = process.env.npm_lifecycle_event === 'dev'
const _apimock = process.env.API_MOCK === '1' || (process.env.API_MOCK === undefined && _isdev)
const _apijs = _apimock ? 'apimock' : 'api'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/sentry.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/sentry',
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', {
      manifest: {
        name: 'djavue-python-brasil',
        short_name: 'djavue-python-brasil',
        lang: 'pt-BR',
        theme_color: 'blue'
      },
      workbox: {
      }
    }]
  ],
  sentry: {
    dsn: 'https://abcd@sentry.example.com/1',
    config: {}
  },
  buildModules: [
    '@nuxtjs/router'
  ],
  router: {
    middleware: ['fwdcookies', 'settings', 'auth']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    lang: {
      locales: { pt },
      current: 'pt'
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const home = config.resolve.alias['~']
      config.resolve.alias['~api'] = home + '/helpers/' + _apijs
    }
  }
}
