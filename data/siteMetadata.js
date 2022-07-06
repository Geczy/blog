const siteMetadata = {
  title: 'Blog | Matt Gates',
  author: 'Matt Gates',
  headerTitle: 'Mere Musings',
  description: 'my personal blog where I share my musings',
  snippets: 'Reuseable code snippets collected by Matt',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://mgates.vercel.app',
  siteRepo: 'https://github.com/geczy/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'info@mgates.me',
  github: 'https://github.com/geczy',
  twitter: 'https://twitter.com/geczy',
  linkedin: 'https://www.linkedin.com/in/gate',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-081Q6SPNH3', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'geczy',
  },
}

module.exports = siteMetadata
