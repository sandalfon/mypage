export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gilles VIEIRA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'My website if you want to know more about me'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Data science, data scientist, deep learning, machine learning, Artifical intelligence'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/plugin.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  styleResources: {
    scss: ['@/assets/scss/_variables.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400, 900],
        ital: [100, 400, 900]
      }
    },
    download: true,
    stylePath: 'css/fonts.css',
    display: 'auto'
  },
  router: {
    base: '/gvieira/'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.joonsam.fr',
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    routes: [
      '/',
      '/cv',
      '/link'
    ],

    robots: {
      UserAgent: '*'
    },
    trailingSlash: true
  }
}
