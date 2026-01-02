// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  site: {
    url: 'https://lbaiuqi.com',
    name: 'LBA IUQI',
    description: 'Lembaga Bahasa Asing IUQI (LBA IUQI) merupakan unit resmi penyelenggara layanan TOEFL dan TOAFL berbasis web untuk kebutuhan akademik dan institusional.',
    defaultLocale: 'id',
    indexable: true,
  },
  robots: {
    disallow: '',
    allow: '/',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#166534' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteName: 'LBA IUQI',
      siteUrl: 'https://lbaiuqi.com',
      toaflUrl: 'https://toafl.lbaiuqi.com',
      toeflUrl: 'https://toefl.lbaiuqi.com',
      contactEmail: 'lbaiuqi@gmail.com'
    }
  }
})