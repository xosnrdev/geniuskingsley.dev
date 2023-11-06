const siteMetadata = {
  title: 'Success Kingsley',
  author: 'Success Kingsley',
  headerTitle: 'Successkingsley',
  description: 'Frontend Engineer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.geniuskingsley.dev',
  siteRepo: 'https://github.com/xosnrdev/blog-portfolio',
  siteLogo: '/static/images/logo.png',
  image: 'https://res.cloudinary.com/dc5x1aox7/image/upload/v1694168407/IMG_3790_xf2xjf.png',
  socialBanner: '/static/images/opengraph.webp',
  blogOpenGraph: '/static/images/opengraph.png',
  email: 'successxodev@gmail.com',
  github: 'https://github.com/xosnrdev',
  twitter: 'https://twitter.com/xosnrdev',
  linkedin: 'https://www.linkedin.com/in/snrjsdev/',
  spotify: 'https://open.spotify.com/user/31wuvc3q22pqbn7m5smst6jsbxae',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
